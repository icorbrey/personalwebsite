import React, { useContext } from 'react'

import { DisplayContext } from 'data/DisplayContext'

import TerminalWindow from 'components/TerminalWindow'
import InteractivePrompt from 'components/InteractivePrompt'

const Terminal = () =>
{
	const display = useContext(DisplayContext)

	return (
		<TerminalWindow>
			<display.History />
			<InteractivePrompt />
		</TerminalWindow>
	)
}

export default Terminal
