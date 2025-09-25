import React from 'react'
import useProjectStore, { type ProjectsItem } from '../../../../../store/ProjectStore.tsx'
import { Link } from 'react-router-dom'

export default function ProjectListContainer({ item }: {item: ProjectsItem}) {
	const displayItemHash = useProjectStore(s => s.displayItem.hashName)
	const updateDisplayItem = useProjectStore(s => s.updateDisplayItem)

	return (
		<div className={`item ${item.hashName === displayItemHash ? 'item--selected' : ''}`}>
			<Link className='item__border' onClick={() => updateDisplayItem(item)} to={`/projects/${item.category}/${item.hashName}`}>
				{item.thumbnailName ? (
					<div className='item__thumbnail overview'>
						<img
							className={`item__image add-padding ${item.thumbnailHover ? 'logo-extra-padding' : ''}`}
							draggable='false'
							alt=''
							src={process.env.PUBLIC_URL + item.thumbnail}
						/>
						<img
							alt=''
							className={`item__hover__image ${item.thumbnailHover ? 'subvrsive-hover-thumbnails' : ''}`}
							src={
								item.thumbnailHover ? process.env.PUBLIC_URL + item.thumbnailHover : process.env.PUBLIC_URL + '/assets-by-page/home/gifs/space-gif.gif'
							}
						/>
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
}
