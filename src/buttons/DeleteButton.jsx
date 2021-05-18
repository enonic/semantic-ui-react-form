import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context.jsx';
import {remove} from '../actions.es';


export function DeleteButton(props) {
	//console.debug('DeleteButton props', props);

	const [context, dispatch] = getEnonicContext();
	//console.debug('DeleteButton context', context);

	const {disabled = false} = props;

	return <Button
		color='red'
		disabled={disabled}
		onClick={() => dispatch(remove())}
		type='button'
	><Icon name='alternate outline trash'/>Delete</Button>;
} // DeleteButton
