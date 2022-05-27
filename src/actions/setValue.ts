import type {SemanticUiReactForm} from '../index.d';


export const SET_VALUE = 'SET_VALUE';


export function setValue<
	Value = unknown
>(
	{
		path,
		validate = true,
		value,
		visit = true
	} :SemanticUiReactForm.SetValueFunctionParams<Value>
) :SemanticUiReactForm.SetValueAction<Value> {
	return {
		path,
		type: SET_VALUE,
		validate,
		value,
		visit
	};
}
