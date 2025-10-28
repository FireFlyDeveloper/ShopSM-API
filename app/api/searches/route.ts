import { NextResponse } from "next/server";
import fs from "fs";

const data = JSON.parse(fs.readFileSync("shopsm_products.json", "utf8"));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").toLowerCase();

  if (!q) {
    return NextResponse.json([]);
  }

  const suggestions = data
    .filter((item: any) => item.name.toLowerCase().includes(q))
    .slice(0, 10) // limit suggestions

  const res = NextResponse.json(suggestions);

  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return res;
}
