import { Dispatch, ReactNode, SetStateAction } from 'react'

export type DisplayHistory = DisplayHistoryEntry[]
export type DisplayHistoryConsumer = (history: DisplayHistory) => ReactNode[]
export type DisplayHistoryEntry = ReactNode
export type DisplayHistoryProvider = (history: DisplayHistory, setHistory: DisplayHistorySetter) => DisplayHistoryRecorder
export type DisplayHistoryRecorder = (entry: DisplayHistoryEntry) => void
export type DisplayHistorySetter = Dispatch<SetStateAction<DisplayHistory>>
