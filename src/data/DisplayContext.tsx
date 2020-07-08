import createContext from 'utils/createContext'
import DisplayHistory from 'types/DisplayHistory'
import React, { useState, ReactElement } from 'react'
import DisplayHistoryEntry from 'types/DisplayHistoryEntry'

import Welcome from 'components/Welcome'

interface State
{
	clearHistory: () => void
	History: () => ReactElement
	addEntry: (entry: DisplayHistoryEntry) => void
}

export const [
	DisplayContext,
	DisplayContextProvider
] = createContext<State>(Context => ({ children }) =>
{
	const [history, setHistory] = useState<DisplayHistory>([<Welcome />])

	const History = () => (
		<>
			{ history.map(entry => <span>{ entry }</span>) }
		</>
	)

	const addEntry = (entry: DisplayHistoryEntry) =>
		setHistory([...history, entry])

	const clearHistory = () => setHistory([])

	return (
		<Context.Provider value={ {
			History,
			addEntry,
			clearHistory,
		} }>
			{ children }
		</Context.Provider>
	)
})
