import { NextResponse } from "next/server";
import download from "../../../function/download";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get("url");
    const format = searchParams.get("format");

    // Validasi parameter
    if (!url) {
        return NextResponse.json(
            { message: "Parameter URL dan format diperlukan" },
            { status: 400 }
        );
    }

    try {
        // Memanggil fungsi download
        const video = await download(url);

        // Validasi data yang diterima dari fungsi download
        if (video) {
            return NextResponse.json(video); // Pastikan video.result adalah objek yang bisa di-serialize
        } else {
            return NextResponse.json(
                { message: "Gagal mendapatkan data video" },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error("Error fetching YouTube data:", error);

        // Menangani error dengan informasi tambahan
        return NextResponse.json(
            { 
                message: "Terjadi kesalahan saat mengunduh data YouTube", 
                error: error.message 
            },
            { status: 500 }
        );
    }
}
