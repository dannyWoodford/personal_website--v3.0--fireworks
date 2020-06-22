import React from 'react'
import * as THREE from 'three';


function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[4.7, 0, 0]} position={[0, -3.257, 0]}>
      <planeBufferGeometry attach="geometry" args={[80, 80]} />
      <meshStandardMaterial
        attach="material"
        color="#ffffff"
        emissive="#000000"
        roughness={0.7}
        metalness={0.3}
        side={THREE.FrontSide} 
      />
    </mesh>
  );
}


const Dome = (props) => {

  return (
    <mesh position={[0,1.418, 0]}>
      <sphereBufferGeometry
        attach="geometry"
        args={[40,32,32,0,6.3,0,1.7]}
      />
        <meshStandardMaterial
        attach="material"
        color="#ffffff"
        emissive="#000000"
        roughness={0.8}
        metalness={0.4}
        side={THREE.BackSide} 
      />
    </mesh>
  )
}



const DomeRing = () => {
  return (
    <mesh position={[0,16,0]}>
      <cylinderBufferGeometry
        attach="geometry"
        args={[32,32,3,64,64,true]}
      />
        <meshStandardMaterial
          // transparent
          // opacity=".5"
          attach="material"
          color="#ffffff"
          emissive="#000000"
          roughness={.5}
          metalness={0.6}
          side={THREE.DoubleSide} 
        />
    </mesh>
  )
}

const DomeTop = (props) => {

  return (
    <mesh position={[0,1.3, 0]}>
      <sphereBufferGeometry
        attach="geometry"
        args={[40,32,32,0,6.3,0,0.4]}
      />
        <meshStandardMaterial
        attach="material"
        color="#ffffff"
        emissive="#000000"
        roughness="0.3"
        metalness={0.8}
        side={THREE.BackSide} 
      />
    </mesh>
  )
}




export default function Structure(props) {
  return (
    <group>
      <DomeTop />
      <DomeRing />
      <Dome />
      <GroundPlane  />
    </group>
  )
}



// function BackDrop() {
//   const backwall = new THREE.Shape();
//   const startX = 0
//   const startY = 0
//   const height = 20
//   const width = 100
//           backwall.moveTo(startX, startY) //start bottom-left
//           backwall.lineTo(startX, startY+ height) //top-left
//           backwall.lineTo(startX+ width, startY+ height)//top-right
//           backwall.lineTo(startX+ width, startY)//bottom-right
//           backwall.lineTo(startX, startY) //end bottom-left
      
//   const holePath = new THREE.Path();
//   const holeStartX = 39.5
//   const holeStarY = 5.7
//   const holeHeight = 4.1
//   const holeWidth = 13
 
//         // holePath.moveTo(holeStartX, holeStarY) //start bottom-left
//         // holePath.lineTo(holeStartX, holeStarY+ holeHeight) //top-left
//         // holePath.lineTo(holeStartX+ holeWidth, holeStarY+ holeHeight)//top-right
//         // holePath.lineTo(holeStartX+ holeWidth, holeStarY)//bottom-right
//         // holePath.lineTo(holeStartX, holeStarY) //end bottom-left
//         holePath.moveTo(holeStartX, holeStarY) //start bottom-left
//         holePath.lineTo(holeStartX, holeStarY+ holeHeight) //top-left
//         holePath.lineTo(holeStartX+ holeWidth, holeStarY+ holeHeight)//top-right
//         holePath.lineTo(holeStartX+ holeWidth, holeStarY)//bottom-right
//         holePath.lineTo(holeStartX, holeStarY) //end bottom-left
        
//         // backwall.holes.push(holePath)
//           // console.dir(backwall)

    
//       return (
//         <mesh receiveShadow 
//         // position={[0, 0, -10]}
//         position={[-50, -5, -10]}
//         >
//           <shapeBufferGeometry 
//             attach="geometry" 
//             args={backwall}
//             // holes={holePath}
//           />
//       <meshStandardMaterial
//         attach="material"
//         color="#ffffff"
//         emissive="#000000"
//         roughness="0.6"
//         metalness="0.2"
//         side={THREE.DoubleSide} 
//       />
//     </mesh>
//   );
// }


// const FloorMoldingBevel = () => {
//   return (
//     <mesh position={[0,0.1,0]}>
//       <cylinderBufferGeometry
//         attach="geometry"
//         args={[21,6.94,1.5,64,64,true,3.606,5.355]}
//       />
//       <meshLambertMaterial 
//         attach="material" 
//         color="#c40b00" 
//         emissive="#240000" 
//         // roughness={0.2} 
//         // metalness={0.2}
//         // wireframe={true}
//         side={THREE.BackSide} 
//       />
//     </mesh>
//   )
// }

// const FloorMoldingRise = () => {
//   return (
//     <mesh position={[0,-1.3,0]}>
//       <cylinderBufferGeometry
//         attach="geometry"
//         args={[6.94,6.92,1.3,64,64,true,3.600,2]}
//       />
//       <meshLambertMaterial 
//         attach="material" 
//         color="#ffffff" 
//         emissive="#000000" 
//         // roughness={0.2} 
//         // metalness={0.2}
//         // wireframe={true}
//         side={THREE.BackSide} 
//       />
//     </mesh>
//   )
// }

// function GroundPlane(props) {
//   return (
//     <mesh  
//       receiveShadow  
//       rotation={[4.7, 0, 0]} 
//       position={[0, -2.0, 0]}>
//         <planeBufferGeometry 
//           attach="geometry" 
//           args={[16, 16,70,120 ]} 
//         />
//         <meshBasicMaterial 
//           attach="material" 
//           color={"red"}
//           // emissive={props.mainLightColor}
//           // color={props.args}
//           // roughness="0.7" 
//           // metalness={0.2}
//           // side={THREE.FrontSide} 
//           wireframe={true}
//         />
//     </mesh>
//   );
// }

