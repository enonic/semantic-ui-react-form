import type {
  AnyObject,
  SemanticUiReactForm
} from '../index.d';


import {
  getIn,
  isFunction,
  isObject,
  setIn
} from '@enonic/js-utils';
import traverse from 'traverse';
import { deReference } from '../utils/deReference';


export function validateForm<
  Values extends AnyObject // Required, but limited
>({
  // action,
  afterValidate = (
    // Prefixing with underscore to avoid "is declared but its value is never read"
    _currentState :SemanticUiReactForm.State<Values>
  ) => {
    /* no-op */
  },
  state,
  visitAllFields = false
} :{
  state :SemanticUiReactForm.State<Values>
  afterValidate ?:SemanticUiReactForm.AfterValidateFunction<SemanticUiReactForm.State<Values>>
  visitAllFields ?:boolean
}) {
  // console.debug('validateForm visitAllFields', visitAllFields, 'state', state);
  // const {visitAllFields = false} = action;
  const deref = deReference(state);
  const errors = {}; // forgetting old errors here
  traverse(state.schema).forEach(function(x :(value :unknown) => string|{
    error :string
    path :Array<string>
  }) {
    // fat-arrow destroys this
    if (this.notRoot && this.isLeaf && isFunction(x)) {
      let { path } = this; //console.debug('path', path);
      const value = getIn(state.values, path); // console.debug('value', value);
      // const prevError = getIn(state.errors, path); console.debug('prevError', prevError);

      const rv = x(value);
      //console.debug('rv', rv);

      let newError :string;
      if (isObject(rv)) {
        newError = rv.error;
        path = rv.path;
      } else {
        newError = rv;
      }
      //console.debug('newError', newError);
      //console.debug('path', path);

      newError && setIn(errors, path, newError);
      visitAllFields && setIn(deref.visits, path, true);
      // console.debug('node', this.node);
    }
  });
  // console.debug('errors', errors);
  // console.debug('visits', visits);
  deref.errors = errors;
  // console.debug('reducer action', action, 'state', state, 'deref', deref);
  afterValidate(deref);
  return deref;
} // function validateForm
