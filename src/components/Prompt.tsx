import React from 'react'

export interface PromptProps
{
	success?: boolean,
	dir?: string,
}

export default ({ success = true, dir = '~' }: PromptProps) => (
	<span>
		<span className={ getSuccessClassName(success) }>
			corbrey
		</span>
		&nbsp;
		<span className='gruvbox-aqua'>
			{ dir }
		</span>
		&nbsp;
	</span>
)

const getSuccessClassName = (success: boolean) =>
	`gruvbox-${ success ? 'green' : 'red' }`
