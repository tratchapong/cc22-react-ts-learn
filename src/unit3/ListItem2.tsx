import { ReactNode } from "react"

interface ListItem2Props<T> {
	items: T[]
	render: (item: T) => ReactNode
}

export const ListItem2 = <T,>(props: ListItem2Props<T>) => {
	return (
		<div className="bg-amber-200 ">
			<ul className="list">
			{ props.items.map( (el,idx) => (
				<li key={idx} className="list-row">{props.render(el)}</li>
			))}
			</ul>
		</div>
	)
}
