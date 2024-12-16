const axios = require('axios');

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav', '4k'];
const formatVideo = ['360', '480', '720', '1080', '1440'];

async function ytdl(query,format) {
  if(format == 'mp4'){
  const video = await axios.get(`https://restapii.rioooxdzz.web.id/api/ytmp4?url=${query}`)
  const result = await video.data

  return result.data.response

}

else{
  const video = await axios.get(`https://restapii.rioooxdzz.web.id/api/ytdl?url=${query}`)
  const result = await video.data

  return result.data


}
 }
 

export default async function download(url,format) {
  return await ytdl(url,format);
}
