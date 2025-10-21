import { Download } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=600&h=900',
    alt: 'Cantor VS Band - Foto 1'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=600&h=900',
    alt: 'Cantor VS Band - Foto 2'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1749790/pexels-photo-1749790.jpeg?auto=compress&cs=tinysrgb&w=600&h=900',
    alt: 'Cantor VS Band - Foto 3'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600&h=900',
    alt: 'Cantor VS Band - Foto 4'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=900',
    alt: 'Cantor VS Band - Foto 5'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=900',
    alt: 'Cantor VS Band - Foto 6'
  }
];

export default function PhotoSection() {
  const handleDownload = (photoUrl: string, photoId: number) => {
    const link = document.createElement('a');
    link.href = photoUrl;
    link.download = `vs-band-cantor-${photoId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="fotos" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Fotos para Download
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Baixe as fotos do nosso cantor para criar o banner da sua festa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button
                  onClick={() => handleDownload(photo.url, photo.id)}
                  className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <Download className="w-5 h-5" />
                  Baixar Foto
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-lg px-6 py-4">
            <p className="text-orange-400 font-medium">
              Clique sobre a foto e depois no botão para fazer o download
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
