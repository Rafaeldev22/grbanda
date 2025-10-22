import { Download } from 'lucide-react';

const photos = [
  { id: 1, url: 'https://i.imgur.com/puGGDP1.jpeg', alt: 'Cantor VS Band - Foto 1' },
  { id: 2, url: 'https://i.imgur.com/OUSIIbL.jpeg', alt: 'Cantor VS Band - Foto 2' },
  { id: 3, url: 'https://i.imgur.com/4quzktw.jpeg', alt: 'Cantor VS Band - Foto 3' },
  { id: 4, url: 'https://i.imgur.com/nL7yKq1.jpeg', alt: 'Cantor VS Band - Foto 4' },
  { id: 5, url: 'https://i.imgur.com/SzYJEMl.jpeg', alt: 'Cantor VS Band - Foto 5' },
];

export default function PhotoSection() {
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
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                {/* 👇 Link em nova aba (mais confiável que window.open) */}
                <a
                  href={photo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-lg px-6 py-4">
            <p className="text-orange-400 font-medium">
              Clique em “Download” para baixar as imagens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
