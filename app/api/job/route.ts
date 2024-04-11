import { registerSchema } from "@/app/config/EAS";
import { constructSchema } from "@/app/utils/schema";
import { NextResponse } from "next/server";
// LATER: typecast params
export async function POST(req: Request, res: Response) {
  try {
    if (!process.env.ADMIN_PRIVATE_KEY) {
      throw new Error("Admin private key not found");
    }
    const { jobSchemaData } = await req.json();
    console.log("req body params ", jobSchemaData);
    // construct schema
    const schema = constructSchema([
      ...jobSchemaData.skills,
      jobSchemaData.deadline,
      jobSchemaData.difficulty,
      jobSchemaData.projectID,
    ]);
    console.log("constructed schema ", schema);
    const transaction = await registerSchema(
      process.env.ADMIN_PRIVATE_KEY,
      schema
    );
    // Wait for the transaction to be mined
    const uid = await transaction.wait();
    console.log("uid ", uid);

    return NextResponse.json({ uid });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" });
  }
}
