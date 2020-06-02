import React from 'react'
import * as THREE from 'three';
import {useThree, useFrame} from 'react-three-fiber'

const Ceiling = () => {
  return (
    <mesh position={[0,9.9,0]}>
      <cylinderBufferGeometry
        attach="geometry"
        args={[7,21.18301,8,64,1,true]}
      />
      <meshStandardMaterial 
        attach="material" 
        color="#c40b00" 
        emissive="0x6b4600" 
        roughness="0.6" 
        metalness="0.4"
        side={THREE.DoubleSide} 
      />
    </mesh>
  )
}

const GroundPlane = (props) => {
    return (
      <mesh  
        receiveShadow  
        rotation={[4.7, 0, 0]} 
        position={[0, -2.0, 0]}>
          <planeBufferGeometry 
            attach="geometry" 
            args={[40, 40 ]} 
          />
          <meshPhongMaterial 
            attach="material" 
            color="#660000" 
            emissive="#240000" 
            // shininess="10" 
            // roughness="0.7" 
            // metalness="0.2"
            // side={THREE.DoubleSide} 
          />
      </mesh>
    );
  }


const Backwall = (props) => {

  return (
    <mesh position={[0,1.418,0]}>
      <cylinderBufferGeometry
        attach="geometry"
        args={[21.183,20,9,64,1,true,3.60,5.38]}
      />
        <meshPhysicalMaterial
          attach="material"
          color="#E3AEB1" 
          emissive="0xa5a5a5"  
          roughness="0.3" 
          metalness="0.4"
          reflectivity="1"
          clearcoat="1"
          side={THREE.DoubleSide}
        />
    </mesh>
  )
}

const FloorMoldingBevel = () => {
  return (
    <mesh position={[0,0.1,0]}>
      <cylinderBufferGeometry
        attach="geometry"
        args={[21,6.94,1.5,64,1,true,3.606,5.355]}
      />
      <meshStandardMaterial 
        attach="material" 
        color="#c40b00" 
        emissive="0x6b4600" 
        roughness="0.2" 
        metalness="0.2"
        side={THREE.DoubleSide} 
      />
    </mesh>
  )
}

const FloorMoldingRise = () => {
  return (
    <mesh position={[0,-1.3,0]}>
      <cylinderBufferGeometry
        attach="geometry"
        args={[6.94,6.92,1.3,64,1,true,3.606,2]}
      />
      <meshStandardMaterial 
        attach="material" 
        color="#ffffff" 
        emissive="0x6b4600" 
        roughness="0.5" 
        metalness="0.2"
        side={THREE.DoubleSide} 
      />
    </mesh>
  )
}



export default function Structure(props) {
  return (
    <group>
      <GroundPlane />
      <Backwall />
      <FloorMoldingBevel />
      <FloorMoldingRise />
      <Ceiling />
    </group>
  )
}


// export default function GroundPlane() {
//   return (
//     <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -8, 0]}>
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshPhysicalMaterial
//             attach="material"
//             color="0x3f0000" 
//             emissive="#000000" 
//             roughness="0.35" 
//             metalness="0.4"
//             reflectivity="3"
//             clearcoat="1"
//             side={THREE.DoubleSide}
//             // envMap={props.cubeCam.current.renderTarget}
//           />
//     </mesh>
//   );
// }
// export function BackDrop() {
//   return (
//     <mesh receiveShadow position={[0, -17, -14.7]}>
//       <planeBufferGeometry attach="geometry" args={[100, 100]} />
//       <meshPhysicalMaterial
//             attach="material"
//             color="0x3f0000" 
//             emissive="#000000" 
//             roughness="0.35" 
//             metalness="0.4"
//             reflectivity="3"
//             clearcoat="1"
//             side={THREE.DoubleSide}
//             // envMap={props.cubeCam.current.renderTarget}
//           />
//     </mesh>
//   );
// }





// export function Backwall() {

//     const holeShape = new THREE.Path();
//     const startwidth = -4.3
//     const startHeight = -2.65
//     const holeHeight = 5.28
//     const holeWidth = 8.45
//       holeShape.moveTo(startwidth, startHeight);
//       holeShape.lineTo(startwidth + holeWidth, startHeight);
//       holeShape.lineTo(startwidth + holeWidth, startHeight + holeHeight);
//       holeShape.lineTo(startwidth, startHeight + holeHeight);
  
  
//     const height = 15
//     const width = 5
//     const shape = new THREE.Shape();
//       shape.moveTo(-15, -5);
//       shape.lineTo(-15 + width, -5);
//       shape.lineTo(-15 + width, -5 + height);
//       shape.lineTo(-15, -5 + height);
//       shape.holes.push(holeShape)
  
//     return (
//       <mesh receiveShadow position={[0, 0, -2.5]}>
//         <shapeBufferGeometry 
//           attach="geometry" 
//           args={shape} 
//         />
//         <meshStandardMaterial 
//           attach="material" 
//           color="#ffffff" 
//           emissive="#000000" 
//           roughness="0.0" 
//           metalness="0.7"
//         />
//       </mesh>
//     )
//   }
  
  
