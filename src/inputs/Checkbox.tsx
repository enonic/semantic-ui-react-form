import type {StrictCheckboxProps} from 'semantic-ui-react';


import {getIn} from '@enonic/js-utils';
import {Checkbox as SemanticUiReactCheckbox} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {setValue} from '../actions';


type CommonProps<Value extends StrictCheckboxProps['value']> = Omit<
	StrictCheckboxProps,'onChange'|'value'
> & {
	// Optional
	parentPath ?:string
	value ?:Value
}

// name or path is required
type CheckboxProps<Value extends StrictCheckboxProps['value']> =
	| CommonProps<Value> & {
		name :string
		path ?:string
	}
	| CommonProps<Value> & {
		name ?:string
		path :string
	}


export function Checkbox<
	Value extends StrictCheckboxProps['value']
>(props :CheckboxProps<Value>) {
	const {dispatch, state} = getEnonicContext();

	const {
		name, // name or path is required
		parentPath,
		path = parentPath ? `${parentPath}.${name}` : name, // name or path is required
		checked = getIn(state.values, path), // avoid in ...rest
		defaultChecked, // = getIn(context.values, path),
		value, // = getIn(context.values, path), // avoid in ...rest
		...rest //defaultChecked
	} = props;
	/*console.debug('Checkbox',
		'checked', checked,
		'defaultChecked', defaultChecked,
		'name', name,
		'parentPath', parentPath,
		'path', path,
		'value', value,
		'rest', rest
	);*/

	return <SemanticUiReactCheckbox
		{...rest}
		checked={checked}
		name={path}
		onChange={(_event,{checked}) => {
			//console.debug('Checkbox onChange checked', checked);
			dispatch(setValue({path, value: checked}));
		}}

	/>;
} // function Checkbox

/*
onClick={(syntheticEvent,data) => {
	console.debug('Checkbox onClick data', data);
}}
onMouseDown={(syntheticEvent,data) => {
	console.debug('onMouseDown onClick data', data);
}}
onMouseUp={(syntheticEvent,data) => {
	console.debug('onMouseUp onClick data', data);
}}
*/
