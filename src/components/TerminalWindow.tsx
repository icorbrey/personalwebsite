import React, { useContext, ReactNode } from 'react'

import PromptContext from 'data/PromptContext'

interface TerminalWindowProps
{
	children?: ReactNode
}

const TerminalWindow = ({ children }: TerminalWindowProps) =>
{
	const { focusPromptInput } = useContext(PromptContext)

	const onMouseUp = () => isTextSelected() || focusPromptInput()

	return (
		<pre { ...{
			children,
			onMouseUp,
			className: 'term-text terminal',
		} } />
	)
}

const isTextSelected = () =>
	window?.getSelection()?.toString()

export default TerminalWindow
