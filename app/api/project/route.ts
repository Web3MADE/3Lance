import { GelatoRelay, SponsoredCallRequest } from "@gelatonetwork/relay-sdk";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

// 1. Freelancer attests to completing a project Transparent funding example)
// 2. Freelancer creates signature from privy signer --> POSTS to API/Gelato --> Gelato triggers delegatedAttestation with Signature
// 3. Gelato Relay is used to cover the cost of the transaction on behalf of smart account (is 4337 even necessary?)
export async function POST(req: Request, res: NextApiResponse) {
  //TODO: Create EAS schema for project completion
  // Get address for OP Sepolia for EAS.sol and whitelist for Gelato to call
  try {
    if (!process.env.GELATO_API_KEY) {
      throw new Error("Gelato API Key not found");
    }
    const { chainId, contractAddress, unsignedTransaction } = await req.json();
    console.log("req body unsignedTransaction ", unsignedTransaction);

    const relay = new GelatoRelay();
    const request: SponsoredCallRequest = {
      chainId,
      target: contractAddress,
      data: unsignedTransaction,
    };

    const relayResponse = await relay.sponsoredCall(
      request,
      process.env.GELATO_API_KEY
    );
    console.log("relayResponse ", relayResponse);
    // ethers populateTransaction creates an unsigned transaction for Gelato to sign and execute
    // the gelato request would be passed from frontend signer to this API

    return NextResponse.json({ message: "Hello World" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
}
