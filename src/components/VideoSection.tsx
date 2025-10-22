import { useEffect, useState, useCallback } from "react";
import { Play, X } from "lucide-react";

type VideoItem = {
  id: number;
  title: string;
  thumbnail: string;
  url: string; // YouTube ou MP4 direto
};

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Alguns e Nossos Shows!",
    thumbnail:
      "https://i.imgur.com/PH7CJwS.png",
    url: "https://i.imgur.com/k6xMCcS.mp4", 
  },
  {
    id: 2,
    title: "Repertório variado",
    thumbnail:
      "https://i.imgur.com/uOs7Jxn.png",
    url: "https://i.imgur.com/NxXDdZE.mp4",
  },
  {
    id: 3,
    title: "Swingueira / Forro",
    thumbnail:
      "https://i.imgur.com/B32bykr.png",
    url: "https://i.imgur.com/A9i5aeb.mp4", // exemplo MP4
  },
  {
    id: 4,
    title: "Performance ao Vivo",
    thumbnail:
      "https://i.imgur.com/lv3UnX5.png",
    url: "https://i.imgur.com/7b0WloT.mp4",
  },
];

function toYouTubeEmbed(src: string): string | null {
  try {
    const u = new URL(src);
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}?autoplay=1&rel=0`;
    }
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
  } catch (_err: unknown) {
    // URL inválida ou formato não suportado — apenas retorna null
    return null;
  }
  return null;
}

export default function VideoSection() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<VideoItem | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    // pequena espera para desmotar depois da animação
    setTimeout(() => setCurrent(null), 200);
  }, []);

  // ESC para fechar
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // trava scroll do body quando modal aberto
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleOpen = (video: VideoItem) => {
    setCurrent(video);
    setOpen(true);
  };

  const isYouTube = current && toYouTubeEmbed(current.url);
  const isMP4 = current && /\.(mp4|webm|ogg)(\?.*)?$/i.test(current.url);

  return (
    <section id="videos" className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Nossos Vídeos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira nossas performances e sinta a energia, isso é Banda Gabriel Rhyan!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <button
              key={video.id}
              type="button"
              onClick={() => handleOpen(video)}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer text-left"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-orange-500 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-8 h-8 text-black fill-black" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold">{video.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Reproduzindo: ${current.title}`}
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

          {/* content */}
          <div
            className={`relative w-full max-w-5xl aspect-video bg-black rounded-2xl shadow-xl overflow-hidden transition transform ${
              open ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <button
              onClick={close}
              className="absolute -top-4 -right-4 bg-white text-gray-900 rounded-full p-2 shadow-lg hover:scale-105 transition"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Player */}
            {isYouTube ? (
              <iframe
                key={current.id}
                src={toYouTubeEmbed(current.url)!}
                title={current.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : isMP4 ? (
              <video
                key={current.id}
                src={current.url}
                className="w-full h-full"
                autoPlay
                controls
                playsInline
              />
            ) : (
              <div className="w-full h-full grid place-items-center text-white">
                <p className="text-center px-6">
                  Link inválido. Use um URL do YouTube ou um arquivo .mp4/.webm/.ogg.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}