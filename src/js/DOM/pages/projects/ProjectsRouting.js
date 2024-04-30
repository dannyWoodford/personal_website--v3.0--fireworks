import { useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { personalProjectsItemArray, brandgageItemArray, rocketItemArray, flatironItemArray, atlasItemArray, questItemArray } from './ProjectsData'
import { extractWordsFromURL } from '../../../helpers/Helpers'

export default function ProjectsRouting({ updateDisplayCategory, updateDisplayItem, displayItem }) {
	let location = useLocation()

	const updatePath = useCallback(
		path => {
			let pathArr = extractWordsFromURL(path)

			// ____ Change DisplayCategory ______________________________________________________________
			if (pathArr[1] === 'brandgage') {
				updateDisplayCategory(pathArr[1])
				updateDisplayItem(brandgageItemArray[0])
			} else if (pathArr[1] === 'rocket') {
				updateDisplayCategory(pathArr[1])
				updateDisplayItem(rocketItemArray[1])
			} else if (pathArr[1] === 'personalProjects') {
				updateDisplayCategory(pathArr[1])
				updateDisplayItem(personalProjectsItemArray[1])
			} else if (pathArr[1] === 'flatiron') {
				updateDisplayCategory(pathArr[1])
				updateDisplayItem(flatironItemArray[0])
			} else if (pathArr[1] === 'atlas') {
				updateDisplayCategory(pathArr[1])
				updateDisplayItem(atlasItemArray[0])
			} else if (pathArr[1] === 'quest') {
				updateDisplayCategory(pathArr[1])
				updateDisplayItem(questItemArray[1])
			}

			// ____ Change DisplayItem ______________________________________________________________
			if (!pathArr[2]) return

			if (pathArr[1] === 'brandgage') {
				let foundItem = brandgageItemArray.find(item => item.hashName === pathArr[2])
				updateDisplayItem(foundItem)
			} else if (pathArr[1] === 'rocket') {
				let foundItem = rocketItemArray.find(item => item.hashName === pathArr[2])
				updateDisplayItem(foundItem)
			} else if (pathArr[1] === 'personalProjects') {
				let foundItem = personalProjectsItemArray.find(item => item.hashName === pathArr[2])
				updateDisplayItem(foundItem)
			} else if (pathArr[1] === 'flatiron') {
				let foundItem = flatironItemArray.find(item => item.hashName === pathArr[2])
				updateDisplayItem(foundItem)
			} else if (pathArr[1] === 'atlas') {
				let foundItem = atlasItemArray.find(item => item.hashName === pathArr[2])
				updateDisplayItem(foundItem)
			} else if (pathArr[1] === 'quest') {
				let foundItem = questItemArray.find(item => item.hashName === pathArr[2])
				updateDisplayItem(foundItem)
			}
		},
		[updateDisplayCategory, updateDisplayItem]
	)

	useEffect(() => {
		const potentialPathName = displayItem => {
			return '/projects/' + displayItem.category + '/' + displayItem.hashName
		}

		if (location.pathname !== potentialPathName(displayItem)) {
			updatePath(location.pathname)
		}
	}, [location])
}
