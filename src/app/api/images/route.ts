import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

interface BlobItem {
  url: string;
}

export async function GET() {
  try {
    const result = await list();

    const images: string[] = result.blobs?.map((item: BlobItem) => item.url) || [];

    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
