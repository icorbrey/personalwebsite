import React, { ReactElement, useReducer } from 'react'
import createStatefulContext from 'react-context-stateful'
import DisplayHistoryEntry from 'types/DisplayHistoryEntry'
import displayReducer, { addEntry, clearHistory } from 'data/DisplayContextReducer'

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
	const [history, dispatch] = useReducer(displayReducer, [<Welcome />])

	const History = () => (
		<>
			{ history.map((entry, key) => (
				<span { ...{ key } }>
					{ entry }
				</span>
			)) }
		</>
	)

	return (
		<Context.Provider value={ {
			History,
			addEntry: entry => dispatch(addEntry(entry)),
			clearHistory: () => dispatch(clearHistory()),
		} }>
			{ children }
		</Context.Provider>
	)
})
