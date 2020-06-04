
import React, {useRef} from 'react'
// import * as THREE from 'three';
// import {useResource, useThree} from 'react-three-fiber'


// export default function Lighting(props) {

//     function MainPointLight({ brightness, color }) {
//       // const [ref, mainLightRef] = useResource();
//         return (
//           <pointLight
//             // ref={ref}
//             color={color}
//             intensity={brightness}
//             position={[-16, 10, 5]}
//             castShadow
//             {...props}
//           >
//               {/* {mainLightRef && <pointLightHelper args={[mainLightRef]} />} */}
//           </pointLight>
//         );
//       }
    
//     function SecondaryPointLight({ brightness, color }) {
//         return (
//           <pointLight
//             color={color}
//             intensity={brightness}
//             position={[16, -5, 20]}
//             castShadow
//           />
//         );
//       }
      

//     return (
//         <group>
//             <MainPointLight brightness={1.0} color={props.mainLightColor} />
//             <SecondaryPointLight brightness={.2} color={"#ff0e00"} />
//         </group>
//     )
// }


import { useFrame } from "react-three-fiber"

export default function Lighting(props) {
  // setMainLightColorState(`rgb(${Math.round((e.clientY/e.target.offsetWidth)* Math.PI * 90 )},${Math.round((e.clientY/e.target.offsetHeight)* Math.PI * 30 )},${Math.round((e.clientX/e.target.offsetWidth)* Math.PI * 90)})`);
  const ref = useRef()
  useFrame(state => {
    const x = (1 + state.mouse.x) / 2
    const y = (1 + state.mouse.y) / 2
    const color = `rgb(${Math.ceil(y * 255)},${Math.ceil(y * 155)},${Math.ceil(x * 255)})`
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
