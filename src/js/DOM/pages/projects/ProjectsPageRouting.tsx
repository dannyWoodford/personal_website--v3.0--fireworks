import { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import useProjectStore from '../../../../store/ProjectStore.tsx'
import { extractWordsFromURL } from '../../../helpers/Helpers'

export default function ProjectsPageRouting() {
	let location = useLocation()

	const {
		projectsItemsObject,
		updateDisplayCategory,
		updateDisplayItem,
		displayItem,
	} = useProjectStore()

	const updatePath = useCallback(
		path => {
			let pathArr = extractWordsFromURL(path)

			// ____ Change DisplayCategory ______________________________________________________________
			const category = pathArr[1]
			if (category) {
				updateDisplayCategory(category)
				const itemsForCategory = projectsItemsObject.filter(item => item.category === category)
				const defaultIndexMap: { [key: string]: number } = {
					brandgage: 0,
					rocket: 1,
					personalProjects: 1,
					flatiron: 0,
					atlas: 0,
					quest: 1,
					subvrsive: 0,
				}
				const defaultIndex = defaultIndexMap[category] ?? 0
				if (itemsForCategory.length > 0) {
					const safeIndex = defaultIndex < itemsForCategory.length ? defaultIndex : 0
					updateDisplayItem(itemsForCategory[safeIndex])
				}
			}

			// ____ Change DisplayItem ______________________________________________________________
			if (!pathArr[2]) return

			const categoryForFind = pathArr[1]
			const hash = pathArr[2]
			if (categoryForFind && hash) {
				const foundItem = projectsItemsObject.find(item => item.category === categoryForFind && item.hashName === hash)
				if (foundItem) updateDisplayItem(foundItem)
			}
		},
		[updateDisplayCategory, updateDisplayItem, projectsItemsObject]
	)

	useEffect(() => {
		const potentialPathName = (item: any) => {
			return '/projects/' + item.category + '/' + item.hashName
		}

		if (displayItem && location.pathname !== potentialPathName(displayItem)) {
			updatePath(location.pathname)
		}
	}, [location, displayItem, updatePath])

	return null
}
