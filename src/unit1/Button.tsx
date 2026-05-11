type ButtonProps = {
	label? : string
	onClick : ()=>void
	className? : string
}

// interface ButtonProps {
// 	label? : string
// 	onClick : ()=>void
// }

export const Button = ({label='show', onClick, className} : ButtonProps) => {
	const cn = `btn btn-primary ${className}`
	return (
		<button className={cn} onClick={onClick}>{label}</button>
	)
}
// export const Button = (props : ButtonProps) => {
// 	const {label='show', onClick} = props
// 	return (
// 		<button className="btn btn-primary" onClick={onClick}>{label}</button>
// 	)
// }
