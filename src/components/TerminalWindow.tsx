import React, { ReactNode } from 'react'

interface TerminalWindowProps
{
	children?: ReactNode
	onFocusTerminal: () => void
}

export default ({ onFocusTerminal: onMouseUp, children }: TerminalWindowProps) => (
	<pre className='term-text terminal' { ...{ onMouseUp } }>
		{ children }
	</pre>
)
