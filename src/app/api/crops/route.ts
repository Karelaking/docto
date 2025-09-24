type Type = {
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

// Mock data for crop recommendations
const cropData: Type[] = [
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

const handlePredict = (): Type[] => {
  // Simulate prediction logic with more realistic randomization
  const updatedPredictions = cropData
    .map((crop) => ({
      ...crop,
      suitability: Math.min(
        100, // Changed to 100 for percentage clarity
        Math.max(60, crop.suitability + Math.random() * 20 - 10) // Increased variation
      ),
    }))
    .sort((a, b) => b.suitability - a.suitability);

  return updatedPredictions;
};

// Use the Web Response API for the App Router
export async function GET() {
  console.log("API endpoint called successfully");

  try {
    const predictions = handlePredict();
    // Return a new Response object with JSON data
    return Response.json({ message: predictions }, { status: 200 });
  } catch (error) {
    console.error("Error in prediction handler:", error);
    // Return an error response using Response.json
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
