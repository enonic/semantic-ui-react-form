import type {
	AnyObject,
	SemanticUiReactForm
} from './index.d';


export {
	SET_VALUE,
	setValue
} from './actions/setValue';

export {
	SET_VISITED,
	setVisited
} from './actions/setVisited';

export const DELETE_ITEM = 'DELETE_ITEM';
export const INSERT = 'INSERT';
export const MOVE_DOWN = 'MOVE_DOWN';
export const MOVE_UP = 'MOVE_UP';
// const PUSH = 'PUSH';
export const REMOVE = 'REMOVE';
export const RESET = 'RESET';

export const SET_ERROR = 'SET_ERROR';
export const SET_SCHEMA = 'SET_SCHEMA';
export const SET_STATE = 'SET_STATE';


export const SORT = 'SORT';
export const SUBMIT = 'SUBMIT';
// export const VALIDATE_FIELD = 'VALIDATE_FIELD';
export const VALIDATE_FORM = 'VALIDATE_FORM';
export const VISIT_ALL = 'VISIT_ALL';


export const deleteItem = ({
	index,
	path
} :{
	index :SemanticUiReactForm.ActionIndex,
	path :SemanticUiReactForm.ActionPath
}) :SemanticUiReactForm.DeleteItemAction => ({
	index,
	path,
	type: DELETE_ITEM
});


export function insert<Value = unknown>({
	index,
	path,
	value
} :{
	index :SemanticUiReactForm.ActionIndex,
	path :SemanticUiReactForm.ActionPath,
	value :Value
}) :SemanticUiReactForm.InsertAction<Value> {
	return {
		index,
		path,
		type: INSERT,
		value
	}
}


export const moveDown = ({
	index,
	path
} :{
	index :SemanticUiReactForm.ActionIndex,
	path :SemanticUiReactForm.ActionPath
}) :SemanticUiReactForm.MoveDownAction => ({
	index,
	path,
	type: MOVE_DOWN
});


export const moveUp = ({
	index,
	path
} :{
	index :SemanticUiReactForm.ActionIndex,
	path :SemanticUiReactForm.ActionPath
}) :SemanticUiReactForm.MoveUpAction => ({
	index,
	path,
	type: MOVE_UP
});

/* export const push = ({index, path, value}) => ({
	index,
	path,
	type: PUSH,
	value
}); */

export const remove = () :SemanticUiReactForm.RemoveAction => ({
	type: REMOVE
});

export const reset = () :SemanticUiReactForm.ResetAction => ({
	type: RESET
});

export const setError = ({
	path,
	error
} :{
	error :string|AnyObject,
	path :SemanticUiReactForm.ActionPath
}) :SemanticUiReactForm.SetErrorAction => ({
	error,
	path,
	type: SET_ERROR
});


export function setSchema<Schema = AnyObject>({
	path,
	schema
} :{
	path :SemanticUiReactForm.ActionPath,
	schema :SemanticUiReactForm.Schema<Schema>
}) :SemanticUiReactForm.SetSchemaAction<Schema> {
	return {
		path,
		type: SET_SCHEMA,
		schema
	};
}


export function setState<Value = AnyObject>({
	value
} :{
	value :Value
}) :SemanticUiReactForm.SetStateAction<Value> {
	return {
		type: SET_STATE,
		value
	};
}


export const sort = ({
	path
} :{
	path :SemanticUiReactForm.ActionPath
}) :SemanticUiReactForm.SortAction => ({
	path,
	type: SORT
});


export const submit = () :SemanticUiReactForm.SubmitAction => ({
	type: SUBMIT
});


/* export const validateField = ({path, value}) => ({
	path,
	type: VALIDATE_FIELD,
	value
}); */


export const validateForm = ({
	visitAllFields = false
} = {}) :SemanticUiReactForm.ValidateFormAction => ({
	type: VALIDATE_FORM,
	visitAllFields
});


export const visitAll = () :SemanticUiReactForm.VisitAllAction => ({
	type: VISIT_ALL
});
