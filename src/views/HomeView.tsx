import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/NavbarComponent";

function HomeView(){
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      })
    
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        })
      }
    
      useEffect(() => {
        window.addEventListener('resize', detectSize)
    
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowDimenion])

    return(
        <>
        <NavbarComponent pageWidth={windowDimenion.winWidth}></NavbarComponent>
        <h1>Pog</h1>

        <p>Width: <strong>{windowDimenion.winWidth}</strong></p>
        <p>Height: <strong>{windowDimenion.winHeight}</strong></p>
        
        </>
    )
}

export default HomeView;