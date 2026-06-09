import styles from "./Video.module.css";

export default function Video({
  videoId,
  autoplay = false,
  mute = false,
  controls = true,
  loop = false,
  rel = false,
  start = 0,
}) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: mute ? "1" : "0",
    controls: controls ? "1" : "0",
    loop: loop ? "1" : "0",
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    ...(loop && { playlist: videoId }),
    ...(start && { start }),
  });
  const src = `https://www.youtube.com/embed/${videoId}?${params}`;

  return (
    <div className={styles.containerVideo}>
      <iframe src={src} allowFullScreen className={styles.iframe} />
    </div>
  );
}
