import type {
	//AnyObject,
	SemanticUiReactForm
} from './index.d';


import {getIn} from '@enonic/js-utils';

import {getEnonicContext} from './Context';


export function List<
	//ValuesObj extends AnyObject,
	Item extends unknown = unknown
>(props :{
	path :SemanticUiReactForm.ActionPath,
	render :(value :Array<Item>) => JSX.Element
	value ?:Array<Item>
}) {
	// console.debug('List props', props);

	const {state} = getEnonicContext();
	// console.debug('List context', context);

	const {
		path,
		render,
		value = getIn(state, `values.${path}`, []) as Array<Item>
	} = props;
	// console.debug('List path', path, 'value', value);

	return render(value);
} // List
