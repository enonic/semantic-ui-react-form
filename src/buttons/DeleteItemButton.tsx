import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context';
import {deleteItem} from '../actions';


export function DeleteItemButton(props :{
	// Required
	path :string
	// Optional
	children ?:React.ReactNode
	icon ?:boolean
	index ?:number
}) {
	//console.debug('DeleteItemButton props', props);
	const {
		children = <Icon color='red' name='trash alternate outline'/>,
		//disabled = false, // covered by ...rest
		icon = true,
		index = 0,
		path,
		...rest
	} = props;

	const [_context, dispatch] = getEnonicContext();
	//console.debug('DeleteItemButton context', context);

	return <Button
		{...rest}
		icon={icon}
		onClick={() => dispatch(deleteItem({
			index,
			path
		}))}
		type='button'
	>{children}</Button>;
} // DeleteItemButton
