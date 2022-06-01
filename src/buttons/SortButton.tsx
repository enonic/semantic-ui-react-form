import {Button, Icon} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {sort} from '../actions';


export function SortButton(props :{
	// Required
	path :string
	// Optional
	children ?:React.ReactNode
	disabled ?:boolean
}) {
	//console.debug('SortButton props', props);
	const {
		path,
		children = <Icon color='blue' name='sort alphabet down'/>,
		disabled = false
	} = props;

	// TODO Make it possible to pass compare function

	const {dispatch} = getEnonicContext();
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
