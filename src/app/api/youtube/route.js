import { NextResponse } from "next/server";
import Download from "../../../function/download";
import axios from "axios";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
    const format = searchParams.get('format')
    const baseUrl = 'https://cuka.rfivecode.com'
    try {
        

           const response = await fetch(`${baseUrl}/download`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
              body: JSON.stringify({ url, format: 'mp4' })
          });
        // const youtubeResponse = await fetch(`https://api.ryzendesu.vip/api/downloader/ytdl?url=${url}`)
        // if (!youtubeResponse.ok) {
        //     throw new Error(`HTTP error! Status: ${youtubeResponse.status}`);
        // }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
  }