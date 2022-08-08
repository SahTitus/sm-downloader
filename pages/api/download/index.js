// import avd from "all-video-downloader";
import axios from "axios";
import * as fs from "fs";
import path, { resolve } from "path";
import vdp from '../downloader'

export default async function handler(req, res) {
  const { body } = req;

  // The path of the downloaded file on our machine
 if (body.downloadUrl) {
  const name = "Good mongoose"
  const dir = `${body.title}sm.${body.ext}`
  const localFilePath = path.resolve( dir);
  console.log(localFilePath)

  try {
      // Call this function if fileUrl exists
    const response = await axios({
      method: 'GET',
      url: body.downloadUrl,
      responseType: 'stream',
    });

    const download = response.data.pipe(fs.createWriteStream(localFilePath));

    download.on('finish', () => {
      console.log('Successfully downloaded file!');
    });
    res.send('Download successfully')

  } catch (err) {
    throw new Error(err);
  }
 }
}