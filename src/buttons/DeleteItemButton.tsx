import type {StrictButtonProps} from 'semantic-ui-react';


import {Button, Icon} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {deleteItem} from '../actions';


export function DeleteItemButton(props :Omit<
	StrictButtonProps,'onClick'|'type'
> & {
	// Required
	path :string
	// Optional
	index ?:number
}) {
	//console.debug('DeleteItemButton props', props);
	const {
		children = <Icon color='red' name='trash alternate outline'/>,
		icon = true,
		index = 0,
		path,
		...rest // disabled and more
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
