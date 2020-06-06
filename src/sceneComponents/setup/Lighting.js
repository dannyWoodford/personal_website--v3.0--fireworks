
import React, {useRef} from 'react'
import { useFrame } from "react-three-fiber"

export default function Lighting(props) {
  const ref = useRef()

  const setRange = (num) => {
    if (num > 255) {
      return 255
    } else if(num < 0){
      return 0
    } else {
      return num
    }
  }
  useFrame(state => {
    const x = (1 + state.mouse.x) / 2 //2.7 
    const y = (1 + state.mouse.y) / 2 //1
    const color = `rgb(${setRange(Math.ceil(x * 255))},${setRange(Math.ceil(x * 155))},${setRange(Math.ceil(y * 255))})`
    ref.current.color.set(color)
  })
  return (
    <>
      <pointLight 
        ref={ref} 
        intensity={0.8} 
        position={[-16, 10, 5]} 
        castShadow
         />
      <pointLight 
        intensity={0.1} 
        color="#ff0e00" 
        position={[8, 4, 20]} 
        castShadow />
    </>
  )
}
