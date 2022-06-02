import type {
	AnyObject,
	SemanticUiReactForm
} from './index.d'


import * as React from 'react';


//export const enonicContext = React.createContext<SemanticUiReactForm.State<AnyObject>|undefined>(undefined);
export const EnonicContext = React.createContext(undefined);


export function createEnonicContext<
	Values extends AnyObject
>(
	reducer: React.Reducer<
		SemanticUiReactForm.State<Values>, SemanticUiReactForm.Action
	>,
  initialState: SemanticUiReactForm.State<Values>,
) {
	/*const defaultDispatch: React.Dispatch<ActionType> = () => initialState // we never actually use this
	const ctx = React.createContext({
	    state: initialState,
	    dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
  });*/
	const ctx = EnonicContext;
	function Provider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer<React.Reducer<
			SemanticUiReactForm.State<Values>, SemanticUiReactForm.Action>
		>(reducer, initialState);
    return <ctx.Provider value={{ state, dispatch }} {...props} />
  }
  return [ctx, Provider] as const;
} // function createEnonicContext


export function EnonicProviderComponent<
	Values extends AnyObject
>({
	children,
	initialState,
	reducer
} :{
	children ?:React.ReactNode
	initialState :SemanticUiReactForm.State<Values>
	reducer :SemanticUiReactForm.Reducer<SemanticUiReactForm.State<Values>>
}) {
	const [_enonicContext, EnonicProvider] = createEnonicContext<Values>(reducer, initialState);
	//const { state, dispatch } = React.useContext(enonicContext);
	//return <EnonicProvider value={{ state, dispatch }}>{children}</EnonicProvider>;
	return <EnonicProvider>{children}</EnonicProvider>;
}


export function getEnonicContext<
	Values extends AnyObject
>() {
	return React.useContext<{
		dispatch :React.Dispatch<SemanticUiReactForm.Action>
		state :SemanticUiReactForm.State<Values>
	}>(EnonicContext);
}
