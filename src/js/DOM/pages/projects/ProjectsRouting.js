import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { personalProjectsItemArray, brandgageItemArray, rocketItemArray, flatironItemArray } from './ProjectsData'
import { transformNameToURLString, transformURLStringToName, extractWordsFromURL } from './ProjectsHelpers'

export default function ProjectsRouting({ updateDisplayCategory, updateDisplayItem, displayItem }) {
	let location = useLocation()

	useEffect(() => {
		const potentialPathName = displayItem => {
			return '/projects/' + displayItem.category + '/' + transformNameToURLString(displayItem.name)
		}

		if (location.pathname !== potentialPathName(displayItem)) {
			updatePath(location.pathname)
		}
	}, [location, displayItem])

	const updatePath = path => {
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
			updateDisplayItem(personalProjectsItemArray[0])
		} else if (pathArr[1] === 'flatiron') {
			updateDisplayCategory(pathArr[1])
			updateDisplayItem(flatironItemArray[0])
		}

		// ____ Change DisplayItem ______________________________________________________________
		if (!pathArr[2]) return

		let constructedName = transformURLStringToName(pathArr[2])

		if (pathArr[1] === 'brandgage') {
			let foundItem = brandgageItemArray.find(x => x.name === constructedName)
			updateDisplayItem(foundItem)
		} else if (pathArr[1] === 'rocket') {
			let foundItem = rocketItemArray.find(x => x.name === constructedName)
			updateDisplayItem(foundItem)
		} else if (pathArr[1] === 'personalProjects') {
			let foundItem = personalProjectsItemArray.find(x => x.name === constructedName)
			updateDisplayItem(foundItem)
		} else if (pathArr[1] === 'flatiron') {
			let foundItem = flatironItemArray.find(x => x.name === constructedName)
			updateDisplayItem(foundItem)
		}
	}

	return <></>
}
