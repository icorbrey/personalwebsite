import { Dispatch, ReactNode, SetStateAction } from 'react'

export type History = ReactNode[]
export type HistoryEntry = ReactNode
export type HistorySetter = Dispatch<SetStateAction<ReactNode[]>>
export type HistoryRecorder = (entry: ReactNode) => void
