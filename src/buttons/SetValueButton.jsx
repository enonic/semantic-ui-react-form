import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context.jsx';
import {setValue} from '../actions.es';


export function SetValueButton(props) {
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

	const [context, dispatch] = getEnonicContext();
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
