import { useEffect, useState } from "react";

function NowPlayingWidget() {
  const [song, setSong] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNowPlaying() {
      try {
        const res = await fetch("/api/now-playing");
        const data = await res.json();
        setSong(data);
      } finally {
        setLoading(false);
      }
    }

    fetchNowPlaying();

    // optional: refresh every 60s
    const interval = setInterval(fetchNowPlaying, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="absolute top-12 right-30 flex items-center gap-3 p-2 animate-pulse">
        <div className="w-12 h-12 rounded bg-gray-700" />
        <div className="flex flex-col gap-1">
          <div className="h-5 w-32 bg-gray-700 rounded" />
          <div className="h-4 my-1 w-24 bg-gray-700 rounded" />
          <div className="h-4 w-28 bg-gray-700 rounded" />
        </div>
      </div>
    );
  }

  if (!song) {
    return <p className="text-white">No song playing</p>;
  }

  return (
    <div className="absolute top-12 right-30 flex items-center gap-3 p-2 ">
      {song.albumArt && (
        <img
          src={song.albumArt}
          alt={song.track}
          className="w-12 h-12 m-0 rounded"
        />
      )}
      <div>
        <p className="font-semibold text-base text-white m-0 p-0">
          {song.track}
        </p>
        <p className="text-sm text-white m-0 p-0">{song.artist}</p>
        <a
          href={song.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-amber-1 m-0 p-0"
        >
          Listen on Spotify
        </a>
      </div>
    </div>
  );
}

export default NowPlayingWidget;
