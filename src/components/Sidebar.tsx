import { Mail, Github, Linkedin } from 'lucide-react';

export default function Sidebar() {
  const tiers = [
    {
      name: 'Dona un ladrillo',
      price: '5.000',
      description: 'Tendrás mi agradecimiento y serás parte de la Placa Conmemorativa de Mecenas,',
      spots: '0/500'
    },
    {
      name: 'Huella Verde',
      price: '150,000',
      description: 'Los beneficios del Tier 1 + una carta de agradecimiento escrita a mano, agradeciendo tu aporte.',
      spots: '0/100'
    },
    {
      name: 'Memoria Eterna',
      price: '500,000',
      description: 'Todos los beneficios de los Tier 1 y 2 + voy a sembrar una planta ornamental en tu nombre. Recibirás updates constantes de su crecimiento. También estarás invitadx al acto especial de inauguración.',
      spots: '0/50'
    },
    {
      name: 'Legado',
      price: '1,000,000',
      description: 'Todos los beneficios de los Tier 1, 2 y 3 + tu nombre, un mensaje y/o un objeto simbólico (pequeño y aprobado) se incluirá en una cápsula del tiempo que será enterrada como parte del proyecto.',
      spots: '0/100'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Tiers</h3>
        <div className="space-y-4">
          {tiers.map((tier, index) => (
            <div key={index} className="border rounded-lg p-4 hover:border-emerald-600 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">{tier.name}</h4>
                <span className="text-emerald-600 font-bold">${tier.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{tier.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Spots left: {tier.spots}</span>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Suscríbete al boletín de noticias donde estaré contando el avance de mi proyecto.</h3>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
          <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold">Samuel González</h3>
            <p className="text-sm text-gray-600">Digital Marketer | Data Scientist | Soñador</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-4">
        Creo firmemente en la posibilidad de vivir en armonía con la naturaleza sin renunciar al confort ni a la innovación. Con este proyecto EcoHab quiero demostrar que es posible construir viviendas ecológicas, accesibles y que generen un impacto positivo a la comunidad.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-emerald-600">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-emerald-600">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-emerald-600">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}