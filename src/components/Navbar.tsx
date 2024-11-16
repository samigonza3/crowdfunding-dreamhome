import { Home, Target, Users, Clock } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">EcoHaven Homes</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Target className="h-5 w-5 text-emerald-600" />
              <div className="ml-2">
                <p className="text-xs text-gray-600">Goal</p>
                <p className="font-semibold">$2.5M</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Users className="h-5 w-5 text-emerald-600" />
              <div className="ml-2">
                <p className="text-xs text-gray-600">Backers</p>
                <p className="font-semibold">847</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-emerald-600" />
              <div className="ml-2">
                <p className="text-xs text-gray-600">Days Left</p>
                <p className="font-semibold">23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}