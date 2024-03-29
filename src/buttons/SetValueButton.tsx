import type {StrictButtonProps} from 'semantic-ui-react';


import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context';
import {setValue} from '../actions';


export function SetValueButton<Value>(props :Omit<
	StrictButtonProps,'onClick'|'type'
> & {
	// Required
	path :string
	value :Value
}) {
	//console.debug('SetValueButton props', props);
	const {
		children = <Icon color='green' name='add'/>,
		//disabled = false, // Covered by ...rest
		icon = true,
		path,
		value,
		...rest
	} = props;
	//console.debug('SetValueButton path', path, 'value', value);

	const {dispatch} = getEnonicContext();
	//console.debug('SetValueButton context', context);

	return <Button
		{...rest}
		icon={icon}
		onClick={() => {
			/*console.debug('SetValueButton onClick', {
				path,
				value
			});*/
			dispatch(setValue({
				path,
				value
			}));
		}}
		type='button'
	>{children}</Button>;
} // function SetValueButton
