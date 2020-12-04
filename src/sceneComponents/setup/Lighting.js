
import React, {useRef} from 'react'
import {useResource, useFrame } from "react-three-fiber"

export default function Lighting(props) {
  // const ref = useRef()
  const [ref, light] = useResource()

  // const setRange = (num) => {
  //   if (num > 255) {
  //     return 255
  //   } else if(num < 0){
  //     return 0
  //   } else {
  //     return num
  //   }
  // }
  // useFrame(state => {
  //   const x = (1 + state.mouse.x) / 2.7 //2.7 
  //   const y = (1 + state.mouse.y) / 1 //1
  //   const color = `rgb(${setRange(Math.ceil(x * 255))},${setRange(Math.ceil(x * 155))},${setRange(Math.ceil(y * 255))})`
  //   ref.current.color.set(color)
  // })
  return (
    <>
      {/* <pointLight 
        ref={ref} 
        intensity={0.8} 
        position={[-16, 10, 5]} 
        
        />
      <pointLight 
        intensity={0.1} 
        color="#ff0e00" 
        position={[8, 4, 20]} 
        />

      <spotLight 
        position={[0, -4, -10]}
        penumbra={1}
        intensity={0.5}
      /> */}
      <pointLight 
        ref={ref}
        intensity={1} 
        color="#ffffff" 
        position={[0, 0, 50]} 
      />

      <ambientLight 
        intensity={.4} 
        color="#ffffff" 
      />

      {light && <pointLightHelper args={[light, 1]} />}

    </>
  )
}
