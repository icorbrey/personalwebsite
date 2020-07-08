import { ReactElement } from 'react'
import DisplayHistoryEntry from 'types/DisplayHistoryEntry'

export default interface DisplayContextState
{
	History: () => ReactElement
	clearHistory: () => void
	addEntry: (entry: DisplayHistoryEntry) => void
}
