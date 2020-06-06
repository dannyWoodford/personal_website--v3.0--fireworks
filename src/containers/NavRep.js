import React, {useRef} from 'react'
import * as THREE from 'three';
import { useFrame } from "react-three-fiber"
// import image from './public/images/negx.jpg'
// import { Controls, useControl } from 'react-three-gui'
// import { HTML } from 'drei'

const Container = () => {

  const container = new THREE.Shape();
  const startX = 0
  const startY = 0
  const height = 2
  const width = 20
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
          <mesh receiveShadow position={[-12, 3.5, -3]}>
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
                roughness="0.8"
                metalness="0.3"
                side={THREE.DoubleSide} 
            />
          </mesh>
        )
      }

    const  Button = () => {
        const button = new THREE.Shape();

        const x = 0
        const y = 0
        const width = 1.5
        const height = .5
        const radius = .1

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
          steps: 10,
          depth: .6,
          bevelEnabled: true,
          bevelThickness: .01,
          bevelSize: .01,
          bevelOffset: .01,
          bevelSegments: 50
        };

        const buttonRef = useRef()

        return (
            <mesh 
              receiveShadow 
              position={[-5, -1, -3]}
              ref={buttonRef}
            >
              <extrudeBufferGeometry 
                attach="geometry" 
                args={[button, extrudeSettings]} 
              />
              <meshPhysicalMaterial
                attach="material"
                color="#b76e79"
                emissive="#000000"
                roughness="0.5"
                metalness="0.2"
                reflectivity="3"
                clearcoat="1"
                side={THREE.DoubleSide}
              />
          
            </mesh>)
    }



    
function Title() {
  const ref = useRef()
  useFrame(state => {
    const x = (1 + state.mouse.y) / 10 
    const y = (1 + state.mouse.x) / 10
    ref.current.rotation.x = x
    ref.current.rotation.y = y
  })
  
  const texture = new THREE.TextureLoader().load( 'images/text-example-test-3.png' );
  
  return (
      <mesh  castShadow receiveShadow  ref={ref} scale={[5.2,2,1]} position={[-6.4, 6, -27]}>
          <planeBufferGeometry attach="geometry" args={[10, 10]} />
          {texture &&
              <meshStandardMaterial
                transparent
                attach="material"
                color="#ffffff"
                emissive="#000000"
                roughness="0.4"
                metalness="0.3"
                map={texture}
                side={THREE.DoubleSide}
              />
          }

      </mesh>
  )
}

const NavBar = () => {
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
          roughness=".5"
          metalness="0.6"
          side={THREE.DoubleSide} 
        />
    </mesh>
  )
}


export default function NavRep() {

    return (
        <group>
            <NavBar/>
            <Title />
            {/* <Button /> */}
            {/* <Container /> */}
        </group>
    )
}
