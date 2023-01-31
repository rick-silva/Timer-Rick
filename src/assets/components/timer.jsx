
import React, { useEffect } from "react";
import { useState } from "react";

export const Timer = () =>{

    const [segundosTotal, setSegundosTotal] = useState(0);

    const minutos = Math.floor(segundosTotal / 60)
    const segundos = segundosTotal % 60

    let cronometro

    useEffect(()=>{
      
        cronometro = setInterval(()=>{

          if(segundosTotal === 0){
            console.log(`Menor que 0`)
            clearInterval(cronometro)
            // setInterval("")
          }else{
            setSegundosTotal(segundosTotal - 1)
            console.log(segundos)
          }

        },1000)
        return () => clearInterval(cronometro)
        
    },[segundosTotal])

    const stop = () => {
      clearInterval(cronometro)
      console.log(`parou aos ${segundos} segundos`)
    }
    
    // setSegundosTotal(10)

    return(
        <div className="w-screen flex flex-col items-center justify-center">
            <h1 className="text-white w- text-6xl font-bold">Timer</h1>
            {/* padStart completa a string com '2' caracteres, caso não haja '2' complete com 0 */}
          <div className="w-full flex flex-row items-center justify-center p-3 text-white">
            <span className="text-3xl text-red-600">{ minutos.toString().padStart(2, "0") }</span>
            <span className="text-2xl text-red-600"> : </span>
            <span className="text-3xl text-red-600">{ segundos.toString().padStart(2, "0") }</span>
          </div>
            <br />
          <div className="flex justify-center">
            <button className="w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500" 
              type="button" 
              value="" 
              onClick={stop}>Pause</button>

            <button className="w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500" 
              type="button" 
              value="" 
              onClick={()=> {
                if(segundosTotal <= 0){
                  setSegundosTotal(10)
                }else{
                    cronometro = setInterval(()=>{
            
                      if(segundosTotal === 0){
                        console.log(`Menor que 0`)
                        clearInterval(cronometro)
                        // setInterval("")
                      }else{
                        setSegundosTotal(segundosTotal - 1)
                        console.log(segundos)
                      }
            
                    },1000)
                    return () => clearInterval(cronometro)
                }
              } 
              }>Play</button>
            
            <button className="w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500" 
              type="button" 
              value="" 
              onClick={()=> {
                  setSegundosTotal(0) 
                } 
              }>Reset</button>
          </div> 

        </div>
    )
}//fim component

