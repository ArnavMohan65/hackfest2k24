import Accordion from "./components/Accordion";
import {NextUIProvider} from "@nextui-org/react";
import Header from "./myComponents/Header.jsx";
import ImgDisplay from "./myComponents/ImgDisplay/ImgDisplay.jsx";
import AboutUs from "./myComponents/About Us/AboutUs.jsx";
import HelpCard from "./myComponents/HelpCard/HelpCard.jsx";
import Vision from "./myComponents/Our Visison/Vision.jsx";
import Partner from "./myComponents/Partner/Partner.jsx";
import Footer from "./myComponents/Footer/Footer.jsx";

// import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/react";
function App() {
  return (
    <main>
       <NextUIProvider>
        <Header />
        <ImgDisplay/>
        <div id = "resources">
        <AboutUs/>
        <HelpCard/>
        <Vision/>
        <Partner/>
        </div>
        <Footer/>
      </NextUIProvider>
      
      
    </main>
  );
}

export default App;
