const axios = require('axios');

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav', '4k'];
const formatVideo = ['360', '480', '720', '1080', '1440'];

async function ytdl(query) {
  
  const video = await axios.get(`https://server-downloader.vercel.app/api/youtube/search?q=${query}`)
  const result = await video.data

  return result


 }
 

export default async function download(url) {
  return await ytdl(url);
}
