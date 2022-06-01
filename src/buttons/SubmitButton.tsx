import type {StrictButtonProps} from 'semantic-ui-react';


import {Button, Icon} from 'semantic-ui-react';
import traverse from 'traverse';
import {getEnonicContext} from '../Context';
import {submit} from '../actions';


export function SubmitButton(props :{
	children ?:React.ReactNode
	color ?:(params :{
		disabled :boolean
		primary :boolean
	}) => StrictButtonProps['color']|null
	disabled ?:boolean
	primary ?:boolean
}) {
	// console.debug('SubmitButton props', props);

	const {dispatch, state} = getEnonicContext();
	// console.debug('SubmitButton context', context);

	/* const changesArr = traverse(context.changes).reduce(function (acc, x) {
		if (this.notRoot && this.isLeaf && x === true) acc.push(x);
		return acc;
	}, []); */
	// console.dir(changesArr);

	// console.debug('SubmitButton context.errors', context.errors);
	const errorsArr = traverse(state.errors).reduce(function (acc, x) {
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
