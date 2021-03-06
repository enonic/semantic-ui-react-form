import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context.jsx';
import {validateForm} from '../actions.es';


export function ValidateFormButton(props) {
	//console.debug('ValidateFormButton props', props);

	const [context, dispatch] = getEnonicContext();
	//console.debug('ValidateFormButton context', context);

	const {disabled = false} = props;

	return <Button
		color='yellow'
		disabled={disabled}
		onClick={() => dispatch(validateForm({visitAllFields: true}))}
		type='button'
	><Icon name='eye'/>Validate</Button>;
} // ValidateFormButton
