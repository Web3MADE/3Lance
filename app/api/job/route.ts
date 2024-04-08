import { attestByDelegation, getEAS } from "@/app/config/EAS";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    if (!process.env.ADMIN_PRIVATE_KEY) {
      throw new Error("Admin private key not found");
    }
    console.log("before eas");
    const { eas } = getEAS(process.env.ADMIN_PRIVATE_KEY);
    console.log("after eas ", eas);
    const uid = await attestByDelegation(
      eas,
      "0x0000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000",
      false
    );
    return NextResponse.json({ uid });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" });
  }
}
