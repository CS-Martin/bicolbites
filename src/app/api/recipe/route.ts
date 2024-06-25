import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import { RECIPE_JSON_FILE_PATH } from "@/lib/constants";

export async function GET() {
  try {
    const response = await fs.readFile(RECIPE_JSON_FILE_PATH, "utf8");
    const recipes = JSON.parse(response);
    return NextResponse.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching recipes." },
      { status: 500 }
    );
  }
}
