import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public/content/team.json");
    const data = readFileSync(filePath, "utf-8");
    const team = JSON.parse(data);

    return Response.json(team);
  } catch (error) {
    return Response.json(
      { error: "Failed to load team content" },
      { status: 500 }
    );
  }
}
