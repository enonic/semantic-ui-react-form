import type {
  AnyObject,
  //EmptyObject,
  SemanticUiReactForm
} from '../index.d';


// import deepEqual from 'fast-deep-equal';
//import {setIn} from '@enonic/js-utils'; // Doesn't handle array as root item
import setIn from 'set-value'; // Handles array as root item

import {validateForm} from './validateForm';
import {deReference} from '../utils/deReference';


export function visit<Values extends AnyObject>({
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
  state /*= {
    errors: {},
    changes: {},
    schema: {},
    values: {},
    visits: {}
  }*/
} :{
  action :SemanticUiReactForm.SetVisitedFunctionParams,
  afterValidate ?:SemanticUiReactForm.AfterValidateFunction<SemanticUiReactForm.State<Values>>,
  afterVisit ?:SemanticUiReactForm.AfterVisitFunction<SemanticUiReactForm.State<Values>>,
  state :SemanticUiReactForm.State<Values>
}) {
  const {
    path,
    validate = true,
    value = true
  } = action;
  // console.debug('setVisisted path', path, 'value', value, 'validate', validate);

  /* This is bad when called from setValue with validate = true
  const prevValue = getIn(state.visits, path);
  if (deepEqual(value, prevValue)) {
    console.debug('reducer action', action, 'did not change state', state);
    return state;
  } */

  const deref = deReference<typeof state>(state);
  setIn(deref.visits, path, value);
  // console.debug('reducer action', action, 'state', state, 'deref', deref);
  afterVisit(deref);
  if (validate) {
    return validateForm({
      afterValidate,
      state: deref
    });
  }
  return deref;
} // function visit
