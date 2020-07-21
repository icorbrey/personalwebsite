import { Context, ReactElement, createContext } from 'react'
import { HasChildren } from 'types/Props'

type ContextPair<T> = [Context<T>, ({ children }: HasChildren) => ReactElement]

type ContextProviderCreator<T> = (_Context: Context<T>) => ({ children }: HasChildren) => ReactElement

const _createContext = <T>(creator: ContextProviderCreator<T>): ContextPair<T> =>
{
	const context = createContext<T>({} as T)
	const provider = creator(context)

	return [context, provider]
}

export default _createContext
