import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context';
import {validateForm} from '../actions';


export function ValidateFormButton(props :{
	disabled ?:boolean
} = {}) {
	//console.debug('ValidateFormButton props', props);

	const [_context, dispatch] = getEnonicContext();
	//console.debug('ValidateFormButton context', context);

	const {disabled = false} = props;

	return <Button
		color='yellow'
		disabled={disabled}
		onClick={() => dispatch(validateForm({visitAllFields: true}))}
		type='button'
	><Icon name='eye'/>Validate</Button>;
} // ValidateFormButton
