import { useState, useLayoutEffect } from 'react'
import { useThree } from '@react-three/fiber'

export default function Resize() {
	const width = window.innerWidth
	const height = window.innerHeight

	const state = useThree()

	const [setSize] = useState(() => state.setSize)
	useLayoutEffect(() => {
		setSize(width, height)
		state.set({ setSize: () => null })
		return () => state.set({ setSize })
	}, [setSize, width, height])

	return <></>
}
