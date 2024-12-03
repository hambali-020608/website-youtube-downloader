import { NextResponse } from "next/server";
import download from "../../../function/download";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');
    

    // Validasi URL dan format
    if (!url) {
        return NextResponse.json(
            { message: "Parameter URL dan format diperlukan" },
            { status: 400 }
        );
    }

    try {
        const video = await download(url);
        
        // Pastikan untuk memeriksa apakah respons `video` berhasil
        if (video.success) {
            return NextResponse.json(video.result);
        } else {
            return NextResponse.json(
                { message: "Gagal mengunduh video", error: video.message },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { message: "Error fetching YouTube data", error: error.message },
            { status: 500 }
        );
    }
}
