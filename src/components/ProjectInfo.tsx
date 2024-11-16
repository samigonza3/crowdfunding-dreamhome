import { Play } from 'lucide-react';

export default function ProjectInfo() {
  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">¡Únete a mi proyecto eco-friendly y construyamos juntos un futuro más verde! 🌿</h2>
      
      <div className="mb-6">
        <div className="relative h-96 mb-4">
          <img
            src={images[0]}
            alt="Project Hero"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute inset-0 m-auto w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
            <Play className="w-8 h-8 text-white ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-emerald-600 h-4 rounded-full"
            style={{ width: '0%' }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>$0 logrados</span>
          <span>0% of $70'000.000 goal</span>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">
        Estoy lanzando una campaña de crowdfunding para financiar 
        una iniciativa innovadora y sostenible. Mi objetivo es comprar 
        un lote de 80m² y construir en 40m², dejando los otros 40m²
        para cosechas de seguridad alimentaria y producción de miel. Además, planeo implementar un sistema de recolección de aguas lluvias y otras soluciones ecológicas.
        </p>
      </div>
    </div>
  );
}