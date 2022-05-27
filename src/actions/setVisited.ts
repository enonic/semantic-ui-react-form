import type {SemanticUiReactForm} from '../index.d';


export const SET_VISITED = 'SET_VISITED';


export function setVisited(
  {
    path,
    validate = true,
    value = true
  } :SemanticUiReactForm.SetVisitedFunctionParams,
) :SemanticUiReactForm.SetVisitedAction {
  return {
    path,
    type: SET_VISITED,
    validate,
    value
  };
}
