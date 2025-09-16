import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    const interval = setInterval(fetchNowPlaying, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-12 right-30 rounded-md transition-all duration-200 ">
      <AnimatePresence exitBeforeEnter>
        {loading || !song ? (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 p-2 animate-pulse"
          >
            <div className="w-12 h-12 rounded-md bg-gray-700" />
            <div className="flex flex-col gap-1">
              <div className="h-5 w-36 bg-gray-700 rounded" />
              <div className="h-4 my-1 w-24 bg-gray-700 rounded" />
            </div>
          </motion.div>
        ) : (
          <motion.a
            key={song.track + song.artist} // change key on song update
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
            className="flex group"
            href={song.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div className="flex text-white hover:text-amber-1 items-center gap-3 p-2">
              {song.albumArt && (
                <div className="relative flex w-12 h-12">
                  <img
                    src={song.albumArt}
                    alt={song.track}
                    className="block w-12 h-12 m-0 rounded-md filter transition-all duration-400 group-hover:brightness-75"
                  />
                  {/* audio visualizer, appears on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex items-end gap-0.5 h-5">
                      <span className="w-0.5 bg-amber-50 animate-bounce h-2" />
                      <span className="w-0.5 bg-amber-50 animate-bounce h-4 [animation-delay:0.2s]" />
                      <span className="w-0.5 bg-amber-50 animate-bounce h-3 [animation-delay:0.4s]" />
                      <span className="w-0.5 bg-amber-50 animate-bounce h-5 [animation-delay:0.6s]" />
                      <span className="w-0.5 bg-amber-50 animate-bounce h-2 [animation-delay:0.8s]" />
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col min-w-36 max-w-36 overflow-hidden group-hover:max-w-[1000px] transition-[max-width] duration-200">
                <div className="flex items-center gap-0.5 h-5 ">
                  <p className="font-semibold text-base truncate pr-1 ">
                    {song.track}
                  </p>
                  <span
                    className="w-0.5 flex-shrink-0 animate-bounce h-2 translate-y-0.5 bg-current 
                              group-hover:opacity-0 transition-opacity duration-300"
                  />
                  <span
                    className="w-0.5 flex-shrink-0 animate-bounce h-3 translate-y-0.5  bg-current 
                              group-hover:opacity-0 transition-opacity duration-300  [animation-delay:0.2s]"
                  />
                  <span
                    className="w-0.5 flex-shrink-0 animate-bounce h-2 translate-y-0.5  bg-current 
                              group-hover:opacity-0 transition-opacity duration-300  [animation-delay:0.4s]"
                  />
                </div>

                <p className="text-sm m-0 p-0 truncate">{song.artist}</p>
              </div>
            </motion.div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NowPlayingWidget;
