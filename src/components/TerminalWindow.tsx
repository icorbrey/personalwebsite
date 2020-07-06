import React, { ReactNode } from 'react'

interface TerminalWindowProps
{
	children?: ReactNode
	onFocusTerminal: () => void
}

export default function TerminalWindow({ onFocusTerminal: onMouseUp, children }: TerminalWindowProps)
{
	return (
		<pre className='term-text terminal' { ...{ onMouseUp } }>
			{ children }
		</pre>
	)
}
