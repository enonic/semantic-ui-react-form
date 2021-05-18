import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context.jsx';
import {deleteItem} from '../actions.es';


export function DeleteItemButton(props) {
	//console.debug('DeleteItemButton props', props);
	const {
		children = <Icon color='red' name='alternate outline trash'/>,
		//disabled = false, // covered by ...rest
		icon = true,
		index = 0,
		path,
		...rest
	} = props;

	const [context, dispatch] = getEnonicContext();
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
