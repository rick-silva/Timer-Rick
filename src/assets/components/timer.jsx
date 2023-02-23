
import React, { useEffect } from "react";
import { useState } from "react";

// REACT ICONS
import {TbPlayerPlay} from "react-icons/tb"
import {TbPlayerStop} from "react-icons/tb"
import {TbPlayerPause} from 'react-icons/tb'
import {RxReset} from "react-icons/rx"

export const Timer = () =>{

    const [segundosTotal, setSegundosTotal] = useState(0);
    const [breakTotal, setBreakTotal] = useState(0)
    const [intervalo, setIntervalo] = useState(true)

    const minutos = Math.floor(segundosTotal / 60)
    const segundos = segundosTotal % 60

    const minutosBreak = Math.floor(breakTotal / 60)
    const segundosBreak = breakTotal % 60

    let cronometro
    let timerIntervalo


    useEffect(()=>{
        cronometro = setInterval(()=>{

          if(segundosTotal === 0){
            console.log(`Menor que 0`)
            clearInterval(cronometro) 
          }else{
            setSegundosTotal(segundosTotal - 1)
            console.log(segundos)
          }

        },1000)
        return () => clearInterval(cronometro)
        
        
    },[segundosTotal])

    useEffect(()=>{
      timerIntervalo = setInterval(()=>{

        if(breakTotal === 0){
          console.log(`Menor que 0`)
          clearInterval(timerIntervalo) 
        }else{
          setBreakTotal(breakTotal - 1)
          console.log(segundos)
        }

      },1000)
      return () => clearInterval(timerIntervalo)
      
      
  },[breakTotal])

    const stop = () => {
      clearInterval(cronometro)
      console.log(`Parou aos ${segundos} segundos`)
    }

    const stopBreak = () =>{
      clearInterval(timerIntervalo)
      console.log(`Intervalo parou aos ${segundosBreak} segundos`)
    }
    
    if(intervalo == false){
      return(
        <div className="w-screen flex flex-col items-center justify-center">
            <h1 className="text-white w- text-6xl font-bold max-lg:text-5xl">Intervalo</h1>
            {/* padStart completa a string com '2' caracteres, caso não haja '2' complete com 0 */}
          <div className="w-full flex flex-row items-center justify-center p-3 max-lg:p-2 text-white">
            <span className="text-3xl text-white max-lg:text-2xl">{ minutosBreak.toString().padStart(2, "0") }</span>
            <span className="text-2xl text-white max-lg:text-xl"> : </span>
            <span className="text-3xl text-white max-lg:text-2xl">{ segundosBreak.toString().padStart(2, "0") }</span>
          </div>
            <br />
          <div className="flex justify-center">
            <button className="flex justify-center items-center w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2" 
              type="button" 
              value=""
              onClick={stopBreak}
              > <TbPlayerStop className="w-5 h-5 max-lg:w-4 max-lg:h-4" /> </button>

            <button className="flex justify-center items-center w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2" 
              type="button" 
              value=""
              onClick={()=>{
                  if(breakTotal <= 0){
                    setBreakTotal(10)
                  }else{
                    setBreakTotal(breakTotal - 1)
                    console.log(segundosBreak)
                  }
                }
              }
             > <TbPlayerPlay className="w-5 h-5 max-lg:w-4 max-lg:h-4"/> </button>
            
            <button className="flex justify-center items-center w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2" 
              type="button" 
              value=""
              onClick={
                () =>{setBreakTotal(0)}
              }
             > <RxReset className="w-5 h-5 max-lg:w-4 max-lg:h-4"/> </button>

            <button className="flex justify-center items-center w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2 max-lg:text-sm" 
              type="button" 
              value="" 
              onClick={
                  ()=> {setBreakTotal(0), setIntervalo(true)}
              }>Timer</button>
          </div> 

        </div>
    
      )
    }else{
      return(
        <div className="w-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-6xl font-bold max-lg:text-5xl">Timer</h1>
            {/* padStart completa a string com '2' caracteres, caso não haja '2' complete com 0 */}
          <div className="w-full flex flex-row items-center justify-center p-3 max-lg:p-2 text-white">
            <span className="text-3xl text-white max-lg:text-2xl">{ minutos.toString().padStart(2, "0") }</span>
            <span className="text-2xl text-white max-lg:text-xl"> : </span>
            <span className="text-3xl text-white max-lg:text-2xl">{ segundos.toString().padStart(2, "0") }</span>
          </div>
            <br />
          <div className="flex justify-center">
            <button className="flex justify-center items-center w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2" 
              type="button" 
              value="" 
              onClick={stop}> <TbPlayerStop className="w-5 h-5 max-lg:w-4 max-lg:h-4" /> </button>

            <button className="flex justify-center items-center w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2" 
              type="button" 
              value="" 
              onClick={()=> {
                  if(segundosTotal <= 0){
                    setSegundosTotal(10)
                  }else{
                    setSegundosTotal(segundosTotal - 1)
                    console.log(segundos)
                  }
                } 
              }> <TbPlayerPlay className="w-5 h-5 max-lg:w-4 max-lg:h-4"/> </button>
            
            <button className="flex justify-center items-center w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2" 
              type="button" 
              value="" 
              onClick={()=> {
                  setSegundosTotal(0)
                } 
              }> <RxReset className="w-5 h-5 max-lg:w-4 max-lg:h-4"/> </button>

            <button className="w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500 max-lg:w-20 max-lg:m-2 max-lg:text-sm" 
              type="button" 
              value="" 
              onClick={
                  ()=> {setSegundosTotal(0),setIntervalo(false)}
              }>Intervalo</button>
          </div> 

        </div>
    )
    }

    
}//fim component

