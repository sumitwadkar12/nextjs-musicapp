import FeauturedCourses from "@/Components/FeauturedCourses";
import Footer from "@/Components/Footer";
import Instructors from "@/Components/Instructors";
import TestimonialCards from "@/Components/TestimonialCards";
import Herosection from "@/Components/ui/HeroSection";
import UpcomingWebinars from "@/Components/UpcomingWebinars";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection></Herosection>
      <FeauturedCourses></FeauturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialCards></TestimonialCards>
      <UpcomingWebinars></UpcomingWebinars>
      <Instructors></Instructors>
      <Footer></Footer>
    </main>
  );
}
