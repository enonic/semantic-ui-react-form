import type {StrictButtonProps} from 'semantic-ui-react';


import {Button, Icon} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {insert} from '../actions';


export function InsertButton<Value>(props :Omit<
	StrictButtonProps,'onClick'|'type'
> & {
	// Required
	path :string
	value :Value
	// Optional
	index ?:number
}) {
	//console.debug('InsertButton props', props);
	const {
		// Required
		path,
		// Optional
		children = <Icon color='green' name='add'/>,
		disabled = false,
		icon = true,
		index = 0,
		//preClick = () => {},
		value
	} = props;

	const {dispatch} = getEnonicContext();
	//console.debug('InsertButton context', context);

	function onClick() {
		//preClick();
		/*console.debug('InsertButton onClick', {
			index,
			path,
			value
		});*/
		dispatch(insert({
			index,
			path,
			value
		}));
	}

	return <Button
		disabled={disabled}
		icon={icon}
		onClick={onClick}
		type='button'
	>{children}</Button>;
} // InsertButton
