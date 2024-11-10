import { NextResponse } from "next/server";
import ytdl from "@distube/ytdl-core";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json(
            { message: "URL parameter is missing" },
            { status: 400 }
        );
    }

    try {
        const info = await ytdl.getInfo(url);
        const formats = Array.isArray(info.formats) ? info.formats : [];
        return NextResponse.json(formats);
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
}
