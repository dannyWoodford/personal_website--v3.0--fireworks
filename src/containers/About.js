import React from 'react'
import * as THREE from 'three';
import { Text } from 'drei'

const AboutContainer = () => {

  const container = new THREE.Shape();
  const startX = 0
  const startY = 0
  const height = 7
  const width = 12
          container.moveTo(startX, startY) //start bottom-left
          container.lineTo(startX, startY+ height) //top-left
          container.lineTo(startX+ width, startY+ height)//top-right
          container.lineTo(startX+ width, startY)//bottom-right
          container.lineTo(startX, startY) //end bottom-left

        const extrudeSettings = {
            steps: 2,
            depth: 0,
            bevelEnabled: true,
            bevelThickness: .1,
            bevelSize: 1,
            bevelOffset: -1,
            bevelSegments: 30
        };
        
      
        return (
          <mesh receiveShadow position={[-15, -2, -5]} rotation={[0,4.8,0]}>
            <extrudeBufferGeometry 
              attach="geometry" 
              args={[container, extrudeSettings]} 
            />
            <meshStandardMaterial
            // transparent
            // opacity=".5"
                attach="material"
                color="#ffffff"
                emissive="#000000"
                roughness={0.8}
                metalness={0.3}
                side={THREE.DoubleSide} 
            />
          </mesh>
        )
      }





  



export default function About() {

  const textContent = "ABOUT"

    return (
          <group>
            <Text
              position={[-13, 6, 1]} 
              rotation={[0,1.6,0]}
              color='white'
              fontSize="2"
              maxWidth="5"
              lineHeight=".7"
              letterSpacing=".2"
              textAlign={"justify"}
              font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
              anchorX="center"
              anchorY="middle"
              text={textContent}
            />
            
            <AboutContainer />
        </group>
    )
}












// const  Button = () => {
//   const button = new THREE.Shape();

//   const x = 0
//   const y = 0
//   const width = 1.5
//   const height = .5
//   const radius = .1

//   button.moveTo( x, y + radius );
//   button.lineTo( x, y + height - radius );
//   button.quadraticCurveTo( x, y + height, x + radius, y + height );
//   button.lineTo( x + width - radius, y + height );
//   button.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
//   button.lineTo( x + width, y + radius );
//   button.quadraticCurveTo( x + width, y, x + width - radius, y );
//   button.lineTo( x + radius, y );
//   button.quadraticCurveTo( x, y, x, y + radius );


//   const extrudeSettings = {
//     steps: 10,
//     depth: .6,
//     bevelEnabled: true,
//     bevelThickness: .01,
//     bevelSize: .01,
//     bevelOffset: .01,
//     bevelSegments: 50
//   };

//   const buttonRef = useRef()

//   return (
//       <mesh 
//         receiveShadow 
//         position={[-5, -1, -3]}
//         ref={buttonRef}
//       >
//         <extrudeBufferGeometry 
//           attach="geometry" 
//           args={[button, extrudeSettings]} 
//         />
//         <meshPhysicalMaterial
//           attach="material"
//           color="#b76e79"
//           emissive="#000000"
//           roughness="0.5"
//           metalness="0.2"
//           reflectivity="3"
//           clearcoat="1"
//           side={THREE.DoubleSide}
//         />
    
//       </mesh>)
// }
