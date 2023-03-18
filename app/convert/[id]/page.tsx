import { fileFromSync } from "node-fetch";
import { randomUUID } from "crypto";
import { Params } from "./layout";
import ytdl from "ytdl-core";
import fs from "fs";

export default async function Page({ params }: Params) {
  const videoUrl = `https://www.youtube.com/watch?v=${params.id}`;
  const text = await transcribe(videoUrl);
  return <p className="text-white text-xl">{text}</p>;
}

async function transcribe(videoUrl: string) {
  const outputFile = `/tmp/${randomUUID()}.mp4`;
  try {
    const fileStream = ytdl(videoUrl, {
      quality: "140",
    }).pipe(fs.createWriteStream(outputFile));

    await new Promise((resolve) => {
      fileStream.on("finish", resolve);
    });
  } catch (err: any) {
    console.log(`❌ Error message in transcribing: ${err.message}`);
  }
  try {
    const form = new FormData();
    const mimetype = "audio/mp4";
    const file = fileFromSync(outputFile, mimetype);
    form.append("file", file);
    form.append("model", "whisper-1");

    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPEN_API_KEY}`,
        },
        body: form,
      }
    );
    const { text } = await response.json();
    return text;
  } catch (err: any) {
    console.log(`❌ Error message in transcribing: ${err}`);
  }
}
