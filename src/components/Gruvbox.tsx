import React, { ReactNode } from 'react'

export type GruvboxColor = 'background' | 'foreground' | 'red' | 'green'
	| 'yellow' | 'blue' | 'purple' | 'aqua' | 'gray'

export interface GruvboxProps
{
	bg?: GruvboxColor
	fg?: GruvboxColor
	children?: ReactNode
	className?: string
}

export const Gruvbox = ({ fg, bg, className, children }: GruvboxProps) => (
	<span className={ getClassNames(fg, bg, className) }>
		{ children }
	</span>
)

const getClassNames = (fg?: GruvboxColor, bg?: GruvboxColor, className?: string) =>
	[toForeground(fg), toBackground(bg), className]
		.filter(x => x)
		.join(' ')

const toForeground = (color: GruvboxColor | undefined): string | undefined =>
	color && `gruvbox-${ color }`

const toBackground = (color: GruvboxColor | undefined): string | undefined =>
	color && `gruvbox-bg-${ color }`
