import { Context, ReactElement, ReactNode, createContext } from 'react'

type ContextPair<T> = [Context<T>, ({ children }: ContextProviderProps) => ReactElement]

interface ContextProviderProps
{
	children?: ReactNode
}

type ContextProviderCreator<T> = (_Context: Context<T>) => ({ children }: ContextProviderProps) => ReactElement

const _createContext = <T>(creator: ContextProviderCreator<T>): ContextPair<T> =>
{
	const context = createContext<T>({} as T)
	const provider = creator(context)

	return [context, provider]
}

export default _createContext
