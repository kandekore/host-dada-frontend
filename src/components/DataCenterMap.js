// src/components/DataCenterMap.js
import React from 'react';
import './DataCenterMap.css';
import dataCenterMapImage from '../assets/images/data-center-map.jpg';

const countries = [
  { code: 'GB', name: 'UK', flag: '🇬🇧' },
  { code: 'US', name: 'USA', flag: '🇺🇸' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
];

const locations = [
  // North America
  { name: 'California, USA', top: '45%', left: '15%', countryCode: 'US' },
  { name: 'Canada (central)', top: '25%', left: '20%', countryCode: 'CA' },
  { name: 'Iowa, USA', top: '41%', left: '22%', countryCode: 'US' },
  { name: 'Montreal, Quebec', top: '37%', left: '29%', countryCode: 'CA' },
  { name: 'Nevada, USA', top: '46%', left: '18%', countryCode: 'US' },
  { name: 'Ohio, USA', top: '41%', left: '25%', countryCode: 'US' },
  { name: 'Oregon, USA', top: '42%', left: '16%', countryCode: 'US' },
  { name: 'South Carolina, USA', top: '50%', left: '25%', countryCode: 'US' },
  { name: 'Texas, USA', top: '48%', left: '22%', countryCode: 'US' },
  { name: 'Toronto, Ontario', top: '39%', left: '27%', countryCode: 'CA' },
  { name: 'Utah, USA', top: '45%', left: '20%', countryCode: 'US' },
  { name: 'Virginia, USA', top: '45%', left: '26%', countryCode: 'US' },
  // Europe
  { name: 'London, UK', top: '38%', left: '46%', countryCode: 'GB' },
  { name: 'Dublin, Ireland', top: '37%', left: '44%', countryCode: 'IE' },
  { name: 'Eemshaven, Netherlands', top: '38%', left: '48%', countryCode: 'NL' },
  { name: 'Frankfurt, Germany', top: '39%', left: '51%', countryCode: 'DE' },
  { name: 'Hamina, Finland', top: '29%', left: '54%', countryCode: 'FI' },
  { name: 'Madrid, Spain', top: '44%', left: '45%', countryCode: 'ES' },
  { name: 'Milan, Italy', top: '43%', left: '51%', countryCode: 'IT' },
  { name: 'Paris, France', top: '41%', left: '48%', countryCode: 'FR' },
  { name: 'Saint-Ghislain, Belgium', top: '37%', left: '50%', countryCode: 'BE' },
  { name: 'Stockholm, Sweden', top: '32%', left: '51%', countryCode: 'SE' },
  { name: 'Warsaw, Poland', top: '36%', left: '51%', countryCode: 'PL' },
  { name: 'Zürich, Switzerland', top: '40%', left: '50%', countryCode: 'CH' },
  // Asia & Oceania
  { name: 'Chingua County, Taiwan', top: '49%', left: '83%', countryCode: 'TW' },
  { name: 'Delhi, India', top: '49%', left: '68%', countryCode: 'IN' },
  { name: 'Hong Kong, Asia-Pacific', top: '53%', left: '80%', countryCode: 'HK' },
  { name: 'Jakarta, Indonesia', top: '60%', left: '79%', countryCode: 'ID' },
  { name: 'Melbourne, Australia', top: '83%', left: '87%', countryCode: 'AU' },
  { name: 'Mumbai, India', top: '54%', left: '67%', countryCode: 'IN' },
  { name: 'Osaka, Japan', top: '48%', left: '85%', countryCode: 'JP' },
  { name: 'Seoul, South Korea', top: '45%', left: '83%', countryCode: 'KR' },
  { name: 'Singapore, Asia-Pacific', top: '63%', left: '78%', countryCode: 'SG' },
  { name: 'Sydney, Australia', top: '76%', left: '88%', countryCode: 'AU' },
  { name: 'Tokyo, Japan', top: '45%', left: '86%', countryCode: 'JP' },
  // Middle East
  { name: 'Bahrain', top: '52%', left: '62%', countryCode: 'BH' },
  { name: 'Tel Aviv, Israel', top: '49%', left: '57%', countryCode: 'IL' },
  { name: 'United Arab Emirates', top: '54%', left: '63%', countryCode: 'AE' },
  // South America
  { name: 'Santiago, Chile', top: '75%', left: '29%', countryCode: 'CL' },
  { name: 'São Paulo, Brazil', top: '66%', left: '34%', countryCode: 'BR' },
  // Africa
  { name: 'Cape Town, SA', top: '77%', left: '53%', countryCode: 'ZA' },
];

const DataCenterMap = () => {
  return (
    <div className="data-center-map-container">
      <img src={dataCenterMapImage} alt="Global Data Center Map" className="data-center-map" />
      {locations.map((location, index) => {
        const country = countries.find(c => c.code === location.countryCode);
        const flag = country ? country.flag : '📍'; // Fallback to a pin if no flag is found

        return (
          <div
            key={index}
            className="map-pin"
            style={{ top: location.top, left: location.left }}
          >
            <span className="pin-flag">{flag}</span>
            <span className="pin-tooltip">{location.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DataCenterMap;