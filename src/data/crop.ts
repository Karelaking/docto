// Mock data for crop recommendations

export type Type = {
  id: number;
  name: string;
  suitability: number;
  season: string;
  yield: string;
  water: string;
  profit: string;
  risk: string;
  description: string;
};

export const cropData: Type[] = [
  {
    id: 1,
    name: "Wheat",
    suitability: 95,
    season: "Rabi",
    yield: "4.5 tons/ha",
    water: "Medium",
    profit: "₹45,000/ha",
    risk: "Low",
    description: "Ideal for your soil conditions and current season",
  },
  {
    id: 2,
    name: "Rice",
    suitability: 78,
    season: "Kharif",
    yield: "5.2 tons/ha",
    water: "High",
    profit: "₹52,000/ha",
    risk: "Medium",
    description: "Good match but requires more water resources",
  },
  {
    id: 3,
    name: "Cotton",
    suitability: 85,
    season: "Kharif",
    yield: "2.8 tons/ha",
    water: "Medium",
    profit: "₹68,000/ha",
    risk: "Medium",
    description: "High profit potential with moderate risk",
  },
];
