import React, { RefObject } from 'react'
import Prompt from './Prompt'

export interface PromptLineProps
{
	currentDir?: string
	success?: boolean
	inputRef: RefObject<HTMLInputElement>
}

export default ({ success, currentDir, inputRef }: PromptLineProps) => (
	<span className='prompt-line'>
		<Prompt { ...{ success, dir: currentDir } } />
		<input autoFocus className='prompt-input' ref={ inputRef } />
	</span>
)
