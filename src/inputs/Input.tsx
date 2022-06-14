import type {StrictInputProps} from 'semantic-ui-react';


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


type LimitedStrictInputProps = Omit<
	StrictInputProps,'error'|'onBlur'|'onChange'
>

type OptionalProps<Value> = {
	parentPath ?:string
	placeholder ?:string
	style?: React.CSSProperties // For some reason doesn't exist on StrictInputProps
	validateOnBlur ?:boolean
	validateOnChange ?:boolean
	visitOnChange ?:boolean
	value ?:Value
}

type CommonProps<Value> = LimitedStrictInputProps & OptionalProps<Value>;

// You have to provide either name or path
type InputProps<Value> =
	| CommonProps<Value> & {
		name :string
		path ?:string
	}
	| CommonProps<Value> & {
		name ?:string
		path :string
	}


export function Input<Value>(props :InputProps<Value>) {
	// console.debug('Input props', props);

	const {dispatch, state} = getEnonicContext();
	//console.debug('Input state', state);

	const {
		name, // name or path is required
		parentPath,
		path = parentPath ? `${parentPath}.${name}` : name, // name or path is required
		validateOnBlur = true,
		validateOnChange = true,
		visitOnChange = true,
		value = getIn(state.values, path, ''),
		...rest // handles children, fluid, placeholder, style and more <StrictInputProps>
	} = props;
	//console.debug('Input path', path, 'value', value);


	// const changed = getIn(context.changes, path);
	const errorMsg = getIn(state.errors, path);
	const visited = getIn(state.visits, path);
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
				<>
					<Message.Header>{path}</Message.Header>
					{errorMsg}
				</>
			</Message.Content>
		</Message>}
	</>;
} // Input
