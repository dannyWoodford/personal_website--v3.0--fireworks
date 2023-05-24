import * as THREE from 'three'
import React, { useEffect, useMemo } from 'react'
import { Box, useTexture, Cylinder, Plane, Decal } from '@react-three/drei'

import Streetlamp from './Streetlamp'
import TaxiReduced from './Models/TaxiReduced'
import TrafficSignal from './Models/TrafficSignal'

export default function Floor({ animationOver }) {
	const [building, tree, sidewalk, grass, floor, crossWalk] = useTexture([
		process.env.PUBLIC_URL + '/assets-by-page/about/building.jpeg',
		process.env.PUBLIC_URL + '/assets-by-page/about/tree.png',
		process.env.PUBLIC_URL + '/assets-by-page/about/floor/sidewalk.jpeg',
		process.env.PUBLIC_URL + '/assets-by-page/about/floor/grass.jpg',
		process.env.PUBLIC_URL + '/assets-by-page/about/floor/GroundCobblestone001_COL_1K.jpg',
		process.env.PUBLIC_URL + '/assets-by-page/about/floor/crossWalk.png',
	])

	const treeFlip = useMemo(() => tree.clone(), [tree])
	const floorFront = useMemo(() => floor.clone(), [floor])
	const sidewalkBack = useMemo(() => sidewalk.clone(), [sidewalk])
	const stoneWall = useMemo(() => sidewalk.clone(), [sidewalk])
	const stoneWallColumn = useMemo(() => sidewalk.clone(), [sidewalk])
	const stoneWallTop = useMemo(() => sidewalk.clone(), [sidewalk])

	useEffect(() => {
		treeFlip.wrapS = THREE.RepeatWrapping
		treeFlip.repeat.x = -1
		treeFlip.needsUpdate = true

		floor.wrapS = THREE.RepeatWrapping
		floor.wrapT = THREE.RepeatWrapping
		floor.repeat.set(2, 10)
		floor.needsUpdate = true

		floorFront.wrapS = THREE.RepeatWrapping
		floorFront.wrapT = THREE.RepeatWrapping
		floorFront.repeat.set(8, 2)
		floorFront.needsUpdate = true

		sidewalkBack.wrapS = THREE.RepeatWrapping
		sidewalkBack.wrapT = THREE.RepeatWrapping
		sidewalkBack.repeat.set(10, 1)
		sidewalkBack.needsUpdate = true

		sidewalk.wrapS = THREE.RepeatWrapping
		sidewalk.wrapT = THREE.RepeatWrapping
		sidewalk.repeat.set(5, 1)
		sidewalk.needsUpdate = true

		stoneWall.wrapS = THREE.RepeatWrapping
		stoneWall.wrapT = THREE.RepeatWrapping
		stoneWall.repeat.set(10, 1.5)
		stoneWall.needsUpdate = true

		stoneWallColumn.wrapS = THREE.RepeatWrapping
		stoneWallColumn.wrapT = THREE.RepeatWrapping
		stoneWallColumn.repeat.set(0.3, 0.3)
		stoneWallColumn.needsUpdate = true

		stoneWallTop.wrapS = THREE.RepeatWrapping
		stoneWallTop.wrapT = THREE.RepeatWrapping
		stoneWallTop.repeat.set(1, 35)
		stoneWallTop.needsUpdate = true

		grass.wrapS = THREE.RepeatWrapping
		grass.wrapT = THREE.RepeatWrapping
		grass.repeat.set(1, 15)
		grass.needsUpdate = true
	}, [floor, floorFront, sidewalk, sidewalkBack, stoneWall, stoneWallColumn, stoneWallTop, grass, treeFlip])

	return (
		<group position={[0, 0, 70]}>
			<group name='road' position={[0, -5.7, 0]}>
				<Plane name='cobblestone' args={[320, 80]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -40]} receiveShadow>
					<meshLambertMaterial map={floorFront} side={THREE.FrontSide} />

					<Decal position={[-58, -4, 0]} rotation={[0, 0, Math.PI / 2]} scale={62} receiveShadow>
						<meshStandardMaterial transparent polygonOffset polygonOffsetFactor={-1} map={crossWalk} side={THREE.FrontSide} alphaTest={0.5} />
					</Decal>

					<Decal position={[58, -4, 0]} rotation={[0, 0, Math.PI / 2]} scale={62}>
						<meshStandardMaterial transparent polygonOffset polygonOffsetFactor={-1} map={crossWalk} side={THREE.FrontSide} alphaTest={0.5} />
					</Decal>
				</Plane>

				<Plane name='cobblestone'  args={[80, 400]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 200]}>
					<meshLambertMaterial map={floor} side={THREE.FrontSide} />

					<Decal position={[0, 190, 0]} scale={75}>
						<meshStandardMaterial transparent polygonOffset polygonOffsetFactor={-1} map={crossWalk} alphaTest={0.5} />
					</Decal>
				</Plane>
			</group>

			<group name='back-wall-and-side-walk' position={[0, 0, -50]}>
				<Cylinder name='backWall-top' position={[98, 11.7, -61.2]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} args={[1.5, 1.5, 500, 3]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallTop} color='grey' />
				</Cylinder>
				<Box name='backWall' position={[98, 3, -61]} args={[500, 16, 2]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWall} color='grey' />
				</Box>
				<Box name='back-Sidewalk' position={[98, -7.9, -40]} args={[500, 6, 40]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalkBack} color='lightgrey' />
				</Box>

				<TaxiReduced />
				<TrafficSignal animationOver={animationOver} />

				<Box name='back-Sidewalk-column' position={[136, 4, -61]} args={[10, 20, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
				<Box name='back-Sidewalk-column' position={[36, 4, -61]} args={[10, 20, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
				<Box name='back-Sidewalk-column' position={[-56, 4, -61]} args={[10, 20, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
				<Box name='back-Sidewalk-column' position={[-156, 4, -61]} args={[10, 20, 4]} receiveShadow>
					<meshLambertMaterial side={THREE.FrontSide} map={stoneWallColumn} color='grey' />
				</Box>
			</group>

			<group name='trees' visible={!animationOver}>
				<group name='group-0' position={[0, 0, -140]}>
					<Plane name='tree-left' args={[0 + 75, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[0 + 90, 63]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
				</group>

				<group name='group-1' position={[0, 0, -100]}>
					<Plane name='tree-left' args={[0 + 75, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[0 + 90, 63]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
				</group>

				<group name='group-2' position={[0, 0, -60]}>
					<Plane name='tree-left' args={[0 + 81, 60]} rotation={[0, 0, 0]} position={[-38, 23, 155]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[-50, 9.7, 130]} />

					<Plane name='tree-right' args={[0 + 86, 59]} rotation={[0, 0, 0]} position={[38, 23, 150]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[45, 9.7, 130]} />
				</group>

				<group name='group-3' position={[0, 0, -20]}>
					<Plane name='tree-left' args={[0 + 91, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
					<Plane name='tree-right' args={[0 + 83, 60]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
				</group>

				<group name='group-4' position={[0, 0, 20]}>
					<Plane name='tree-left' args={[0 + 82, 63]} rotation={[0, 0, 0]} position={[-38, 23, 155]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[0 + 90, 61]} rotation={[0, 0, 0]} position={[38, 23, 150]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
				</group>

				<group name='group-5' position={[0, 0, 60]}>
					<Plane name='tree-left' args={[0 + 81, 62]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[-50, 9.7, 130]} />

					<Plane name='tree-right' args={[0 + 86, 60]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[45, 9.7, 130]} />
				</group>

				<group name='group-6' position={[0, 0, 100]}>
					<Plane name='tree-left' args={[0 + 110, 68]} rotation={[0, 0, 0]} position={[-35, 27, 150]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[0 + 81, 63]} rotation={[0, 0, 0]} position={[38, 23, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
				</group>
				<group name='group-7' position={[0, 0, 140]}>
					<Plane name='tree-left' args={[0 + 80, 65]} rotation={[0, 0, 0]} position={[-38, 23, 150]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>

					<Plane name='tree-right' args={[0 + 110, 80]} rotation={[0, 0, 0]} position={[38, 30, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
				</group>
				<group name='group-8' position={[0, 0, 180]}>
					<Plane name='tree-left' args={[0 + 85, 74]} rotation={[0, 0, 0]} position={[-38, 30, 150]}>
						<meshLambertMaterial map={tree} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[-50, 9.7, 130]} />

					<Plane name='tree-right' args={[0 + 100, 75]} rotation={[0, 0, 0]} position={[38, 30, 155]}>
						<meshLambertMaterial map={treeFlip} side={THREE.FrontSide} transparent alphaTest={0.98} />
					</Plane>
					<Streetlamp pos={[45, 9.7, 130]} />
				</group>
			</group>

			<group name='left' visible={!animationOver}>
				<Plane name='buildings-left' args={[400, 100]} rotation={[0, Math.PI / 2, 0]} position={[-80, 45, 220]}>
					<meshLambertMaterial map={building} side={THREE.FrontSide} />
				</Plane>
				<Box name='left-sidewalk' position={[-69, -5.9, 220]} args={[400, 2, 22]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='left-sidewalk-curb' position={[-41, -5.9, 200]} args={[400, 2, 2]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='left-sidewalk-curb-turn' position={[-50, -5.9, -1]} args={[20, 2, 2]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='left-sidewalk-turn' position={[-108, -5.9, 9]} args={[100, 2, 22]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Plane name='grass' args={[16, 450]} rotation={[-Math.PI / 2, 0, 0]} position={[-50, -5.3, 225]}>
					<meshLambertMaterial map={grass} color={'#046312'} side={THREE.FrontSide} />
				</Plane>
			</group>

			<group name='right' visible={!animationOver}>
				<Plane name='buildings-right' args={[400, 100]} rotation={[0, -Math.PI / 2, 0]} position={[80, 45, 220]}>
					<meshLambertMaterial map={building} side={THREE.FrontSide} />
				</Plane>
				<Box name='right-sidewalk' position={[69, -5.9, 220]} args={[400, 2, 22]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='right-sidewalk-curb' position={[41, -5.9, 200]} args={[400, 2, 2]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='right-sidewalk-curb-turn' position={[50, -5.9, -1]} args={[20, 2, 2]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Box name='right-sidewalk-turn' position={[108, -5.9, 9]} args={[100, 2, 22]} receiveShadow rotation={[0, 0, 0]}>
					<meshLambertMaterial side={THREE.FrontSide} map={sidewalk} color='lightgrey' />
				</Box>
				<Plane name='grass' args={[16, 450]} rotation={[-Math.PI / 2, 0, 0]} position={[50, -5.3, 225]}>
					<meshLambertMaterial map={grass} color={'#046312'} side={THREE.FrontSide} />
				</Plane>
			</group>
		</group>
	)
}
