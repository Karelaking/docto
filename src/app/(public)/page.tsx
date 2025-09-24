import Image from "next/image";
import { Button } from "@/components/ui/button";
import AutoPlayCarousel from "@/components/autoplay-carousel";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center relative">
        <div className="w-full mx-auto">
          <AutoPlayCarousel />
        </div>

        <div className="my-8 text-center max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Grow Smarter, Not Harder
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Analyze soil and weather data to choose the right crop – every time.
            Make data-driven decisions for maximum yield and profitability.
          </p>
          <Button className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                30%
              </div>
              <p className="text-gray-600">Increase in Crop Yield</p>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                50%
              </div>
              <p className="text-gray-600">Reduction in Water Usage</p>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2">
                10K+
              </div>
              <p className="text-gray-600">Farmers Empowered</p>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                95%
              </div>
              <p className="text-gray-600">Accuracy in Predictions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Side */}
            <div className="flex-1 w-full lg:max-w-1/2">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/farm.jpg"
                  alt="Modern sustainable farming with technology integration"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  Smart Agriculture for the Future
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Our advanced platform combines real-time weather monitoring,
                  soil analysis, and AI-powered crop recommendations to help
                  farmers maximize their yields while minimizing resource waste.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Soil Analysis
                    </h3>
                    <p className="text-gray-600">
                      Get detailed insights into your soil composition and
                      nutrient levels
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Weather Monitoring
                    </h3>
                    <p className="text-gray-600">
                      Real-time weather data and forecasting for optimal
                      planting times
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Crop Recommendations
                    </h3>
                    <p className="text-gray-600">
                      AI-powered suggestions for the most suitable crops for
                      your land
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to transform your farming with data-driven insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Input Your Data</h3>
              <p className="text-gray-600">
                Enter your location, soil type, and farming preferences. Connect
                your weather station for real-time data.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our algorithms analyze soil conditions, weather patterns, and
                market trends to provide optimal recommendations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Get Recommendations
              </h3>
              <p className="text-gray-600">
                Receive personalized crop suggestions, planting schedules, and
                resource management tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Farmers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from farmers who transformed their operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;This platform helped me increase my soybean yield by 40%
                while reducing water consumption significantly.&ldquo;
              </p>
              <div className="font-semibold">Rajesh Kumar, Punjab</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;The weather predictions saved my crops from unexpected
                rainfall. The soil analysis was incredibly accurate.&ldquo;
              </p>
              <div className="font-semibold">Priya Sharma, Maharashtra</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;AI recommendations helped me diversify my crops and
                increase overall farm profitability by 35%.&ldquo;
              </p>
              <div className="font-semibold">Anil Patel, Gujarat</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already making smarter decisions
            with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Free Trial
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">
                How accurate are the crop recommendations?
              </h3>
              <p className="text-gray-600">
                Our AI algorithms achieve 95% accuracy by analyzing historical
                data, current conditions, and regional success patterns.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">
                Do I need special equipment to use your service?
              </h3>
              <p className="text-gray-600">
                No special equipment required. Basic soil testing kits and
                smartphone access are sufficient to get started.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">
                Can I use this for organic farming?
              </h3>
              <p className="text-gray-600">
                Yes, our platform includes specific recommendations for organic
                farming practices and sustainable agriculture.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">
                Is there a mobile app available?
              </h3>
              <p className="text-gray-600">
                Our mobile app is available for both iOS and Android, allowing
                you to monitor your farm on the go.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
