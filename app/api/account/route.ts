import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    return NextResponse.json({ message: "Hello World" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" });
  }
}
