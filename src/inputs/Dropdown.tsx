import type {StrictDropdownProps} from 'semantic-ui-react';


import {getIn} from '@enonic/js-utils';
import {Dropdown as SemanticUiReactDropdown} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {setValue} from '../actions';


type CommonProps<Value extends StrictDropdownProps['value']> = Omit<
	StrictDropdownProps,'onChange'|'value'
> & {
	// Optional
	parentPath ?:string
	value ?:Value
}

// name or path is required
type DropdownProps<Value extends StrictDropdownProps['value']> =
	| CommonProps<Value> & {
		name :string
		path ?:string
	}
	| CommonProps<Value> & {
		name ?:string
		path :string
	}


export function Dropdown<
	Value extends StrictDropdownProps['value']
>(props :DropdownProps<Value>) {
	//console.debug('Dropdown props', props);

	const {dispatch, state} = getEnonicContext();
	//console.debug('Dropdown context', context);

	const {
		name, // name or path is required
		parentPath,
		path = parentPath ? `${parentPath}.${name}` : name, // name or path is required
		value = getIn(state.values, path),
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
