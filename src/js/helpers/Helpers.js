export const extractWordsFromURL = url => {
	const regex = /\/([^/]+)/g
	const matches = [...url.matchAll(regex)]

	const words = matches.map(match => match[1])
	return words
}
