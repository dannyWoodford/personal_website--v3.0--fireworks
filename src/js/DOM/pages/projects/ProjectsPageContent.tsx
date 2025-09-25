import React, { useMemo } from 'react'
import ReactPlayer from 'react-player'
import useProjectStore from '../../../../store/ProjectStore.tsx'

import CategorySwitchContainer from './components/CategorySwitchContainer.tsx'
import ProjectListContainer from './components/ProjectListContainer.tsx'
import CategoryInfoContainer from './components/CategoryInfoContainer.tsx'

export default function ProjectsPageContent() {
	const {
		projectsItemsObject,
		displayCategoriesObject,
		displayCategory,
		displayItem,
	} = useProjectStore()

	const displayItemFactory = useMemo(() => {
		let categoryArray = projectsItemsObject.filter(item => item.category === displayCategory)

		return categoryArray.map((item) => <ProjectListContainer key={item.hashName} item={item} />)
	}, [projectsItemsObject, displayCategory])

	// console.log('displayCategoriesObject[displayCategory]', displayCategoriesObject[displayCategory]?.hasCategoryInfo)

	return (
		<div className='projects-content'>
			{/* <h2 className='tab-switch-message'>Choose between these tabs to see some of the projects I've worked on</h2> */}

			<CategorySwitchContainer />

			<div className="display-item-panel">
				{displayCategoriesObject[displayCategory].hasCategoryInfo === true ? <CategoryInfoContainer /> : null}
				{/* {displayCategoriesObject[displayCategory].hasCategoryInfo ?? <CategoryInfoContainer /> } */}

				<div className='display-item'>
					{displayItem.type === 'image' ? (
						<div className='display-item-image'>
							<img className="display-item-target" alt='' src={process.env.PUBLIC_URL + displayItem.itemUrl} />
						</div>
					) : (
						<div className='display-item-video'>
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
					)}

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
			<div className={'display-items-container'}>{displayItemFactory}</div>
		</div>
	)
}
