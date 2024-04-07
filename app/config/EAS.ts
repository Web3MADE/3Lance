import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { Signature, ethers } from "ethers";

export const TEST_SEPOLIA_ADDRESS =
  "0x26a44E5bD991825Fe8AF2aa2E2e891E0926a37CC";
export const SEPOLIA_EAS_ADDRESS = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e";
export const EASContractAddress = "0x4200000000000000000000000000000000000021"; // Sepolia v0.26
export const reputationSchemaEncoder = new SchemaEncoder(
  "uint256 eventId, uint8 voteIndex"
);
export const projectSchemaEncoder = new SchemaEncoder(
  "bytes32 ProjectID, address Freelancer, address Client, bool isCompleted"
);
export const REPUTATION_SCHEMMA_UID =
  "0xe424edaa41e5d34616c96ffb272be778feeac090b3dceedadf7bfa7ee966a188";
export const PROJECT_SCHEMA_UID =
  "0xa300fdbeaa89c0fa9cd14e47ab5fd9300b00ce2ced58b4b99d2d578a72a6dfb3";
export function getEAS(privateKey: string) {
  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(SEPOLIA_EAS_ADDRESS);

  // Gets a default provider (in production use something else like infura/alchemy)
  // TODO: provider will ALWAYS be using OP Sepolia rpc url
  // private key will ALWAYS be admin
  // YOU NEED a JSONRPCPPROVIDER to do EAS methods, NOT BROWSERPROVIDER
  const provider = new ethers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/4b3d75730534458fae28fd4746bdc560"
  );
  const signer = new ethers.Wallet(privateKey, provider);

  // Connects an ethers style provider/signingProvider to perform read/write functions.
  // MUST be a signer to do write operations!
  eas.connect(signer);

  // Step 1: set default signer as the admin wallet
  // Step 2: setup attestByDelegation

  return { eas, provider, signer };
}

export async function attestByDelegation(
  eas: EAS,
  signature: Signature,
  freelancer: string,
  client: string,
  isCompleted: boolean
): Promise<string> {
  const encodedData = projectSchemaEncoder.encodeData([
    {
      name: "ProjectID",
      value: "",
      type: "bytes32",
    },
    { name: "Freelancer", value: freelancer, type: "address" },
    { name: "Client", value: client, type: "address" },
    { name: "isCompleted", value: isCompleted, type: "bool" },
  ]);

  const tx = await eas.attest({
    schema: PROJECT_SCHEMA_UID,
    data: {
      recipient: freelancer,
      revocable: true, // Be aware that if your schema is not revocable, this MUST be false
      data: encodedData,
    },
  });

  // TODO: Once EAS fixes the issue with the attestByDelegation method, use this instead
  // const tx = await eas.attestByDelegation({
  //   schema: PROJECT_SCHEMA_UID,
  //   data: {
  //     data: encodedData,
  //     recipient: "0x0000000000000000000000000000000000000000",
  //   },
  //   signature,
  //   attester: freelancer,
  // });

  const newAttestationUID = await tx.wait();
  console.log("newAttestationUID", newAttestationUID);
  return newAttestationUID;
}
