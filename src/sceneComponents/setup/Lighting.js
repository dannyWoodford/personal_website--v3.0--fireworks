
import React from 'react'
// import * as THREE from 'three';
// import {useResource, useThree} from 'react-three-fiber'


export default function Lighting(props) {

    function MainPointLight({ brightness, color }) {
      // const [ref, mainLightRef] = useResource();
        return (
          <pointLight
            // ref={ref}
            color={color}
            intensity={brightness}
            position={[-16, 10, 5]}
            castShadow
            {...props}
          >
              {/* {mainLightRef && <pointLightHelper args={[mainLightRef]} />} */}
          </pointLight>
        );
      }
    
    function SecondaryPointLight({ brightness, color }) {
        return (
          <pointLight
            color={color}
            intensity={brightness}
            position={[16, -15, 20]}
            castShadow
          />
        );
      }
      

    return (
        <group>
            <MainPointLight brightness={1.3} color={props.mainLightColor} />
            <SecondaryPointLight brightness={.4} color={"#ff0e00"} />
        </group>
    )
}






// import React, {useMemo} from 'react'
// import * as THREE from 'three';
// import {useResource, useThree} from 'react-three-fiber'


// export default function Lighting(props) {

//     function MainPointLight({ brightness, color }) {
//       const [ref, mainLightRef] = useResource();
//         return (
//           <pointLight
//             ref={ref}
//             color={color}
//             intensity={brightness}
//             position={[-14, 14, 9]}
//             castShadow
//             {...props}
//           >
//               {mainLightRef && <pointLightHelper args={[mainLightRef]} />}
//           </pointLight>
//         );
//       }
    
//     function SecondaryPointLight({ brightness, color }) {
//         return (
//           <pointLight
//             color={color}
//             intensity={brightness}
//             position={[10,-8,15]}
//             castShadow
//           />
//         );
//       }
      

//     function SunLight({ brightness, color }) {
//       const light = useMemo(() => new THREE.SpotLight(color, brightness), [])

//       return (
//         <>
//           <primitive 
//             object={light}
//             color={color}
//             intensity={brightness}
//             position={[-4, 15, 6]}
//             angle={0.6}
//             penumbra={.9} 
//             castShadow={true}
//           />
//           <primitive object={light.target} position={[-9, 2.7, -7]}  />
//         </>
//       )
//     }

//     return (
//         <group>
//             <MainPointLight brightness={1.1} color={props.mainLightColor} />
//             {/* <SunLight brightness={0.5} color={"rgb(226, 219, 115)"} /> */}
//             <SecondaryPointLight brightness={.1} color={"#960303"} />
//             <ambientLight color={"white"} intensity=".2" />
//         </group>
//     )
// }