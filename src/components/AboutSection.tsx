import { Music, Mic, Drum } from 'lucide-react';

const members = [
  {
    icon: Mic,
    role: 'Voz',
    description: 'Vocal potente e versátil, capaz de interpretar diversos estilos musicais'
  },
  {
    icon: Music,
    role: 'Baixo',
    description: 'Base sólida e grooves marcantes que sustentam cada performance'
  },
  {
    icon: Drum,
    role: 'Bateria',
    description: 'Ritmo preciso e energia contagiante em cada batida'
  }
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Sobre a VS Band
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Uma banda inovadora que combina talento ao vivo com tecnologia Virtual Sound
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border border-orange-500/20 shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A <span className="text-orange-500 font-semibold">VS Band</span> é uma experiência musical única que une o melhor dos dois mundos:
              a energia e emoção de músicos ao vivo com a qualidade e versatilidade do Virtual Sound (VS).
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Com três talentosos músicos - voz, baixo e bateria - tocando ao vivo e o restante da banda através de tecnologia VS,
              oferecemos um show completo com repertório variado, mantendo a autenticidade e a qualidade sonora que seu evento merece.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Perfeita para festas corporativas, casamentos, formaturas e eventos diversos, a VS Band garante entretenimento
              profissional com custo otimizado, sem abrir mão da qualidade musical.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <member.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-orange-500 text-center mb-4">
                {member.role}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8">
            <p className="text-black font-bold text-xl">
              + Virtual Sound (VS) completando toda a banda
            </p>
            <p className="text-black/80 mt-2">
              Guitarras, teclados, metais e muito mais!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
