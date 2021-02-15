import {Button, Icon} from 'semantic-ui-react';

import {getEnonicContext} from '../Context.jsx';
import {visitAll} from '../actions.es';


export function VisitAllButton(props) {
  const {
    children = <><Icon name='lightning'/>Visit all</>
  } = props;

  const [context, dispatch] = getEnonicContext();

  return <Button
		color='olive'
		onClick={() => dispatch(visitAll())}
		type='button'
	>{children}</Button>;
}
