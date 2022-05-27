import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context';
import {remove} from '../actions';


export function DeleteButton(props :{
	disabled ?:boolean
} = {}) {
	//console.debug('DeleteButton props', props);

	const [_context, dispatch] = getEnonicContext();
	//console.debug('DeleteButton context', context);

	const {disabled = false} = props;

	return <Button
		color='red'
		disabled={disabled}
		onClick={() => dispatch(remove())}
		type='button'
	><Icon name='trash alternate outline'/>Delete</Button>;
} // DeleteButton
