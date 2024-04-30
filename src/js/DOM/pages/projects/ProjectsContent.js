import React, { useMemo, useCallback } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

import { personalProjectsItemArray, brandgageItemArray, rocketItemArray, atlasItemArray, questItemArray, flatironItemArray, displayCategoryArray } from './ProjectsData'

export default function ProjectsContent({ updateDisplayCategory, updateDisplayItem, displayCategory, displayItem }) {
	const displayItemsFactory = useCallback(
		categoryArray => {
			return categoryArray.map(item => {
				return (
					<div key={item.name} className={`item ${item.hashName === displayItem.hashName ? 'item--selected' : ''}`}>
						<Link className='item__border' onClick={() => updateDisplayItem(item)} to={`/projects/${item.category}/${item.hashName}`}>
							{item.thumbnailName ? (
								<div className='item__thumbnail overview'>
									<img className='item__image add-padding' draggable='false' alt='' src={process.env.PUBLIC_URL + item.thumbnail} />
									<img alt='' className='item__hover__image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
									<p className='item__title item__title__thumbnail__name'>{item.thumbnailName}</p>
								</div>
							) : (
								<div className='item__thumbnail normal'>
									{item.thumbnail && (
										<img
											className={`item__background__image ${item.isFeature ? 'is-feature' : ''}`}
											draggable='false'
											alt=''
											src={process.env.PUBLIC_URL + item.thumbnail}
										/>
									)}
									<p className='item__title'>{item.name}</p>
								</div>
							)}
						</Link>
					</div>
				)
			})
		},
		[updateDisplayItem, displayItem]
	)

	const displayItems = useMemo(() => {
		if (displayCategory === 'brandgage') {
			return displayItemsFactory(brandgageItemArray)
		} else if (displayCategory === 'rocket') {
			return displayItemsFactory(rocketItemArray)
		} else if (displayCategory === 'personalProjects') {
			return displayItemsFactory(personalProjectsItemArray)
		} else if (displayCategory === 'flatiron') {
			return displayItemsFactory(flatironItemArray)
		} else if (displayCategory === 'atlas') {
			return displayItemsFactory(atlasItemArray)
		} else if (displayCategory === 'quest') {
			return displayItemsFactory(questItemArray)
		}
	}, [displayCategory, displayItemsFactory])
	
	return (
		<div>
			{/* <h2 className='tab-switch-message'>Choose between these tabs to see some of the projects I've worked on</h2> */}

			<div className='tab-switch-container'>
				<div className={`item medium ${displayCategory === 'flatiron' ? 'category--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('flatiron')} to={'/projects/flatiron'}>
						<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/flatiron-logo.png'} />
						<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/flatiron-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['flatiron'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'personalProjects' ? 'category--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('personalProjects')} to={'/projects/personalProjects'}>
						<img
							className='item__image invert-on-hover'
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/personal-projects-logo.png'}
						/>
						<img alt='' className='item__image hover-image blur-on-hover' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/welcome-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['personalProjects'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'brandgage' ? 'category--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('brandgage')} to={'/projects/brandgage'}>
						<img
							className='item__image'
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/brandgage-logo.png'}
						/>
						<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/brandgage-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['brandgage'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'rocket' ? 'category--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('rocket')} to={'/projects/rocket'}>
						<img
							className='item__image add-padding'
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/rocket-logo.png'}
						/>
						<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/acme-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['rocket'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'atlas' ? 'category--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('atlas')} to={'/projects/atlas'}>
						<img
							className='item__image add-padding back-drop'
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/atlas-resize.png'}
						/>
						<img alt='' className='item__image hover-image blur-on-hover-low' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/atlas-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['atlas'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'quest' ? 'category--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('quest')} to={'/projects/quest'}>
						<img
							className='item__image add-padding back-drop-quest'
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/projects/quest-logo.png'}
						/>
						<img alt='' className='item__image hover-image blur-on-hover-low' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/city-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['quest'].duration}</h3>
				</div>
			</div>

			<div className={`display-item-panel ${displayCategoryArray[displayCategory].hasTabInfo ? 'has-tab-info' : 'has-no-tab-info'}`}>
				<div className='display-item tab-info'>
					<h1 className='tab-info-name'>{displayCategoryArray[displayCategory].name}</h1>
					<div className='tab-info-details'>
						<div className='tab-info-columns'>
							<div className={`tab-info-flex ${displayCategoryArray[displayCategory].title ? '' : 'no-title'}`}>
								<p className='strong'>Title:</p>
								<p>{displayCategoryArray[displayCategory].title}</p>
							</div>
							<div className='tab-info-flex'>
								<p className='strong'>Location:</p>
								<p>{displayCategoryArray[displayCategory].location}</p>
							</div>
						</div>
						<div>
							<div className='tab-info-flex'>
								<p className='strong'>Website:</p>
								<a href={displayCategoryArray[displayCategory].website} target='_blank' rel='noreferrer' className='link'>
									{displayCategoryArray[displayCategory].websiteDisplayName}
								</a>
							</div>
						</div>
					</div>
					<div>{displayCategoryArray[displayCategory].description}</div>
				</div>
				<div className='display-item'>
					<div className='display-item-image' style={{ display: displayItem.type === 'image' ? 'block' : 'none' }}>
						<img
							className={`display-item-target ${displayCategoryArray[displayCategory].hasTabInfo ? 'has-tab-info' : ''}`}
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
						<p className='display-item-name'>
							<span className='display-item-name-main'>{displayItem.name}</span>
							{displayItem.prefix && <span className='display-item-prefix'>{displayItem.prefix}</span>}
						</p>
						<p className='display-item-description' style={{ display: displayItem.description ? 'block' : 'none' }}>
							{displayItem.description}
						</p>
						<p className='display-item-tools' style={{ display: displayItem.language ? 'block' : 'none' }}>
							{displayItem.language}
						</p>
						<div className='link-container' style={{ display: displayItem.demo || displayItem.github ? 'flex' : 'none' }}>
							<a href={displayItem.github} target='_blank' rel='noreferrer' className='link' style={{ display: displayItem.github ? 'block' : 'none' }}>
								Github
							</a>
							<span className='link-separator' style={{ display: displayItem.demo && displayItem.github ? 'block' : 'none' }}>
								|
							</span>
							<a href={displayItem.demo} target='_blank' rel='noreferrer' className='link' style={{ display: displayItem.demo ? 'block' : 'none' }}>
								Demo
							</a>
						</div>
						<p className='display-item-message' style={{ display: displayItem.message ? 'block' : 'none' }}>
							{displayItem.message}
						</p>
					</div>
				</div>
			</div>
			<div className={'display-items-container'}>{displayItems}</div>
		</div>
	)
}
