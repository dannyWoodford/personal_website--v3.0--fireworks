import React from 'react'
import { Routes, Route } from 'react-router-dom'

import ProjectsPageRouting from './projects/ProjectsPageRouting.tsx'
import ProjectsPageContent from './projects/ProjectsPageContent.tsx'

export default function ProjectsPage({ currentName }) {
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
						<ProjectsPageRouting />

						<Routes>
							<Route
								path='flatiron/*'
								element={
									<ProjectsPageContent />
								}
							/>
							<Route
								path='personalProjects/*'
								element={
									<ProjectsPageContent />
								}
							/>
							<Route
								path='brandgage/*'
								element={
									<ProjectsPageContent />
								}
							/>
							<Route
								path='rocket/*'
								element={
									<ProjectsPageContent />
								}
							/>
							<Route
								path='atlas/*'
								element={
									<ProjectsPageContent />
								}
							/>
							<Route
								path='quest/*'
								element={
									<ProjectsPageContent />
								}
							/>
							<Route
								path='subvrsive/*'
								element={
									<ProjectsPageContent />
								}
							/>
						</Routes>
					</div>
				</div>
			</div>
		</div>
	)
}
