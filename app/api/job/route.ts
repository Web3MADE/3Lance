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
    const txh = await registerSchema(process.env.ADMIN_PRIVATE_KEY, schema);
    // TODO: get UID from emitted logs & then save UID to DB/return to UI
    console.log("txh res", txh);

    return NextResponse.json({ txh });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Error" });
  }
}
