import { NextResponse } from "next/server"
import { del } from "@vercel/blob"

export async function POST(request: Request) {
  const { url } = await request.json()

    if (!url) {
        return NextResponse.json({ error: "URL is required." }, { status: 400 })
          }

            try {
                await del(url)
                    return NextResponse.json({ message: "File deleted successfully" })
                      } catch (error) {
                          console.error("Error deleting blob:", error)
                              return NextResponse.json({ error: "Failed to delete file" }, { status: 500 })
                                }
                                }

