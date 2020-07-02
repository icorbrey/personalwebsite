import React, { ReactNode } from 'react'
import InputRef from '../types/InputRef'

interface TerminalWindowProps
{
	children?: ReactNode
	inputRef: InputRef
}

export default ({ inputRef, children }: TerminalWindowProps) => (
	<pre className='term-text terminal' onMouseUp={ focusInputIfNotSelected(inputRef) }>
		{ children }
	</pre>
)

const focusInputIfNotSelected = (ref: InputRef) => () =>
	window?.getSelection()?.toString() || ref?.current?.focus()
