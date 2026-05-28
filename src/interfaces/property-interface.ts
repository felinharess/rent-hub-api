export interface Property {
  id: number;
  title: string;
  description: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  garageSpots: number;
  isRented: boolean;
  createdAt: string;
}