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

	const {disabled = !leaves.length} = props;

	return <Button
		color='olive'
		disabled={disabled}
		onClick={() => dispatch(reset())}
		type='reset'
	><Icon name='history'/>Reset</Button>;
} // ResetButton
