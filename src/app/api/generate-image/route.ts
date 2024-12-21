import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { text } = body;

    // TODO: Call your Image Generation API here
    // For now, we'll just echo back the text
    console.log("Getting text from: route.ts file", text);

    const url = new URL("https://tekhliqlabs--sd-demo-model-generate.modal.run/");

    url.searchParams.set("prompt", text);

    console.log("Requesting URL", url.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "X-API-Key": process.env.API_KEY || "",
        Accept: "image/jpeg",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Response:", errorText);
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const imageBuffer = await response.arrayBuffer();

    const filename = `${crypto.randomUUID()}.jpg`;

    const blob = await put(filename, imageBuffer, {
      access: "public",
      contentType: "image/jpeg",
    });

    return NextResponse.json({
      success: true,
      imageUrl: blob.url,
      // Also add Prompt in the database against which Image was produced
    });

  } catch (error: unknown) {
    console.error(error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
