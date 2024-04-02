import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from "ethers";

export const EASContractAddress = "0x4200000000000000000000000000000000000021"; // Sepolia v0.26
export const reputationSchemaEncoder = new SchemaEncoder(
  "uint256 eventId, uint8 voteIndex"
);
export const REPUTATION_SCHEMMA_UID =
  "0xe424edaa41e5d34616c96ffb272be778feeac090b3dceedadf7bfa7ee966a188";
export function getEAS() {
  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(EASContractAddress);

  // Gets a default provider (in production use something else like infura/alchemy)
  // TODO: provider will ALWAYS be using OP Sepolia rpc url
  // private key will ALWAYS be admin
  const provider = new ethers.JsonRpcProvider();
  const signer = new ethers.Wallet(
    process.env.ADMIN_PRIVATE_KEY ?? "",
    provider
  );

  // Connects an ethers style provider/signingProvider to perform read/write functions.
  // MUST be a signer to do write operations!
  eas.connect(signer);

  return { eas, provider, signer };
}
