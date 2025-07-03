import Carousal from "../../../components/Carousal/Carousal";
import DeveloperTools from "../../../components/DeveloperTools/DeveloperTools";
import Feature from "../../../components/Feature/Feature";
import { motion } from "framer-motion";
import Testimonials from "../../../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
      <div className="min-h-screen text-white">
        <Carousal />
       
         
          <Feature />
       
        <DeveloperTools />
     
          
          <Testimonials />
      
      </div>
    </>
  );
}

export default Home;
