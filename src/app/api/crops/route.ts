import { cropData } from "@/data/crop";
import { Type } from "@/data/crop";


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
