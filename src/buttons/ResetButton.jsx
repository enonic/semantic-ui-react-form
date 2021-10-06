import {Button, Icon} from 'semantic-ui-react';
import traverse from 'traverse';

import {getEnonicContext} from '../Context.jsx';
import {reset} from '../actions.es';


export function ResetButton(props) {
	//console.debug('ResetButton props', props);

	const [context, dispatch] = getEnonicContext();
	//console.debug('ResetButton context', context);

	const leaves = traverse(context.changes).reduce(function (acc, x) {
    	if (this.notRoot && this.isLeaf && x === true) acc.push(x);
    	return acc;
	}, []);
 	//console.dir(leaves);

	const {
		children=<><Icon name='history'/>Reset</>,
		color = ({
			defaultColor,
			disabled,
			primary,
			secondary
		}) => (disabled || secondary || primary)
			? null
			: defaultColor,
		disabled = !leaves.length,
		primary = false,
		secondary = false,
		...rest
	} = props;

	return <Button
		{...rest}
		color={color({
			defaultColor: 'olive',
			disabled,
			primary,
			secondary
		})}
		disabled={disabled}
		onClick={() => dispatch(reset())}
		primary={primary}
		secondary={secondary}
		type='reset'
	>{children}</Button>;
} // ResetButton
