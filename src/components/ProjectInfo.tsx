import { Play } from 'lucide-react';

export default function ProjectInfo() {
  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Sustainable Living for Tomorrow</h2>
      
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
            style={{ width: '67%' }}
          ></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>$1.675M raised</span>
          <span>67% of $2.5M goal</span>
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">
          EcoHaven Homes is revolutionizing sustainable living with our innovative housing project. 
          We're building a community of 50 eco-friendly homes that combine modern design with 
          environmental responsibility. Each home features solar panels, rainwater harvesting 
          systems, and smart home technology to minimize environmental impact while maximizing 
          comfort and efficiency.
        </p>
      </div>
    </div>
  );
}