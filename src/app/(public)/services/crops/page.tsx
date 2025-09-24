// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  CalendarIcon,
  CloudRain,
  Thermometer,
  BarChart3,
  MapPin,
} from "lucide-react";
import { format } from "date-fns";

// Mock data for crop recommendations
const cropData = [
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

const soilTypes = [
  "Alluvial",
  "Black",
  "Red",
  "Laterite",
  "Mountain",
  "Desert",
];
const seasons = ["Kharif", "Rabi", "Zaid"];

export default function CropPredictionDashboard() {
  const [location, setLocation] = useState("");
  const [soilType, setSoilType] = useState("");
  const [season, setSeason] = useState("");
  const [phLevel, setPhLevel] = useState([6.5]);
  const [nitrogen, setNitrogen] = useState([240]);
  const [phosphorus, setPhosphorus] = useState([45]);
  const [potassium, setPotassium] = useState([180]);
  const [rainfall, setRainfall] = useState([1200]);
  const [temperature, setTemperature] = useState([28]);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [predictions, setPredictions] = useState(cropData);

  const handlePredict = () => {
    // Simulate prediction logic
    const updatedPredictions = cropData
      .map((crop) => ({
        ...crop,
        suitability: Math.min(
          95,
          Math.max(60, crop.suitability + Math.random() * 10 - 5)
        ),
      }))
      .sort((a, b) => b.suitability - a.suitability);

    setPredictions(updatedPredictions);
  };

  const getSuitabilityColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "low":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Crop Prediction Dashboard
          </h1>
          <p className="text-gray-600">
            AI-powered crop recommendations based on your farm data
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Input Form */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Farm Details
                </CardTitle>
                <CardDescription>
                  Enter your farm information for accurate predictions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter your farm location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soil-type">Soil Type</Label>
                  <Select value={soilType} onValueChange={setSoilType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      {soilTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="season">Planting Season</Label>
                  <Select value={season} onValueChange={setSeason}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      {seasons.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Planting Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Soil Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>pH Level: {phLevel[0]}</Label>
                    <span className="text-sm text-gray-500">
                      {phLevel[0] < 6
                        ? "Acidic"
                        : phLevel[0] > 7.5
                        ? "Alkaline"
                        : "Neutral"}
                    </span>
                  </div>
                  <Slider
                    value={phLevel}
                    onValueChange={setPhLevel}
                    max={14}
                    min={0}
                    step={0.1}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Nitrogen (kg/ha): {nitrogen[0]}</Label>
                  </div>
                  <Slider
                    value={nitrogen}
                    onValueChange={setNitrogen}
                    max={400}
                    min={0}
                    step={10}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Phosphorus (kg/ha): {phosphorus[0]}</Label>
                  </div>
                  <Slider
                    value={phosphorus}
                    onValueChange={setPhosphorus}
                    max={100}
                    min={0}
                    step={5}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Potassium (kg/ha): {potassium[0]}</Label>
                  </div>
                  <Slider
                    value={potassium}
                    onValueChange={setPotassium}
                    max={300}
                    min={0}
                    step={10}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="w-5 h-5" />
                  Weather Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Temperature: {temperature[0]}°C</Label>
                  </div>
                  <Slider
                    value={temperature}
                    onValueChange={setTemperature}
                    max={45}
                    min={0}
                    step={1}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label className="flex items-center gap-2">
                      <CloudRain className="w-4 h-4" />
                      Rainfall: {rainfall[0]} mm
                    </Label>
                  </div>
                  <Slider
                    value={rainfall}
                    onValueChange={setRainfall}
                    max={3000}
                    min={0}
                    step={100}
                  />
                </div>
              </CardContent>
            </Card>

            <Button onClick={handlePredict} className="w-full" size="lg">
              Predict Best Crops
            </Button>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2 space-y-6">
            <Alert>
              <AlertDescription>
                Based on your input, here are the AI-recommended crops for
                optimal yield and profitability.
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="recommendations" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recommendations">
                  Top Recommendations
                </TabsTrigger>
                <TabsTrigger value="analysis">Detailed Analysis</TabsTrigger>
                <TabsTrigger value="comparison">Crop Comparison</TabsTrigger>
              </TabsList>

              <TabsContent value="recommendations" className="space-y-4">
                {predictions.map((crop) => (
                  <Card
                    key={crop.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{crop.name}</CardTitle>
                          <CardDescription>{crop.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">{crop.season}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Suitability Score
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold">
                              {crop.suitability}%
                            </span>
                            <Progress
                              value={crop.suitability}
                              className="w-24"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">
                              Expected Yield
                            </span>
                            <div className="font-semibold">{crop.yield}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Water Needs</span>
                            <div className="font-semibold">{crop.water}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">
                              Profit Potential
                            </span>
                            <div className="font-semibold">{crop.profit}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Risk Level</span>
                            <Badge className={getRiskColor(crop.risk)}>
                              {crop.risk}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="analysis">
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Soil & Weather Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold">Soil Health Summary</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>pH Level</span>
                            <Badge
                              variant={
                                phLevel[0] >= 6 && phLevel[0] <= 7.5
                                  ? "default"
                                  : "destructive"
                              }
                            >
                              {phLevel[0]} (
                              {phLevel[0] < 6
                                ? "Acidic"
                                : phLevel[0] > 7.5
                                ? "Alkaline"
                                : "Optimal"}
                              )
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Nitrogen</span>
                            <Badge
                              variant={
                                nitrogen[0] > 200 ? "default" : "destructive"
                              }
                            >
                              {nitrogen[0]} kg/ha
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Phosphorus</span>
                            <Badge
                              variant={
                                phosphorus[0] > 30 ? "default" : "destructive"
                              }
                            >
                              {phosphorus[0]} kg/ha
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Potassium</span>
                            <Badge
                              variant={
                                potassium[0] > 150 ? "default" : "destructive"
                              }
                            >
                              {potassium[0]} kg/ha
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold">Weather Compatibility</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Temperature</span>
                            <Badge
                              variant={
                                temperature[0] >= 20 && temperature[0] <= 35
                                  ? "default"
                                  : "destructive"
                              }
                            >
                              {temperature[0]}°C
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Rainfall</span>
                            <Badge
                              variant={
                                rainfall[0] >= 500 && rainfall[0] <= 1500
                                  ? "default"
                                  : "destructive"
                              }
                            >
                              {rainfall[0]} mm
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Season</span>
                            <Badge variant="default">
                              {season || "Not selected"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comparison">
                <Card>
                  <CardHeader>
                    <CardTitle>Crop Comparison Matrix</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Crop</th>
                            <th className="text-center p-2">Suitability</th>
                            <th className="text-center p-2">Yield</th>
                            <th className="text-center p-2">Profit</th>
                            <th className="text-center p-2">Water Needs</th>
                            <th className="text-center p-2">Risk</th>
                          </tr>
                        </thead>
                        <tbody>
                          {predictions.map((crop) => (
                            <tr
                              key={crop.id}
                              className="border-b hover:bg-gray-50"
                            >
                              <td className="p-2 font-medium">{crop.name}</td>
                              <td className="p-2 text-center">
                                <Badge
                                  className={getSuitabilityColor(
                                    crop.suitability
                                  )}
                                >
                                  {crop.suitability}%
                                </Badge>
                              </td>
                              <td className="p-2 text-center">{crop.yield}</td>
                              <td className="p-2 text-center">{crop.profit}</td>
                              <td className="p-2 text-center">{crop.water}</td>
                              <td className="p-2 text-center">
                                <Badge className={getRiskColor(crop.risk)}>
                                  {crop.risk}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Soil Amendment:</span> Based
                      on pH levels, consider adding lime to neutralize acidity
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Irrigation Schedule:</span>{" "}
                      Adjust watering based on predicted rainfall patterns
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-medium">Fertilizer Plan:</span>{" "}
                      Supplement phosphorus levels for optimal growth
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
