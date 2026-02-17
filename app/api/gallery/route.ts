import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public/content/gallery.json");
    const data = readFileSync(filePath, "utf-8");
    const gallery = JSON.parse(data);

    return Response.json(gallery);
  } catch (error) {
    return Response.json(
      { error: "Failed to load gallery content" },
      { status: 500 }
    );
  }
}
