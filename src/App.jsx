import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [color,setColor]=useState("olive");
  

  return (
    <>
      <div className='w-full h-screen duration-1000'
      style={{backgroundColor : color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
          rounded-3xl'>
            <button onClick={()=> setColor('red')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'red' , color:'white'}}>Red</button>
            <button onClick={()=> setColor('green')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'green' , color:'white'}}>Green</button>
            <button onClick={()=> setColor('blue')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'blue' , color:'white'}}>Blue</button>
            <button onClick={()=> setColor('olive')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'olive' , color:'white'}}>Olive</button>
            <button onClick={()=> setColor('Grey')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'Grey' , color:'white'}}>Gray</button>
            <button onClick={()=> setColor('yellow')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'yellow' , color:'black'}}>Yellow</button>
            <button onClick={()=> setColor('pink')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'pink' , color:'black'}}>Pink</button>
            <button onClick={()=> setColor('purple')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'purple' , color:'white'}}>purple</button>
            <button onClick={()=> setColor('Lavender')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'Lavender' , color:'black'}}>Lavender</button>
            <button onClick={()=> setColor('White')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'White' , color:'black'}}>White</button>
            <button onClick={()=> setColor('Black')} className='outline-none  px-4 py-1 rounded-full shadow-lg'
            style={{backgroundColor:'Black' , color:'white'}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
