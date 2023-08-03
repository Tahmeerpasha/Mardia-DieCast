// import Image from "next/image";
// import logo from '../public/me_logo.png';
import About from "@/components/About";
import Clientele from "@/components/Clientele";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import QualityAssurance from "@/components/QualityAssurance";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  const images = [
    '/../public/sliderImages/image1.jpg',
    '/../public/sliderImages/image2.jpg',
    '/../public/sliderImages/image3.jpg',
    '/../public/sliderImages/image4.jpg',
    // Add more image paths here as needed
  ];
  return (
    <div className="scroll-smooth">
      <Navbar />
      <ImageSlider images={images} />
      <About />
      <Clientele />
      <QualityAssurance />
      <WhyChooseUs />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}
