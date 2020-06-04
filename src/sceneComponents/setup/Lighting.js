
import React, {useRef} from 'react'
import { useFrame } from "react-three-fiber"

export default function Lighting(props) {
  const ref = useRef()
  useFrame(state => {
    const x = (1 + state.mouse.x) / 2 
    const y = (1 + state.mouse.y) / 2
    const color = `rgb(${Math.ceil(x * 255)},${Math.ceil(x * 155)},${Math.ceil(y * 255)})`
    ref.current.color.set(color)
  })
  return (
    <>
      <pointLight 
        ref={ref} 
        intensity={0.8} 
        position={[-16, 10, 5]} 
        castShadow
				shadow-camera-near=".1"
				shadow-camera-far="60"
				shadow-bias="-0.005" 
         />
      <pointLight 
        intensity={0.1} 
        color="#ff0e00" 
        position={[8, 4, 20]} 
        castShadow />
    </>
  )
}
