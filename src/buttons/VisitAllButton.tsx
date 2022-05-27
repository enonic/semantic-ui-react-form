import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context';
import {visitAll} from '../actions';


export function VisitAllButton(props :{
  children ?:React.ReactNode
  disabled ?:boolean
} = {}) {
  const {
    children = <><Icon name='lightning'/>Visit all</>,
    disabled = false
  } = props;

  const [_context, dispatch] = getEnonicContext();

  return <Button
		color='olive'
    disabled={disabled}
		onClick={() => dispatch(visitAll())}
		type='button'
	>{children}</Button>;
}
