import { Heart, Star } from 'lucide-react';

export default function ThanksSection() {
  return (
    <section id="agradecimentos" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-12 h-12 text-orange-500 fill-orange-500" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Agradecimentos
            </h2>
            <Heart className="w-12 h-12 text-orange-500 fill-orange-500" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 border-2 border-orange-500/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-orange-500 fill-orange-500" />
              ))}
            </div>
          </div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p className="text-center">
              Agradecemos de coração a todos que confiaram na <span className="text-orange-500 font-semibold">VS Band</span> para
              tornar seus eventos ainda mais especiais!
            </p>

            <p className="text-center">
              Cada apresentação é uma nova oportunidade de levar música, energia e emoção para vocês.
              Obrigado por acreditarem no nosso trabalho e por nos permitirem fazer parte dos seus momentos importantes.
            </p>

            <p className="text-center">
              Nosso compromisso é sempre entregar o melhor show, com profissionalismo, qualidade e muita paixão pela música.
            </p>

            <div className="mt-10 pt-8 border-t border-orange-500/30">
              <p className="text-center text-2xl font-bold text-orange-500 mb-4">
                Muito Obrigado!
              </p>
              <p className="text-center text-gray-400">
                Continuem prestigiando nosso trabalho. Até o próximo show!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            VS Band - Virtual Sound Experience
          </p>
        </div>
      </div>
    </section>
  );
}
