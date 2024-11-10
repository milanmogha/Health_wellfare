import { createContext, useContext } from "react";
import { motion } from "framer-motion";

// Create MotionContext
const MotionContext = createContext();

// Motion Provider to wrap around the app
export const MotionProvider = ({ children }) => {
  const animationVariants = {
    fadeInLeftVariant :{
      hidden:{
          x: -50, 
          opacity: 0,
      },
      visible:{
          x: 0, 
          opacity: 1,
          transition:{
              type: 'tween', 
              duration: 1,
          }
      }
  },
  
  fadeInRightVariant:{
      hidden:{
          x: 50, 
          opacity: 0,
      },
      visible:{
          x: 0, 
          opacity: 1,
          transition:{
              type: 'tween', 
              duration: 1,
          }
      }
  },
  
  fadeInTopVariant :{
      hidden:{
          y: -50, 
          opacity:0,
      },
      visible:{
          y:0, 
          opacity:1,
          transition:{
              type: 'tween', 
              duration:1
          }
      }
  },
  
  fadeInBottomVariant :{
      hidden:{
          y: 50, 
          opacity:0,
      },
      visible:{
          y:0, 
          opacity:1,
          transition:{
              type: 'tween', 
              duration:1
          }
      }
  },
  };

  return (
    <MotionContext.Provider value={animationVariants}>
      {children}
    </MotionContext.Provider>
  );
};

// Custom hook to use motion variants across the app
export const useMotion = () => {
  return useContext(MotionContext);
};
