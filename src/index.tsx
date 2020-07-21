import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'

import { InputContextProvider } from 'data/InputContext'
import { PromptContextProvider } from 'data/PromptContext'
import { DisplayContextProvider } from 'data/DisplayContext'

import App from './components/App'
import { CommandContextProvider } from 'data/CommandContext'

ReactDOM.render(
	<DisplayContextProvider>
		<PromptContextProvider>
			<InputContextProvider>
				<CommandContextProvider>
					<App />
				</CommandContextProvider>
			</InputContextProvider>
		</PromptContextProvider>
	</DisplayContextProvider>,
	document.getElementById('root')
)
