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


function Image({ texture, width, height }) {
    const [onPointerOver, x, y, factor] = useActive(width, height, true, 3.2, 1)
    return (
        <AnimatedPlane 
                args={[1, .5, 32, 32]} rotation={[0,3.0,0]} position={[0,0,20]} scale-x={x} scale-y={y} onPointerOver={onPointerOver}>
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
    const texture = useLoader(TextureLoader, 'images/projects/Notflix-img.png')
    const [width, height] = useAspect('cover', 4168, 4168)
    return (
      <>
        <Image texture={texture} width={width} height={height} />
      </>
    )
}
