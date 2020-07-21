import DisplayHistory from 'types/DisplayHistory'
import React, { useState, ReactElement } from 'react'
import createStatefulContext from 'react-context-stateful'
import DisplayHistoryEntry from 'types/DisplayHistoryEntry'

import Welcome from 'components/Welcome'

interface DisplayState
{
	clearHistory: () => void
	History: () => ReactElement
	addEntry: (entry: DisplayHistoryEntry) => void
}

export const [
	DisplayContext,
	DisplayContextProvider
] = createStatefulContext<DisplayState>(Context => ({ children }) =>
{
	const [history, setHistory] = useState<DisplayHistory>([<Welcome />])

	const History = () => (
		<>
			{ history.map((entry, key) => (
				<span { ...{ key } }>
					{ entry }
				</span>
			)) }
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
