import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import 'leaflet/dist/leaflet.css';
import '../../styles/leaflet.css';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export interface City {
  id: string;
  name: string;
  nameEn: string;
  lat: number;
  lng: number;
  population: string;
  briefDescription: string;
}

interface InteractiveMapProps {
  onCityClick: (cityId: string) => void;
}

const cities: City[] = [
  {
    id: 'riyadh',
    name: 'الرياض',
    nameEn: 'Riyadh',
    lat: 24.7136,
    lng: 46.6753,
    population: '7.6 مليون نسمة',
    briefDescription: 'عاصمة المملكة ومركزها الإداري والاقتصادي، تجمع بين الحداثة والتراث الأصيل'
  },
  {
    id: 'medina',
    name: 'المدينة المنورة',
    nameEn: 'Medina',
    lat: 24.5247,
    lng: 39.5692,
    population: '1.5 مليون نسمة',
    briefDescription: 'المدينة المنورة، موطن المسجد النبوي الشريف وواحدة من أقدس المدن في الإسلام'
  },
  {
    id: 'jeddah',
    name: 'جدة',
    nameEn: 'Jeddah',
    lat: 21.5433,
    lng: 39.1728,
    population: '4.7 مليون نسمة',
    briefDescription: 'عروس البحر الأحمر، بوابة الحرمين الشريفين والمركز التجاري والسياحي'
  }
];

// Custom icon for cities
const createCustomIcon = (cityName: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="position: relative;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#059669" stroke="#fff" stroke-width="2"/>
          <circle cx="12" cy="9" r="2.5" fill="#fff"/>
        </svg>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
};

export function InteractiveMap({ onCityClick }: InteractiveMapProps) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  const handleLearnMore = () => {
    if (selectedCity) {
      onCityClick(selectedCity.id);
    }
  };

  if (!mapLoaded) {
    return (
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl shadow-2xl p-8 border-4 border-green-200">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-700 mx-auto"></div>
            <p className="mt-4 text-green-700 font-bold text-xl" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
              جاري تحميل الخريطة...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-3xl shadow-2xl p-8 border-4 border-green-200 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)' }}></div>
        
        {/* Title */}
        <div className="text-center mb-6 relative z-10">
          <h2 className="text-3xl font-bold text-green-800 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>
            خريطة المملكة العربية السعودية التفاعلية
          </h2>
          <p className="text-amber-700 text-lg" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
            انقر على المدن لاستكشاف تاريخها وثقافتها
          </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-[600px] rounded-2xl border-4 border-amber-300 shadow-inner overflow-hidden">
          <MapContainer
            center={[24.0, 45.0]}
            zoom={6}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {cities.map((city) => (
              <Marker
                key={city.id}
                position={[city.lat, city.lng]}
                icon={createCustomIcon(city.name)}
                eventHandlers={{
                  click: () => {
                    setSelectedCity(city);
                  },
                }}
              >
                <Popup>
                  <div className="p-3 min-w-[250px]" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    <h3 className="text-xl font-bold text-green-800 mb-2" style={{ fontFamily: 'Ruwudu, serif' }}>
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {city.population}
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      {city.briefDescription}
                    </p>
                    <button
                      onClick={() => onCityClick(city.id)}
                      className="w-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
                    >
                      معرفة المزيد
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* City Info Card (when selected) */}
        {selectedCity && (
          <Card className="mt-6 p-6 bg-gradient-to-br from-white to-amber-50 border-4 border-green-300 shadow-xl relative animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-8 h-8 text-amber-600 fill-amber-400" />
                  <h3 className="text-3xl font-bold text-green-800" style={{ fontFamily: 'Ruwudu, serif' }}>
                    {selectedCity.name}
                  </h3>
                </div>
                
                <div className="mb-4 p-3 bg-green-100 rounded-lg border-2 border-green-200">
                  <p className="text-sm text-green-700 font-semibold mb-1" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    عدد السكان
                  </p>
                  <p className="text-xl font-bold text-green-900" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                    {selectedCity.population}
                  </p>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-4" style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}>
                  {selectedCity.briefDescription}
                </p>

                <Button
                  onClick={handleLearnMore}
                  className="bg-gradient-to-r from-green-700 to-green-600 hover:from-green-800 hover:to-green-700 text-white font-bold text-lg px-6 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Noto Kufi Arabic, sans-serif' }}
                >
                  <span>معرفة المزيد</span>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </div>

              <button
                onClick={() => setSelectedCity(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label="إغلاق"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
