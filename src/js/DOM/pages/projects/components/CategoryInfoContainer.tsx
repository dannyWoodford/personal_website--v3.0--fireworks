import React from 'react'
import useProjectStore from '../../../../../store/ProjectStore.tsx'

export default function CategoryInfoContainer() {
	const displayCategory = useProjectStore(s => s.displayCategory)
	const displayCategoriesObject = useProjectStore(s => s.displayCategoriesObject)

	return (
		<div className='category-info'>
			<h1 className='category-info-name'>{displayCategoriesObject[displayCategory].name}</h1>
			<div className='category-info-details'>
				<div className='category-info-columns'>
					<div className={`category-info-flex ${displayCategoriesObject[displayCategory].title ? '' : 'no-title'}`}>
						<p className='strong'>Title:</p>
						<p>{displayCategoriesObject[displayCategory].title}</p>
					</div>
					<div className='category-info-flex'>
						<p className='strong'>Location:</p>
						<p>{displayCategoriesObject[displayCategory].location}</p>
					</div>
				</div>
				<div>
					<div className='category-info-flex'>
						<p className='strong'>Website:</p>
						<a href={displayCategoriesObject[displayCategory].website} target='_blank' rel='noreferrer' className='link'>
							{displayCategoriesObject[displayCategory].websiteDisplayName}
						</a>
					</div>
				</div>
			</div>
			<div className='category-info-description'>{displayCategoriesObject[displayCategory].description}</div>
		</div>
	)
}
