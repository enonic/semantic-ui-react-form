import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context.jsx';
import {sort} from '../actions.es';


export function SortButton(props) {
	//console.debug('SortButton props', props);
	const {
		disabled = false,
		children = <Icon color='blue' name='sort alphabet down'/>,
		path
	} = props;

	const [context, dispatch] = getEnonicContext();
	//console.debug('SortButton context', context);

	return <Button
		disabled={disabled}
		icon
		onClick={() => dispatch(sort({
			path
		}))}
		type='button'
	>{children}</Button>;
} // SortButton
