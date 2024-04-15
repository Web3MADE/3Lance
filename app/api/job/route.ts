import { registerSchema } from "@/app/config/EAS";
import { constructSchema } from "@/app/utils/Schema";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
// LATER: typecast params
export async function POST(req: Request, res: Response) {
  try {
    if (!process.env.ADMIN_PRIVATE_KEY) {
      throw new Error("Admin private key not found");
    }
    const { jobSchemaData } = await req.json();
    console.log("req body params ", jobSchemaData);
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
    const schemaUID = await transaction.wait();

    await sql`
      INSERT INTO "Job" ("title", "description", "freelancerId", "id") 
      VALUES ('Testtitle', 'TestDescription', ${jobSchemaData.ownerAddress}, ${schemaUID})
      `;

    return NextResponse.json({ schemaUID });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" });
  }
}
