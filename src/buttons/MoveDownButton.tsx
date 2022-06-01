import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context';
import {moveDown} from '../actions';


export function MoveDownButton(props :{
	// Required
	path :string
	// Optional
	disabled ?:boolean
	index ?:number
}) {
	//console.debug('MoveDownButton props', props);
	const {
		disabled = false,
		index = 0,
		path
	} = props;

	const {dispatch} = getEnonicContext();
	//console.debug('MoveDownButton context', context);

	return <Button
		disabled={disabled}
		icon
		onClick={() => dispatch(moveDown({
			index,
			path
		}))}
		type='button'
	><Icon color='blue' name='arrow down'/></Button>;
} // MoveDownButton
