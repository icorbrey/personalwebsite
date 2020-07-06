import React, { ReactNode } from 'react'
import GruvboxColor from 'types/GruvboxColor'

interface GruvboxProps
{
	bg?: GruvboxColor
	fg?: GruvboxColor
	children?: ReactNode
	className?: string
}

export default function Gruvbox({ fg, bg, className, children }: GruvboxProps)
{
	const classes = getClassNames(fg, bg, className)

	return (
		<span className={ classes }>
			{ children }
		</span>
	)
}

const getClassNames = (fg?: GruvboxColor, bg?: GruvboxColor, className?: string) =>
	[toForeground(fg), toBackground(bg), className]
		.filter(x => x)
		.join(' ')

const toForeground = (color: GruvboxColor | undefined): string | undefined =>
	color && `gruvbox-${ color }`

const toBackground = (color: GruvboxColor | undefined): string | undefined =>
	color && `gruvbox-bg-${ color }`
