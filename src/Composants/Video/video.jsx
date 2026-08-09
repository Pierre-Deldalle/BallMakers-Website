import { useState } from "react";
import style from "./Video.module.css";

function extractVideoInfo(url) {
  if (!url) return { platform: null, id: null };

  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  if (ytMatch) return { platform: "youtube", id: ytMatch[1] };

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return { platform: "vimeo", id: vimeoMatch[1] };

  return { platform: null, id: null };
}

export default function Video({
  videoId,
  videoURL,
  autoplay = false,
  mute = false,
  loop = false,
  start = 0,
}) {
  const [playing, setPlaying] = useState(false);

  const { platform, id } = videoURL
    ? extractVideoInfo(videoURL)
    : { platform: "youtube", id: videoId };

  if (!id) return null;

  let src = "";
  let thumbnail = "";

  if (platform === "youtube") {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: mute ? "1" : "0",
      controls: "0",
      loop: loop ? "1" : "0",
      rel: "0",
      modestbranding: "1",
      iv_load_policy: "3",
      disablekb: "1",
      fs: "0",
      ...(loop && { playlist: id }),
      ...(start && { start }),
    });
    src = `https://www.youtube.com/embed/${id}?${params}`;
    thumbnail = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  }

  if (platform === "vimeo") {
    const params = new URLSearchParams({
      autoplay: "1",
      muted: mute ? "1" : "0",
      controls: "1",
      loop: loop ? "1" : "0",
      title: "0",
      byline: "0",
      portrait: "0",
    });
    src = `https://player.vimeo.com/video/${id}?${params}`;
    thumbnail = "";
  }

  return (
    <div className={style.containerVideo}>
      {!playing ? (
        <div
          className={style.overlay}
          onClick={() => setPlaying(true)}
          style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : {}}
        >
          <button className={style.playButton} aria-label="Lire la vidéo">
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      ) : (
        <iframe
          src={src}
          allowFullScreen
          allow="autoplay; fullscreen; picture-in-picture"
          className={style.iframe}
        />
      )}
    </div>
  );
}
