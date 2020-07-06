import React, { ReactNode } from 'react'
import GruvboxColor from 'types/GruvboxColor'

interface GruvboxProps
{
	bg?: GruvboxColor
	fg?: GruvboxColor
	children?: ReactNode
	className?: string
}

export default ({ fg, bg, className: inputClassName, children }: GruvboxProps) =>
{
	const className = getClassNames(fg, bg, inputClassName)

	return (
		<span { ...{ className } }>
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
