import AutoPlayCarousel from "@/components/autoplay-carousel";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <section className="w-full min-h-screen h-full flex flex-col items-center">
      <AutoPlayCarousel />
      <div className="my-6 text-center">
        <h1 className="text-4xl font-semibold">Grow Smarter, Not Harder</h1>
        <p className="text-xl my-3">
          Analyze soil and weather data to choose the right crop – every time.
        </p>
        <Button className="my-3 text-lg">Get Started</Button>
      </div>
    </section>
  );
}
