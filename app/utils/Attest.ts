// TODO: Can I use Privy to store metadata (attestations) or do I need AWS DynamoDB?

import {
  REPUTATION_SCHEMMA_UID,
  getEAS,
  reputationSchemaEncoder,
} from "../config/EAS";

// TODO:
// On Successful User sign up, we will create a new reputation for the user
// confirm this works in API from admin wallet
// THEN integrate sponsored transactions = we need the user to DO the attestation from their private key, but with our gas
export async function attestNewReputation(
  recipient: string,
  name: string,
  email: string
) {
  const { eas } = getEAS();
  const encodedData = reputationSchemaEncoder.encodeData([
    { name: "name", value: name, type: "string" },
    { name: "email", value: email, type: "string" },
    { name: "reputation", value: 1, type: "uint8" },
  ]);

  const tx = await eas.attest({
    schema: REPUTATION_SCHEMMA_UID,
    data: {
      recipient,
      data: encodedData,
    },
  });

  const newAttestationUID = await tx.wait();
  console.log("new attestation UID: ", newAttestationUID);
  return newAttestationUID;
}
