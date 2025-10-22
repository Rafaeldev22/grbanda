import { Music, Users, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 px-4 min-h-screen flex items-center bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2">
                <span className="text-orange-500 font-semibold text-sm">
                  Forro - Swingueira - Sertanejo - Pagode
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Banda Gabriel Rhyan
                </span>
                <br />
                <span className="text-white">Música ao Vivo</span>
                <br />
                <span className="text-gray-400 text-4xl md:text-5xl">
                  + Uma experiencia única!
                </span>
              </h1>
            </div>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Experimente o melhor dos dois mundos: a emoção de músicos ao vivo
              combinada com a perfeição do Virtual Sound. Uma banda completa
              para tornar seu evento inesquecível.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                <div className="bg-orange-500 rounded-full p-2">
                  <Music className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-orange-500 font-bold">Voz</p>
                  <p className="text-gray-400 text-sm">Ao Vivo</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                <div className="bg-orange-500 rounded-full p-2">
                  <Users className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-orange-500 font-bold">Baixo & Bateria</p>
                  <p className="text-gray-400 text-sm">Ao Vivo</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-orange-500/20">
                <div className="bg-orange-500 rounded-full p-2">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-orange-500 font-bold">Banda Completa</p>
                  <p className="text-gray-400 text-sm">Virtual Sound</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={() => {
                  const phone = "5585987385563";
                  const text =
                    "Olá! Gostaria de contratar a Banda para meu evento.";

                  const url = new URL("https://api.whatsapp.com/send");
                  url.searchParams.set("phone", phone);
                  url.searchParams.set("text", text);

                  // cria um <a>, abre em nova aba e remove (evita bloqueio de pop-up)
                  const a = document.createElement("a");
                  a.href = url.toString();
                  a.target = "_blank";
                  a.rel = "noopener noreferrer";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contrate Agora
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById("videos");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-orange-500/30 hover:border-orange-500/50"
              >
                Ver Vídeos
              </button>
            </div>
          </div>

          {/* Right side - Singer photo */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur-xl opacity-30"></div>

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-orange-500/50 shadow-2xl">
                <img
                  src="https://i.imgur.com/EnqD0cB.png"
                  alt="Cantor VS Band"
                  className="w-full h-[600px] object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Singer name badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-sm text-end rounded-lg p-4 border border-orange-500/30">
                    <p className="text-orange-500 font-bold text-xl">
                      {" "}
                      Gabriel Rhyan - Vocalista{" "}
                    </p>
                    <p className="text-gray-300 text-sm">
                      Energia e talento em cada apresentação
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 shadow-2xl hidden md:block">
                <p className="text-black font-bold text-3xl">+1500</p>
                <p className="text-black/80 text-sm">Shows Realizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
