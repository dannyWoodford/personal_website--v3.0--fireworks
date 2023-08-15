import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import { rocketItemArray } from './projects/ProjectsData'
import ProjectsRouting from './projects/ProjectsRouting'
import ProjectsContent from './projects/ProjectsContent'

export default function Projects({ currentName }) {
	// flatiron, brandgage, rocket, personalProjects
	const [displayCategory, setDisplayCategory] = useState('rocket')
	const [displayItem, setDisplayItem] = useState(rocketItemArray[1])

	const updateDisplayCategory = category => {
		setDisplayCategory(category)
	}

	const updateDisplayItem = item => {
		setDisplayItem(item)
	}

	return (
		<div
			className='page projects-page'
			style={{
				transition: 'opacity 1.5s ease-in-out',
				opacity: currentName === 'projects' ? 1 : 0.5,
			}}>
			<div className='max-width-container'>
				<div className='container'>
					<div className='page-container'>
						<ProjectsRouting updateDisplayCategory={updateDisplayCategory} updateDisplayItem={updateDisplayItem} displayItem={displayItem} />

						<Routes>
							<Route
								path='flatiron/*'
								element={
									<ProjectsContent
										updateDisplayCategory={updateDisplayCategory}
										updateDisplayItem={updateDisplayItem}
										displayCategory={displayCategory}
										displayItem={displayItem}
									/>
								}
							/>
							<Route
								path='personalProjects/*'
								element={
									<ProjectsContent
										updateDisplayCategory={updateDisplayCategory}
										updateDisplayItem={updateDisplayItem}
										displayCategory={displayCategory}
										displayItem={displayItem}
									/>
								}
							/>
							<Route
								path='brandgage/*'
								element={
									<ProjectsContent
										updateDisplayCategory={updateDisplayCategory}
										updateDisplayItem={updateDisplayItem}
										displayCategory={displayCategory}
										displayItem={displayItem}
									/>
								}
							/>
							<Route
								path='rocket/*'
								element={
									<ProjectsContent
										updateDisplayCategory={updateDisplayCategory}
										updateDisplayItem={updateDisplayItem}
										displayCategory={displayCategory}
										displayItem={displayItem}
									/>
								}
							/>
						</Routes>
					</div>
				</div>
			</div>
		</div>
	)
}
