import React from 'react'
import * as THREE from 'three';

const Container = () => {

    const width = -6
    const top = 3
    const bottom = -5

    const button = new THREE.Shape();
        // button.moveTo( width + 5, height + 5 );
        // button.bezierCurveTo( width + 5, height + 5, width + 4, height, width, height );
        // button.bezierCurveTo( width - 6, height, width - 6, height + 7,width - 6, height + 7 );
        // button.bezierCurveTo( width - 6, height + 11, width - 3, height + 15.4, width + 5, height + 19 );
        // button.bezierCurveTo( width + 12, height + 15.4, width + 16, height + 11, width + 16, height + 7 );
        // button.bezierCurveTo( width + 16, height + 7, width + 16, height, width + 10, height );
        // button.bezierCurveTo( width + 7, height, width + 5, height + 5, width + 5, height + 5 );
            
            button.moveTo(width, bottom)
            button.lineTo(width, top)
            button.lineTo(top,top)
            button.lineTo(top,bottom)
            button.lineTo(width,bottom)
        //   shape.holes.push(holeShape)

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
          <mesh receiveShadow position={[-3, 3, -9.99]}>
            <extrudeBufferGeometry 
              attach="geometry" 
              args={[button, extrudeSettings]} 
            />
             <meshStandardMaterial
                attach="material"
                color="#ffffff"
                emissive="#000000"
                roughness="0.8"
                metalness="0.3"
                side={THREE.DoubleSide} 
            />
          </mesh>
        )
      }

    const  Button = () => {
        const button = new THREE.Shape();

        const x = 3
        const y = 3
        const width = 2
        const height = 1
        const radius = 1

        button.moveTo( x, y + radius );
        button.lineTo( x, y + height - radius );
        button.quadraticCurveTo( x, y + height, x + radius, y + height );
        button.lineTo( x + width - radius, y + height );
        button.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
        button.lineTo( x + width, y + radius );
        button.quadraticCurveTo( x + width, y, x + width - radius, y );
        button.lineTo( x + radius, y );
        button.quadraticCurveTo( x, y, x, y + radius );

        const extrudeSettings = {
            steps: 2,
            depth: 0,
            bevelEnabled: true,
            bevelThickness: .3,
            bevelSize: 1,
            bevelOffset: -1,
            bevelSegments: 30
        };

        return (
            <mesh receiveShadow position={[-6, 0, -9.0]}>
              <extrudeBufferGeometry 
                attach="geometry" 
                args={[button, extrudeSettings]} 
              />
               <meshStandardMaterial
                  attach="material"
                  color="#ffffff"
                  emissive="#000000"
                  roughness="0.8"
                  metalness="0.3"
                  side={THREE.DoubleSide} 
              />
            </mesh>)
    }

export default function Nav() {

    return (
        <group>
            <Button />
            <Container />
        </group>
    )
}

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