import DisplayHistory from 'types/DisplayHistory'
import DisplayHistoryEntry from 'types/DisplayHistoryEntry'

enum Dispatch
{
    AddEntry = "@DisplayContext/AddEntry",
    ClearHistory = "@DisplayContext/ClearHistory",
}

type AddEntryAction = {
    type: typeof Dispatch.AddEntry
    payload: DisplayHistoryEntry
}

type ClearHistoryAction = {
    type: typeof Dispatch.ClearHistory
}

type Action = AddEntryAction | ClearHistoryAction

export const addEntry = (entry: DisplayHistoryEntry): Action => ({
    type: Dispatch.AddEntry,
    payload: entry
})

export const clearHistory = (): Action => ({
    type: Dispatch.ClearHistory,
})

export default (state: DisplayHistory, action: Action): DisplayHistory =>
{
    switch (action.type)
    {
        case Dispatch.AddEntry:
            return [...state, action.payload]

        case Dispatch.ClearHistory:
            return []
    }
}
