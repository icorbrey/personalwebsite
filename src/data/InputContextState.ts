import InputHistoryEntry from 'types/InputHistoryEntry'

export default interface InputContextState
{
	getNextEntry: () => InputHistoryEntry
	getPreviousEntry: () => InputHistoryEntry
	addEntry: (entry: InputHistoryEntry) => void
}
