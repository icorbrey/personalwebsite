import React, { createContext, useState } from 'react'

import DisplayHistory from 'types/DisplayHistory'
import DisplayHistoryEntry from 'types/DisplayHistoryEntry'
import DisplayContextState from 'types/DisplayContextState'

import Welcome from 'components/Welcome'

const DisplayContext = createContext<DisplayContextState>({
	History: () => <> </>,
	addEntry: _ => { },
	clearHistory: () => { },
})

export const DisplayContextProvider = ({ children }: any) =>
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
		<DisplayContext.Provider value={ {
			History,
			addEntry,
			clearHistory,
		} }>
			{ children }
		</DisplayContext.Provider>
	)
}

export default DisplayContext
