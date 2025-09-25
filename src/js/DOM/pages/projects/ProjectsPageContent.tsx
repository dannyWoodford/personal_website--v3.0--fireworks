import React, { useMemo, useCallback } from 'react'
import ReactPlayer from 'react-player'
import useProjectStore from '../../../../store/ProjectStore.tsx'

import CategorySwitchContainer from './components/CategorySwitchContainer.tsx'
import ProjectListContainer from './components/ProjectListContainer.tsx'

export default function ProjectsPageContent() {
	const {
		projectsItemsObject,
		displayCategoriesObject,
		displayCategory,
		displayItem,
	} = useProjectStore()

	// No guard needed; displayItem is guaranteed by the store type
	const displayItemsFactory = useCallback(
		(categoryArray) => {
			return categoryArray.map((item) => <ProjectListContainer key={item.name} item={item} />)
		},
		[]
	)

	const categoryItems = useMemo(
		() => projectsItemsObject.filter(item => item.category === displayCategory),
		[projectsItemsObject, displayCategory]
	)

	const displayItems = useMemo(() => displayItemsFactory(categoryItems), [categoryItems, displayItemsFactory])

	return (
		<div className='projects-content'>
			{/* <h2 className='tab-switch-message'>Choose between these tabs to see some of the projects I've worked on</h2> */}

			<CategorySwitchContainer />

			<div className={`display-item-panel ${displayCategoriesObject[displayCategory].hasTabInfo ? 'has-tab-info' : 'has-no-tab-info'}`}>
				<div className='display-item tab-info'>
					<h1 className='tab-info-name'>{displayCategoriesObject[displayCategory].name}</h1>
					<div className='tab-info-details'>
						<div className='tab-info-columns'>
							<div className={`tab-info-flex ${displayCategoriesObject[displayCategory].title ? '' : 'no-title'}`}>
								<p className='strong'>Title:</p>
								<p>{displayCategoriesObject[displayCategory].title}</p>
							</div>
							<div className='tab-info-flex'>
								<p className='strong'>Location:</p>
								<p>{displayCategoriesObject[displayCategory].location}</p>
							</div>
						</div>
						<div>
							<div className='tab-info-flex'>
								<p className='strong'>Website:</p>
								<a href={displayCategoriesObject[displayCategory].website} target='_blank' rel='noreferrer' className='link'>
									{displayCategoriesObject[displayCategory].websiteDisplayName}
								</a>
							</div>
						</div>
					</div>
					<div className='tab-info-description'>{displayCategoriesObject[displayCategory].description}</div>
				</div>
				
				<div className='display-item'>
					<div className='display-item-image' style={{ display: displayItem.type === 'image' ? 'block' : 'none' }}>
						<img
							className={`display-item-target ${displayCategoriesObject[displayCategory].hasTabInfo ? 'has-tab-info' : ''}`}
							alt=''
							src={process.env.PUBLIC_URL + displayItem.itemUrl}
						/>
					</div>
					<div className='display-item-video' style={{ display: displayItem.type === 'video' ? 'block' : 'none' }}>
						<ReactPlayer
							className='react-player'
							url={process.env.PUBLIC_URL + displayItem.itemUrl}
							config={{
								file: {
									attributes: {
										crossOrigin: 'true',
									},
								},
								youtube: {
									playerVars: { origin: 'https://www.youtube.com' },
								},
							}}
							playing={true}
							autoPlay={true}
							loop={true}
							controls={true}
							muted={true}
							width='100%'
							height='100%'
						/>
					</div>
					<div className='display-item-info'>
						<div className='display-item-header'>
							<h2 className='display-item-name'>
								<span className='display-item-name-main'>{displayItem.name}</span>
								{displayItem.prefix && <span className='display-item-prefix'>{displayItem.prefix}</span>}
							</h2>
						</div>

						{displayItem.description && (
							<div className='display-item-description'>
								{displayItem.description}
								{displayItem.message && <p className='display-item-message'>{displayItem.message}</p>}
							</div>
						)}

						{displayItem.language && (
							<section className='display-item-tools'>
								<h3>Tech Stack</h3>
								<p>{displayItem.language}</p>
							</section>
						)}

						{(displayItem.demo || displayItem.github) && (
							<nav className='link-container'>
								{displayItem.github && (
									<a href={displayItem.github} target='_blank' rel='noreferrer' className='link'>
										GitHub
									</a>
								)}
								{displayItem.demo && displayItem.github && <span className='link-separator'>|</span>}
								{displayItem.demo && (
									<a href={displayItem.demo} target='_blank' rel='noreferrer' className='link'>
										Demo
									</a>
								)}
							</nav>
						)}
					</div>
				</div>
			</div>
			<div className={'display-items-container'}>{displayItems}</div>
		</div>
	)
}
