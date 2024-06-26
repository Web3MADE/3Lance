"use client";
import {
  Button,
  Chip,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useWallets } from "@privy-io/react-auth";
import * as React from "react";
import {
  IJobSchemaData,
  useRegisterJobSchema,
} from "../hooks/useRegisterJobSchema";
/**@dev deprecated in place of PostFreelanceJob.tsx */
export default function PostClientJob() {
  const { ready: isWalletReady, wallets } = useWallets();
  const { registerJobSchema, loading, error } = useRegisterJobSchema();
  const [difficulty, setDifficulty] = React.useState({
    type: "bool",
    name: "Expert",
  });
  // ExpirationTime field
  const [deadline, setDeadline] = React.useState<string>();
  const [skills, setSkills] = React.useState([
    {
      type: "string",
      name: "Web Development",
    },
  ]);

  const availableSkills = [
    { type: "Web Development", name: "Web Development" },
    { type: "Graphic Design", name: "Graphic Design" },
    { type: "Fullstack Web3 Development", name: "Fullstack Web3 Development" },
    { type: "Solidity Development", name: "Solidity Development" },
    { type: "Frontend Development", name: "Frontend Development" },
  ];

  const handleChangeDifficulty = (event: SelectChangeEvent) => {
    setDifficulty({ ...difficulty, name: event.target.value });
  };

  const handleChangeSkills = (event: any) => {
    const {
      target: { value },
    } = event;
    console.log("value ", value);
    console.log("Skills: ", skills);
    const selectedSkill = value[value.length - 1];
    const skillAlreadyExists = skills.find(
      (skill) => skill.name === selectedSkill
    );

    if (skillAlreadyExists) return;

    setSkills((prev) => [...prev, { type: "string", name: selectedSkill }]);
  };

  function handleDeadline(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setDeadline(value);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!deadline || !skills || !difficulty || !isWalletReady) {
      console.error("missing required fields ", deadline, skills, difficulty);
      return;
    }

    const timestampInSeconds = Math.floor(new Date(deadline).getTime() / 1000);

    console.log("deadline ", timestampInSeconds);
    console.log("skills ", skills);
    console.log("difficulty ", difficulty);
    const jobSchemaData: IJobSchemaData = {
      // TODO: generate bytes32 via ethers
      ownerAddress: wallets[0].address,
      projectID: { type: "bytes32", name: "1" },
      difficulty: difficulty,
      deadline: { type: "uint256", name: timestampInSeconds },
      skills: skills,
    };

    const uid = await registerJobSchema(jobSchemaData);
    console.log("uid ", uid);

    // await attestJob("schemaUID", "freelancer", "client", "encodedData")
  }
  // TODO: Add submissin logic to register EAS Schema for Job
  // create resolver contract logic to only send payment of completion from both parties
  // Then from mocked JobCard, add a button to apply for job (automatically approves & attests)
  // Freelancer attests completion of job

  return (
    <Container maxWidth="sm">
      <h1>Post a Job</h1>
      <form>
        <TextField
          fullWidth
          label="Job Title"
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          label="Job Description"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
          <Select
            labelId="difficulty-select-label"
            id="difficulty-select"
            value={difficulty.name}
            label="Difficulty"
            onChange={handleChangeDifficulty}
            required
          >
            <MenuItem value="Junior">Junior</MenuItem>
            <MenuItem value="Intermediate">Intermediate</MenuItem>
            <MenuItem value="Expert">Expert</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          type="date"
          label="Deadline"
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={deadline}
          onChange={handleDeadline}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="skills-multiple-chip-label">
            Required Skills
          </InputLabel>
          <Select
            labelId="skills-multiple-chip-label"
            id="skills-multiple-chip"
            multiple
            value={skills}
            onChange={handleChangeSkills}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip key={value.name} label={value.name} />
                ))}
              </div>
            )}
          >
            {availableSkills.map((skill) => (
              <MenuItem key={skill.name} value={skill.name}>
                {skill.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          style={{ marginTop: "20px" }}
        >
          Post Job
        </Button>
      </form>
    </Container>
  );
}
