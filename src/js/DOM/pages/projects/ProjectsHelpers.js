export const transformNameToURLString = (inputString) => {
	// Convert uppercase letters to lowercase
	const lowercasedString = inputString.toLowerCase()

	// Replace spaces with dashes
	const transformedString = lowercasedString.replace(/ /g, '-')

	return transformedString
}

export const transformURLStringToName = inputString => {
	// Split the input string into an array of words
	const words = inputString.split('-')

	// Capitalize the first letter of each word and join them with spaces
	const transformedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
	const transformedString = transformedWords.join(' ')

	return transformedString
}

export const extractWordsFromURL = url => {
	const regex = /\/([^/]+)/g
	const matches = [...url.matchAll(regex)]

	const words = matches.map(match => match[1])
	return words
}
