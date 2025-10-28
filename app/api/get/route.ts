import { NextResponse } from "next/server";
import fs from "fs";

const data = JSON.parse(fs.readFileSync("shopsm_products.json", "utf8"));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 24;
  const start = (page - 1) * limit;
  const end = start + limit;

  const total = data.length;
  const totalPages = Math.ceil(total / limit);

  const items = data.slice(start, end);

  return NextResponse.json({
    page,
    totalPages,
    totalItems: total,
    items,
  });
}
