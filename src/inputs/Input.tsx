import {getIn} from '@enonic/js-utils';
import {
	Icon,
	Input as SemanticUiReactInput,
	Message
} from 'semantic-ui-react';
import {getEnonicContext} from '../Context';
import {
	setValue,
	setVisited//,
	//validateForm
} from '../actions';


export function Input<Value>(props :{
	// Required
	name :string
	// Optional
	parentPath ?:string
	path ?:string
	validateOnBlur ?:boolean
	validateOnChange ?:boolean
	visitOnChange ?:boolean
	value ?:Value
}) {
	// console.debug('Input props', props);

	const [context, dispatch] = getEnonicContext();
	// console.debug('Input context', context);

	const {
		// Required
		name,
		// Optional
		parentPath,
		path = parentPath ? `${parentPath}.${name}` : name,
		validateOnBlur = true,
		validateOnChange = true,
		visitOnChange = true,
		value = getIn(context.values, path, ''),
		...rest
	} = props;
	// console.debug('Input context', context);


	// const changed = getIn(context.changes, path);
	const errorMsg = getIn(context.errors, path);
	const visited = getIn(context.visits, path);
	const error = !!(visited && errorMsg);
	// console.debug('Input path', path, 'value', value, 'errorMsg', errorMsg, 'visited', visited, 'error', error);

	return <>
		<SemanticUiReactInput
			autoComplete='off'
			{...rest}
			error={error}
			name={path}
			onBlur={() => {
				dispatch(setVisited({path, validate: validateOnBlur}));
			}}
			onChange={(_event, {value: newValue}) => {
				dispatch(setValue({
					path,
					validate: validateOnChange,
					value: newValue,
					visit: visitOnChange
				}));
			}}
			value={value}
		/>
		{error && <Message icon negative>
			<Icon name='warning'/>
			<Message.Content>
				<Message.Header>{path}</Message.Header>
				{errorMsg}
			</Message.Content>
		</Message>}
	</>;
} // Input
