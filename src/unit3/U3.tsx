import { ListItem } from "./ListItem"
import { ListItem2 } from "./ListItem2"

export const U3 = () => {
	const users = [
		{ id: 1, name: 'andy' },
		{ id: 2, name: 'bobby' },
		{ id: 3, name: 'candy' },
	]
	return (
		<>
			<div>Unit 3 : list</div>
			<ul className="list">
				{users.map(el => (
					<ListItem key={el.id} id={el.id} name={el.name} />
				))}
			</ul>
			<ListItem2 
				items = {['HTML', 'CSS', 'Javascript']}
				render={ item => <span>{item}</span> }
			/>
			<ListItem2 
				items = {[4,5,6,7]}
				render={ item => <span>{item}</span> }
			/>
			<ListItem2 
				items={users}
				render={ ()=>{}}
			/>
		</>
	)
}
