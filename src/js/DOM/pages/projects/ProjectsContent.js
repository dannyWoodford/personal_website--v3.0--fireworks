import React, { useMemo, useCallback } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

import { personalProjectsItemArray, brandgageItemArray, rocketItemArray, flatironItemArray, displayCategoryArray } from './ProjectsData'

export default function ProjectsContent({ updateDisplayCategory, updateDisplayItem, displayCategory, displayItem }) {
	const displayItemsFactory = useCallback(
		categoryArray => {
			return categoryArray.map(item => {
				return (
					<div className='item' key={item.name}>
						<Link className='item__border' onClick={() => updateDisplayItem(item)} to={`/projects/${item.category}/${item.hashName}`}>
							{item.thumbnail ? (
								<div className='item__thumbnail overview'>
									<img className='item__image add-padding' draggable='false' alt='' src={process.env.PUBLIC_URL + item.thumbnail} />
									<img alt='' className='item__hover__image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'} />
									<p className='item__title'>{item.thumbnailName}</p>
								</div>
							) : (
								<div className='item__thumbnail'>
									<p className='item__title'>{item.name}</p>
								</div>
							)}
						</Link>
					</div>
				)
			})
		},
		[updateDisplayItem]
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
		}
	}, [displayCategory, displayItemsFactory])

	return (
		<div>
			<h2 className='tab-switch-message'>Choose between these tabs to see some of the projects I've worked on</h2>

			<div className='tab-switch-container'>
				<div className={`item medium ${displayCategory === 'flatiron' ? 'item--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('flatiron')} to={'/projects/flatiron'}>
						<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/flatiron-logo.png'} />
						<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/flatiron-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['flatiron'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'personalProjects' ? 'item--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('personalProjects')} to={'/projects/personalProjects'}>
						<img
							className='item__image invert-on-hover'
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/personal-projects-logo.png'}
						/>
						<img alt='' className='item__image hover-image blur-on-hover' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/welcome-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['personalProjects'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'brandgage' ? 'item--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('brandgage')} to={'/projects/brandgage'}>
						<img className='item__image' draggable='false' alt='' src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/brandgage-logo.png'} />
						<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/brandgage-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['brandgage'].duration}</h3>
				</div>
				<div className={`item medium ${displayCategory === 'rocket' ? 'item--selected' : ''}`}>
					<Link className='item__border' onClick={() => updateDisplayCategory('rocket')} to={'/projects/rocket'}>
						<img
							className='item__image add-padding'
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + '/assets-by-page/home/thumbnails/rocket-logo.png'}
						/>
						<img alt='' className='item__image hover-image' src={process.env.PUBLIC_URL + '/assets-by-page/home/gifs/acme-gif.gif'} />
					</Link>
					<h3 className='duration'>{displayCategoryArray['rocket'].duration}</h3>
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
								youtube: { playerVars: { origin: 'https://www.youtube.com' } },
							}}
							playing={true}
							autoPlay={true}
							loop={true}
							controls={false}
							muted={true}
							width='100%'
							height='100%'
						/>
					</div>
					<div className='display-item-description'>
						<p>
							<span className='strong'>Name:</span> {displayItem.name}
						</p>
						<p style={{ display: displayItem.description ? 'block' : 'none' }}>
							<span className='strong'>Description:</span> {displayItem.description}
						</p>
						<p style={{ display: displayItem.language ? 'block' : 'none' }}>
							<span className='strong'>Built with:</span> {displayItem.language}
						</p>
						<div className='link-container'>
							<a href={displayItem.github} target='_blank' rel='noreferrer' className='link' style={{ display: displayItem.github ? 'block' : 'none' }}>
								Github
							</a>
							<span className='link-separator' style={{ display: displayItem.demo && displayItem.github ? 'block' : 'none' }}>
								|
							</span>
							<a href={displayItem.demo} target='_blank' rel='noreferrer' className='link' style={{ display: displayItem.demo ? 'block' : 'none' }}>
								View Demo
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
