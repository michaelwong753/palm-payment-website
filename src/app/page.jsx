import IntroPage from "../components/IntroPage";
import SubscribeContent from "../components/SubscribeContent";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-fit overflow-x-hidden">
      <IntroPage />
      <AboutUs />
      <SubscribeContent />
    </div> 
  )
}
