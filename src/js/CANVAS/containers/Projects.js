import * as THREE from 'three'
import { TextureLoader } from 'three'
import React, { useState } from 'react'
import { useLoader } from 'react-three-fiber'
import { useAspect, MeshWobbleMaterial, Plane } from 'drei'
import { a, useSpring } from '@react-spring/three'

const AnimatedWobbleMaterial = a(MeshWobbleMaterial)
const AnimatedPlane = a(Plane)

function useActive(width, height, initial, minFactor, maxFactor) {
  const [active, set] = useState(initial)
  const { f } = useSpring({ f: Number(active), from: { f: Number(!initial) }, config: { mass: 5, tension: 400, friction: 150 } })
  const x = f.to([0, 1], [width / minFactor, width / maxFactor])
  const y = f.to([0, 1], [height / minFactor, height / maxFactor])
  const factor = f.to([0, 0.1, 0.5, 0.9, 1], [0, 1, 2, 1, 0])
  return [e => (e.stopPropagation(), set(!active)), x, y, factor]
}


function Image({ texture, width, height, position, rotation}) {
    const [onPointerOver, x, y, factor] = useActive(width, height, true, 1, 1.2)
    return (
        <AnimatedPlane 
                args={[1, .5, 32, 32]} rotation={rotation} position={position}  scale-x={x} scale-y={y} onPointerOver={onPointerOver}>
            <AnimatedWobbleMaterial 
                map={texture} 
                factor={factor} 
                speed={8} 
                // color="#ffffff"
                // emissive="##4f4f4f"
                // roughness="0.8"
                // metalness="0.0"
                side={THREE.DoubleSide} 
            />
        </AnimatedPlane>
    )
}



export default function Projects() {
    const texture1 = useLoader(TextureLoader, 'images/projects/Notflix-img.png')
    const texture2 = useLoader(TextureLoader, 'images/projects/storm.png')
    const texture3 = useLoader(TextureLoader, 'images/projects/sunrise.png')
    const texture4 = useLoader(TextureLoader, 'images/projects/ali.png')
    const texture5 = useLoader(TextureLoader, 'images/projects/3d-spotify.png')
    const texture6 = useLoader(TextureLoader, 'images/projects/indika.png')
    const texture7 = useLoader(TextureLoader, 'images/projects/Labyrinth.png')
    const texture8 = useLoader(TextureLoader, 'images/projects/responsive_text.png')
    const texture9 = useLoader(TextureLoader, 'images/projects/ZSL.png')
    
    const [width, height] = useAspect('cover', 2168, 2168)
    return (
      <group>
        <Image texture={texture1} width={width} height={height} rotation={[0,3.9,0]} position={[10,0,10]} />
        <Image texture={texture2} width={width} height={height} rotation={[0,3.3,0]} position={[2,0,14]} />
        <Image texture={texture3} width={width} height={height} rotation={[0,2.6,0]} position={[-6.5,0,13]} />
        
        <Image texture={texture4} width={width} height={height} rotation={[0,3.9,0]} position={[10,5,10]} />
        <Image texture={texture5} width={width} height={height} rotation={[0,3.3,0]} position={[2,5,14]} />
        <Image texture={texture6} width={width} height={height} rotation={[0,2.6,0]} position={[-6.5,5,13]} />
        
        <Image texture={texture7} width={width} height={height} rotation={[0,3.9,0]} position={[10,10,10]} />
        <Image texture={texture8} width={width} height={height} rotation={[0,3.3,0]} position={[2,10,14]} />
        <Image texture={texture9} width={width} height={height} rotation={[0,2.6,0]} position={[-6.5,10,13]} />
        
4    </group>
    )
}
