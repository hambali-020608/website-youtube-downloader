const axios = require("axios");

const formatAudio = [
  "mp3",
  "m4a",
  "webm",
  "acc",
  "flac",
  "opus",
  "ogg",
  "wav",
  "4k",
];
const formatVideo = ["360", "480", "720", "1080", "1440"];

async function ytdl(query,format) {

    const video = await axios.get(
      `https://profesor-api.vercel.app/api/youtube/v4/download?url=${query}format=${format}`
    );
    const result = await video.data;

    return result
 
}

export default async function download(url,format) {
  return await ytdl(url,format)
}
