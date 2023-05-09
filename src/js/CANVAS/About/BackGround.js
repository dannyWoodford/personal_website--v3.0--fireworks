import React, { useMemo , useEffect} from 'react'
import { Plane, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function BackGround() {
	const [tree2, forest, pinkTree, city, empire, highRise, clouds] = useTexture([
		process.env.PUBLIC_URL + '/assets-by-page/about/tree-2.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/forest.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/pink-tree.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/city.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/empire.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/highRise.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/clouds.png',
	])

	const pinkTreeFlip = useMemo(() => pinkTree.clone(), [pinkTree])

	useEffect(() => {
		pinkTreeFlip.wrapS = THREE.RepeatWrapping
		pinkTreeFlip.repeat.x = -1
		pinkTreeFlip.needsUpdate = true
	}, [pinkTreeFlip])

	return (
		<group>
			<Plane name='city' position={[40, 120, -380]} args={[700, 300]}>
				<meshLambertMaterial map={city} side={THREE.FrontSide} transparent alphaTest={0.8} />
			</Plane>
			<Plane name='empire' position={[140, 220, -530]} args={[100, 500]}>
				<meshBasicMaterial map={empire} side={THREE.FrontSide} transparent alphaTest={0.8} />
			</Plane>
			<Plane name='highRise' position={[-200, 120, -220]} args={[200, 300]}>
				<meshBasicMaterial color='grey' map={highRise} side={THREE.FrontSide} transparent alphaTest={0.8} />
			</Plane>
			<Plane name='clouds' position={[-390, 420, -700]} args={[360, 90]}>
				<meshBasicMaterial map={clouds} side={THREE.FrontSide} transparent opacity={0.3} />
			</Plane>
			<Plane name='clouds' position={[170, 420, -900]} args={[400, 150]}>
				<meshBasicMaterial map={clouds} side={THREE.FrontSide} transparent opacity={0.5} />
			</Plane>
			<Plane name='clouds' position={[30, 460, -1500]} args={[700, 200]}>
				<meshBasicMaterial map={clouds} side={THREE.FrontSide} transparent opacity={0.2} />
			</Plane>

			<Plane name='forest' position={[-10, 27, -150]} args={[500, 85]}>
				<meshLambertMaterial map={forest} side={THREE.FrontSide} transparent alphaTest={0.6} />
			</Plane>
			<Plane name='tree-2' position={[-140, 21, -130]} args={[100, 60]}>
				<meshLambertMaterial map={tree2} side={THREE.FrontSide} transparent alphaTest={0.5} />
			</Plane>
			<Plane name='tree-2' position={[190, 16, -90]} args={[150, 60]}>
				<meshLambertMaterial map={tree2} side={THREE.FrontSide} transparent alphaTest={0.5} />
			</Plane>
			<Plane name='pinkTree-left' position={[-155, 26, -80]} args={[150, 80]}>
				<meshLambertMaterial map={pinkTree} side={THREE.FrontSide} transparent alphaTest={0.5} />
			</Plane>
			<Plane name='pinkTree-middle' position={[-50, 23, -110]} args={[140, 80]}>
				<meshLambertMaterial map={pinkTree} side={THREE.FrontSide} transparent alphaTest={0.5} />
			</Plane>
			<Plane name='pinkTree-right' position={[80, 23, -65]} args={[120, 60]}>
				<meshLambertMaterial map={pinkTreeFlip} side={THREE.FrontSide} transparent alphaTest={0.5} />
			</Plane>
		</group>
	)
}
