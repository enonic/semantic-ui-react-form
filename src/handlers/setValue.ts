import type {
  AnyObject,
  SemanticUiReactForm
} from '../index.d';


import {
  getIn//,
  //setIn // Doesn't handle array as root item
} from '@enonic/js-utils';
import setIn from 'set-value'; // Handles array as root item
import {validateForm} from './validateForm';
import {visit as setVisited} from './visit';
import {deReference} from '../utils/deReference';


export function setValue<
  Values extends AnyObject // Required, but limited
>({
  action,
  afterValidate = (
    // Prefixing with underscore to avoid "is declared but its value is never read"
    _currentState :SemanticUiReactForm.State<Values>
  ) => {
    /* no-op */
  },
  afterVisit = (
    // Prefixing with underscore to avoid "is declared but its value is never read"
    _currentState :SemanticUiReactForm.State<Values>
  ) => {
    /* no-op */
  },
  initialState,
  onChange = () => {
    /* no-op */
  },
  state
} :{
  action :SemanticUiReactForm.SetValueFunctionParams
  initialState :SemanticUiReactForm.State<Values>
  state :SemanticUiReactForm.State<Values>
  afterValidate ?:SemanticUiReactForm.AfterValidateFunction<SemanticUiReactForm.State<Values>>
  afterVisit ?:SemanticUiReactForm.AfterVisitFunction<SemanticUiReactForm.State<Values>>,
  onChange ?:SemanticUiReactForm.OnChangeFunction<Values>,
}) {
  const {
    path,
    validate = true,
    value,
    visit = true
  } = action;
  // console.debug('setValue path', path, 'value', value, 'validate', validate, 'visit', visit, 'state', state);

  if (value === getIn(state.values, path)) {
    // console.debug('reducer action', action, 'did not change state', state);
    return state;
  }
  const deref = deReference(state);
  setIn(deref.values, path, value);

  const initialValue = getIn(initialState.values, path);
  setIn(deref.changes, path, value !== initialValue);

  // console.debug('reducer state', state, 'action', action, 'deref', deref);
  onChange(deref.values);
  if (visit) {
    return setVisited({
      action: {
        path,
        validate/* ,
        value: true */
      },
      afterValidate,
      afterVisit,
      state: deref
    });
  }
  if (validate) {
    return validateForm({
      afterValidate,
      state: deref
    });
  }
  return deref;
} // function setValue
