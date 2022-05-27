import {getIn} from '@enonic/js-utils';
import {Dropdown as SemanticUiReactDropdown} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {setValue} from '../actions';


type DropdownValueType = boolean | number | string | (boolean | number | string)[];


export function Dropdown<Value extends DropdownValueType>(props :{
	// Required
	name :string
	// Optional
	parentPath ?:string
	path ?:string
	value ?:Value
}) {
	//console.debug('Dropdown props', props);

	const [context, dispatch] = getEnonicContext();
	//console.debug('Dropdown context', context);

	const {
		name,
		parentPath,
		path = parentPath ? `${parentPath}.${name}` : name,
		value = getIn(context.values, path),
		...rest
	} = props;
	/*console.debug('Dropdown',
		'name', name,
		'parentPath', parentPath,
		'path', path,
		'value', value,
		'rest', rest
	);*/

	return <SemanticUiReactDropdown
		{...rest}
		onChange={(_event,{value: newValue}) => {
			//console.debug('Dropdown newValue', newValue);
			dispatch(setValue<Value>({
				path,
				value: newValue as Value
			}));
		}}
		value={value}
	/>;
} // function Dropdown
