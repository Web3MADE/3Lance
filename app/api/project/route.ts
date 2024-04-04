import { GelatoRelay } from "@gelatonetwork/relay-sdk";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

// 1. Freelancer attests to completing a project Transparent funding example)
// 2. Freelancer creates signature from privy signer --> POSTS to API/Gelato --> Gelato triggers delegatedAttestation with Signature
// 3. Gelato Relay is used to cover the cost of the transaction on behalf of smart account (is 4337 even necessary?)
export async function POST(req: Request, res: NextApiResponse) {
  //TODO: Create EAS schema for project completion
  // Get address for OP Sepolia for EAS.sol and whitelist for Gelato to call
  try {
    const data = await req.json();
    const relay = new GelatoRelay();

    // ethers populateTransaction creates an unsigned transaction for Gelato to sign and execute
    // the gelato request would be passed from frontend signer to this API
    console.log("req body ", data);

    return NextResponse.json({ message: "Hello World" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
}
