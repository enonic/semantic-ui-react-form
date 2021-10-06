import {Button, Icon} from 'semantic-ui-react';
import traverse from 'traverse';

import {getEnonicContext} from '../Context.jsx';
import {submit} from '../actions.es';


export function SubmitButton(props) {
	// console.debug('SubmitButton props', props);

	const [context, dispatch] = getEnonicContext();
	// console.debug('SubmitButton context', context);

	/* const changesArr = traverse(context.changes).reduce(function (acc, x) {
		if (this.notRoot && this.isLeaf && x === true) acc.push(x);
		return acc;
	}, []); */
	// console.dir(changesArr);

	// console.debug('SubmitButton context.errors', context.errors);
	const errorsArr = traverse(context.errors).reduce(function (acc, x) {
    	if (this.notRoot && this.isLeaf) acc.push(x);
    	return acc;
	}, []);
 	// console.dir(errorsArr);

	const {
		children = <>
			<Icon name='save'/>{errorsArr.length ? `${errorsArr.length} validation error${errorsArr.length > 1 ? 's' : ''}`: 'Submit'}
		</>,
		color = ({disabled, primary}) => disabled
			? 'red'
			: primary
				? null
				: 'green',
		disabled = !!errorsArr.length,/* || !changesArr.length*/
		primary = false,
		...rest
	} = props;

	return <Button
		{...rest}
		color={color({disabled, primary})}
		disabled={disabled}
		onClick={() => dispatch(submit())}
		primary={primary}
		type='submit'
	>{children}</Button>;
} // SubmitButton
