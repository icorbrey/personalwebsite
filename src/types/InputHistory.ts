import { Dispatch, SetStateAction } from 'react'

export type InputHistory = InputHistoryEntry[]
export type InputHistoryConsumer = (history: InputHistory) => string[]
export type InputHistoryEntry = string
export type InputHistoryProvider = (inputHistory: InputHistory, setInputHistory: InputHistorySetter) => InputHistoryRecorder
export type InputHistoryRecorder = (entry: InputHistoryEntry) => void
export type InputHistorySetter = Dispatch<SetStateAction<InputHistory>>
