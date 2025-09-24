"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import AutoPlayCarousel from "@/components/autoplay-carousel";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  const faqRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    // Hero section animation
    const heroElement = document.querySelector(".hero-content");
    if (heroElement) {
      gsap.fromTo(
        heroElement,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      );
    }

    // Stats counter animation - wait for statsRef to be available
    if (statsRef.current) {
      gsap.fromTo(
        ".stat-number",
        { textContent: 0, opacity: 0, scale: 0.8 },
        {
          textContent: (i: number) => {
            const values = [30, 50, 10, 95];
            return values[i];
          },
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Features section animation
    if (featuresRef.current) {
      gsap.fromTo(
        ".feature-item",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // How it works animation
    if (howItWorksRef.current) {
      gsap.fromTo(
        ".step-card",
        { y: 100, opacity: 0, rotationY: 90 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: howItWorksRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Testimonials animation
    if (testimonialsRef.current) {
      gsap.fromTo(
        ".testimonial-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // CTA section animation
    if (ctaRef.current) {
      gsap.fromTo(
        ".cta-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // FAQ section animation
    if (faqRef.current) {
      gsap.fromTo(
        ".faq-item",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Floating animation for feature dots
    gsap.to(".feature-dot", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    });

    // Hover animations for buttons
    document.querySelectorAll(".animated-button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.05, duration: 0.3 });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
      });
    });

    // Hover animations for images
    document.querySelectorAll(".hover-image").forEach((image) => {
      image.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: 1.05, duration: 0.5 });
      });
      image.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.5 });
      });
    });

    // Cleanup function
    return () => {
      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array means this runs once after mount

  return (
    <main className="w-full min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="w-full min-h-screen flex flex-col items-center justify-center relative"
      >
        <div className="w-full mx-auto">
          <AutoPlayCarousel />
        </div>

        <div className="my-8 text-center max-w-4xl mx-auto px-4 relative z-10 hero-content">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Grow Smarter, Not Harder
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Analyze soil and weather data to choose the right crop – every time.
            Make data-driven decisions for maximum yield and profitability.
          </p>
          <Button className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform animated-button">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2 stat-number">
                0%
              </div>
              <p className="text-gray-600">Increase in Crop Yield</p>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 stat-number">
                0%
              </div>
              <p className="text-gray-600">Reduction in Water Usage</p>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-600 mb-2 stat-number">
                0+
              </div>
              <p className="text-gray-600">Farmers Empowered</p>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2 stat-number">
                0%
              </div>
              <p className="text-gray-600">Accuracy in Predictions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="w-full min-h-screen bg-gradient-to-br from-green-50 to-blue-50"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Side */}
            <div className="flex-1 w-full lg:max-w-1/2">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl hover-image">
                <Image
                  src="/img/farm.jpg"
                  alt="Modern sustainable farming with technology integration"
                  fill
                  className="object-cover"
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
                <div className="flex items-start space-x-4 feature-item">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 feature-dot"></div>
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

                <div className="flex items-start space-x-4 feature-item">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 feature-dot"></div>
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

                <div className="flex items-start space-x-4 feature-item">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1 feature-dot"></div>
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

              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animated-button">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section ref={howItWorksRef} className="w-full py-20 bg-white">
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
            <div className="text-center p-6 step-card">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Input Your Data</h3>
              <p className="text-gray-600">
                Enter your location, soil type, and farming preferences. Connect
                your weather station for real-time data.
              </p>
            </div>

            <div className="text-center p-6 step-card">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our algorithms analyze soil conditions, weather patterns, and
                market trends to provide optimal recommendations.
              </p>
            </div>

            <div className="text-center p-6 step-card">
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
      <section ref={testimonialsRef} className="w-full py-20 bg-gray-50">
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
            <div className="bg-white p-6 rounded-lg shadow-lg testimonial-card">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;This platform helped me increase my soybean yield by 40%
                while reducing water consumption significantly.&ldquo;
              </p>
              <div className="font-semibold">Rajesh Kumar, Punjab</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg testimonial-card">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">
                &ldquo;The weather predictions saved my crops from unexpected
                rainfall. The soil analysis was incredibly accurate.&ldquo;
              </p>
              <div className="font-semibold">Priya Sharma, Maharashtra</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg testimonial-card">
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
      <section
        ref={ctaRef}
        className="w-full py-20 bg-gradient-to-r from-green-600 to-blue-600"
      >
        <div className="container mx-auto px-4 text-center cta-content">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already making smarter decisions
            with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold animated-button" onClick={() => {
              router.push("/services/crops")
            }}>
              Start Free Trial
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold animated-button">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-b pb-4 faq-item">
              <h3 className="text-xl font-semibold mb-2">
                How accurate are the crop recommendations?
              </h3>
              <p className="text-gray-600">
                Our AI algorithms achieve 95% accuracy by analyzing historical
                data, current conditions, and regional success patterns.
              </p>
            </div>

            <div className="border-b pb-4 faq-item">
              <h3 className="text-xl font-semibold mb-2">
                Do I need special equipment to use your service?
              </h3>
              <p className="text-gray-600">
                No special equipment required. Basic soil testing kits and
                smartphone access are sufficient to get started.
              </p>
            </div>

            <div className="border-b pb-4 faq-item">
              <h3 className="text-xl font-semibold mb-2">
                Can I use this for organic farming?
              </h3>
              <p className="text-gray-600">
                Yes, our platform includes specific recommendations for organic
                farming practices and sustainable agriculture.
              </p>
            </div>

            <div className="border-b pb-4 faq-item">
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
