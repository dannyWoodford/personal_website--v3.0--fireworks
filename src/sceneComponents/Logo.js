import React, {useRef} from 'react'
import * as THREE from 'three';
import { useFrame } from "react-three-fiber"


export default function Logo() {
    const ref = useRef()
    useFrame(state => {
      const x = (1 + state.mouse.y) / 10 
      const y = (1 + state.mouse.x) / 10
      ref.current.rotation.x = x
      ref.current.rotation.y = y
    })
    
    const texture = new THREE.TextureLoader().load( 'images/text-example-test-3.png' );
    
    return (
        <mesh  castShadow  ref={ref} scale={[5.2,2,1]} position={[-6.4, 6, -27]}>
            <planeBufferGeometry attach="geometry" args={[10, 10]} />
            {texture &&
                <meshStandardMaterial
                  transparent
                  attach="material"
                  color="#ffffff"
                  emissive="#000000"
                  roughness={0.4}
                  metalness={0.3}
                  map={texture}
                  side={THREE.DoubleSide}
                />
            }
  
        </mesh>
    )
  }