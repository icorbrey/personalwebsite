import React, { createRef, createContext, ReactNode, useState } from 'react'

import InputRef from 'types/InputRef'
import PromptContextState from 'types/PromptContextState'

const PromptContext = createContext<PromptContextState>({
	ref: createRef(),
	focusPromptInput: () => { }
})

interface PromptContextProviderProps
{
	children?: ReactNode
}

export const PromptContextProvider = ({ children }: PromptContextProviderProps) =>
{
	const [ref] = useState<InputRef>(createRef())

	const focusPromptInput = () => ref?.current?.focus()

	return (
		<PromptContext.Provider value={ {
			ref,
			focusPromptInput
		} }>
			{ children }
		</PromptContext.Provider>
	)
}

export default PromptContext
