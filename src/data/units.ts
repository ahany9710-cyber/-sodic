export interface UnitType {
  id: string;
  name: string;
  nameAr: string;
  bedrooms: string;
  /** Prominent Arabic line for bedroom count */
  bedroomsAr: string;
  area: string;
  startingPrice: string;
  /** Shown as pills on the card (e.g. New Launch, Most Spacious) */
  badges?: string[];
  image: string;
}

export const units: UnitType[] = [
  {
    id: 'chalet-1bd',
    name: 'Chalet 1 Bedroom',
    nameAr: 'شاليه غرفة نوم واحدة',
    bedrooms: '1 BD',
    bedroomsAr: 'غرفة واحدة',
    area: '93 sqm',
    startingPrice: 'Starting 15M EGP',
    badges: ['إطلاق جديد'],
    image: './assets/types/chalet-1bd.jpg',
  },
  {
    id: 'chalet-2bd',
    name: 'Chalet 2 Bedrooms',
    nameAr: 'شاليه غرفتي نوم',
    bedrooms: '2 BDs',
    bedroomsAr: 'غرفتين',
    area: '145 sqm',
    startingPrice: 'Starting 20M EGP',
    badges: ['إطلاق جديد', 'الأوسع'],
    image: './assets/types/chalet-2bd.jpg',
  },
  {
    id: 'chalet-3bd',
    name: 'Chalet 3 Bedrooms',
    nameAr: 'شاليه 3 غرف نوم',
    bedrooms: '3 BDs',
    bedroomsAr: '3 غرف',
    area: '199 sqm',
    startingPrice: 'Starting 25M EGP',
    badges: ['إطلاق جديد'],
    image: './assets/types/chalet-3bd.jpg',
  },
  {
    id: 'townhouse',
    name: 'Townhouse',
    nameAr: 'تاون هاوس',
    bedrooms: '3 / 4 BDs',
    bedroomsAr: '3–4 غرف',
    area: '248–255 sqm',
    startingPrice: 'Starting 37M EGP',
    image: './assets/types/townhouse.jpg',
  },
  {
    id: 'villa',
    name: 'Standalone Villa',
    nameAr: 'فيلا مستقلة',
    bedrooms: 'Villa',
    bedroomsAr: 'فيلا',
    area: '253–376 sqm',
    startingPrice: 'Starting 72M EGP',
    badges: ['إطلاق جديد'],
    image: './assets/types/villa.jpg',
  },
];
