import { NextResponse } from "next/server";
import fs from "fs";

const data = JSON.parse(fs.readFileSync("shopsm_products.json", "utf8"));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const min = parseFloat(searchParams.get("min") || "0");
  const max = parseFloat(searchParams.get("max") || "999999");

  const filtered = data.filter((item: any) => {
    const value = item.price?.regularPrice?.amount?.value || 0;
    return value >= min && value <= max;
  });

  return NextResponse.json({
    count: filtered.length,
    items: filtered,
  });
}
