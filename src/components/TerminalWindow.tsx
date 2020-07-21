import React, { useContext } from 'react'
import { TerminalWindowProps } from 'types/Props'

import { PromptContext } from 'data/PromptContext'

const TerminalWindow = ({ children }: TerminalWindowProps) =>
{
	const prompt = useContext(PromptContext)

	const onMouseUp = () => isTextSelected() || prompt.focus()

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
