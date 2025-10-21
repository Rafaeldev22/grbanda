import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Show Completo - Festa Corporativa',
    thumbnail: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600&h=800',
    url: '#'
  },
  {
    id: 2,
    title: 'Repertório de Rock',
    thumbnail: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600&h=800',
    url: '#'
  },
  {
    id: 3,
    title: 'Set List Pop/MPB',
    thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=800',
    url: '#'
  },
  {
    id: 4,
    title: 'Performance ao Vivo',
    thumbnail: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600&h=800',
    url: '#'
  }
];

export default function VideoSection() {
  return (
    <section id="videos" className="pt-32 pb-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Nossos Vídeos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira nossas performances e sinta a energia da VS Band
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-orange-500 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-8 h-8 text-black fill-black" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
