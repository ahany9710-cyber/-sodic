export interface Unit {
  id: string;
  project: string;
  type: string;
  area: string;
  price: number;
  details: string;
  image: string;
}

export const units: Unit[] = [
  {
    id: 'sodic-east-townhouse',
    project: 'SODIC East',
    type: 'Townhouse',
    area: '234 sqm',
    price: 30000000,
    details: '5% Downpayment - 8 Years Installments',
    image: './sections/units/townhouse.png',
  },
  {
    id: 'sodic-east-apartment',
    project: 'SODIC East',
    type: 'Apartment',
    area: '141 sqm',
    price: 13000000,
    details: 'Fully Finished - Delivery 4 Years',
    image: './sections/units/apartment.png',
  },
  {
    id: 'sodic-east-standalone',
    project: 'SODIC East',
    type: 'Standalone',
    area: '392 sqm',
    price: 68000000,
    details: '—',
    image: './sections/units/villa.png',
  },
  {
    id: 'villette-serviced',
    project: 'Villette',
    type: 'Serviced Apt',
    area: '—',
    price: 36000000,
    details: '2 Bedrooms (Serviced)',
    image: './sections/units/apartment2.png',
  },
  {
    id: 'eastvale-apartment',
    project: 'Eastvale',
    type: 'Apartment',
    area: '140 sqm',
    price: 18000000,
    details: 'Fully Finished',
    image: './sections/units/apartment.png',
  },
  {
    id: 'vye-karmell-apartment',
    project: 'Vye & Karmell',
    type: 'Apartment',
    area: '—',
    price: 15000000,
    details: '2 Bedrooms',
    image: './sections/units/apartment2.png',
  },
  {
    id: 'ogami-apartment',
    project: 'Ogami (North Coast)',
    type: 'Chalet',
    area: '120 sqm',
    price: 17000000,
    details: '2 Bedrooms',
    image: './sections/units/ogami-north.png',
  },
];
