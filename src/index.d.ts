export type AnyObject = Record<string, unknown>;
export type EmptyObject = Record<string, never>;


export namespace SemanticUiReactForm {
  export type Schema<T = AnyObject> = T
  export type ActionIndex = number
  export type ActionPath = string

  export type DeleteItemAction = {
    index :ActionIndex
  	path :ActionPath
    type :'DELETE_ITEM'
  }

  export type InsertAction<Value = unknown> = {
    index :ActionIndex
  	path :ActionPath
    type :'INSERT'
    value :Value
  }

  export type MoveDownAction = {
    index :ActionIndex,
  	path :ActionPath,
    type :'MOVE_DOWN'
  }

  export type MoveUpAction = {
    index :ActionIndex,
  	path :ActionPath,
    type :'MOVE_UP'
  }

  export type RemoveAction = {
    type :'REMOVE'
  }

  export type ResetAction = {
    type :'RESET'
  }

  export type SetErrorAction = {
    error :string, // TODO uncertain
  	path :ActionPath,
    type :'SET_ERROR'
  }

  export type SetSchemaAction<Schema = AnyObject> = {
    schema :Schema,
  	path :ActionPath,
    type :'SET_SCHEMA'
  }

  export type SetStateAction<Value = AnyObject> = {
    type :'SET_STATE',
    value :Value
  }

  export type SortAction = {
  	path :ActionPath,
    type :'SORT'
  }

  export type SetValueFunctionParams<Value = unknown> = {
    // Required
    path :ActionPath,
    value :Value
    // Optional
    validate ?:boolean
    visit ?:boolean
  }

  export type SetValueAction<Value = unknown> = SetValueFunctionParams<Value> & {
    type :'SET_VALUE'
  }

  export type SetVisitedFunctionParams = {
  	path :ActionPath,
    validate :boolean
    value ?:boolean
  }

  export type SetVisitedAction = SetVisitedFunctionParams & {
    type :'SET_VISITED'
  }

  export type SubmitAction = {
    type :'SUBMIT'
  }

  export type ValidateFormAction = {
    type :'VALIDATE_FORM',
    visitAllFields :boolean
  }

  export type VisitAllAction = {
    type :'VISIT_ALL'
  }

  export type Action = DeleteItemAction
    | InsertAction
    | MoveDownAction
    | MoveUpAction
    | RemoveAction
    | ResetAction
    | SetErrorAction
    | SetSchemaAction
    | SetStateAction
    | SetValueAction
    | SetVisitedAction
    | SortAction
    | SubmitAction
    | ValidateFormAction
    | VisitAllAction

  export type State<Values extends AnyObject> = {
    errors ?:AnyObject
    changes ?:AnyObject
    schema ?:Schema
    values :Values
    visits ?:AnyObject
  }
  export type AfterValidateFunction<State> = (state :State) => void;
  export type AfterVisitFunction<State> = (state :State) => void;
  export type OnChangeFunction<Values> = (values :Values) => void;
  export type OnDeleteFunction<Values> = (values :Values) => void;
  export type OnSubmitFunction<Values> = (values :Values) => void;

  export type Reducer<State> = (prevState: State, action: Action) => State;
} // namespace SemanticUiReactForm
