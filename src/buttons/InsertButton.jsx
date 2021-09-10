import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context.jsx';
import {insert} from '../actions.es';


export function InsertButton(props) {
	//console.debug('InsertButton props', props);
	const {
		children = <Icon color='green' name='add'/>,
		disabled = false,
		icon = true,
		index = 0,
		path,
		//preClick = () => {},
		value
	} = props;

	const [context, dispatch] = getEnonicContext();
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
