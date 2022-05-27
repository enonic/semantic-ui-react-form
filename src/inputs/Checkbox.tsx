import {getIn} from '@enonic/js-utils';
import {Checkbox as SemanticUiReactCheckbox} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {setValue} from '../actions';


export function Checkbox<Value>(props :{
	// Required
	name :string
	// Optional
	checked ?:boolean
	defaultChecked ?:boolean
	parentPath ?:string
	path ?:string
	value ?:Value
}) {
	const [context, dispatch] = getEnonicContext();

	const {
		name, // avoid in ...rest
		parentPath,
		path = parentPath ? `${parentPath}.${name}` : name,
		checked = getIn(context.values, path), // avoid in ...rest
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
