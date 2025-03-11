import { NextResponse } from "next/server"
import { list } from "@vercel/blob"

export async function GET() {
  try {
    const { blobs } = await list()
    return NextResponse.json({ blobs })
  } catch (error) {
    console.error("Error listing blobs:", error)
    return NextResponse.json({ error: "Failed to list blobs" }, { status: 500 })
  }
}

