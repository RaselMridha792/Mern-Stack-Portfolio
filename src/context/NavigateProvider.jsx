import { createContext, useRef } from "react";


export const NavigateContext = createContext();
const NavigateProvider = ({children}) => {

      const aboutRef= useRef(null);
      const homeRef = useRef(null);
      const skillRef = useRef(null);
      const contactRef = useRef(null);
    
      const scrollToAbout = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    
      };

    const navInfo = {
        aboutRef,
        homeRef,
        skillRef,
        contactRef,
        scrollToAbout,

    }
    return (
        <NavigateContext.Provider value={navInfo}>
            {children}            
        </NavigateContext.Provider>
    );
};

export default NavigateProvider;