import { createRoot } from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import 'react-tooltip/dist/react-tooltip.css'
import * as serviceWorker from './serviceWorker'

import App from './js/App'
import ErrorPage from './js/ErrorPage'

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<App />}
			// loader={rootLoader}
			// action={rootAction}
			errorElement={<ErrorPage />}></Route>
	)
)
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <App />,
// 		errorElement: <ErrorPage />,
// 	},
// ])

root.render(<RouterProvider router={router} />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
