import { Dispatch, ReactNode, SetStateAction } from 'react'

export type DisplayHistoryEntry = ReactNode
export type DisplayHistory = DisplayHistoryEntry[]
export type DisplayHistorySetter = Dispatch<SetStateAction<DisplayHistory>>
export type DisplayHistoryRecorder = (entry: DisplayHistoryEntry) => void
