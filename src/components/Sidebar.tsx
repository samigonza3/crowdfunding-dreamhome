import { Mail, Github, Linkedin } from 'lucide-react';

export default function Sidebar() {
  const tiers = [
    {
      name: 'Early Bird',
      price: '5,000',
      description: 'Priority reservation and 10% discount on final purchase',
      spots: '20/50'
    },
    {
      name: 'Green Pioneer',
      price: '10,000',
      description: 'All Early Bird benefits + custom interior design consultation',
      spots: '15/30'
    },
    {
      name: 'Eco Visionary',
      price: '20,000',
      description: 'All Pioneer benefits + solar panel upgrade + smart home package',
      spots: '5/10'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">Support Tiers</h3>
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
        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
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
            <h3 className="font-bold">John Anderson</h3>
            <p className="text-sm text-gray-600">Sustainable Housing Developer</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          With 15 years of experience in sustainable architecture and eco-friendly 
          development, I'm passionate about creating homes that serve both people 
          and the planet.
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