import {
	/*Button,
	Checkbox,
	Dimmer,
	Divider,
	Dropdown as SemanticUiReactDropdown
	Form,
	Input,
	Label,
	Loader,
	Message,
	Modal,
	Pagination,
	Popup,
	Radio,
	Segment,
	Table*/
	Header,
	Icon,
	List,
	Menu,
	Sidebar//,
} from 'semantic-ui-react';
import {
  Dropdown,
  Form as EnonicForm,
  Input
} from '../src';

function required(value) {
	return value ? undefined : 'Required!';
}

const SCHEMA = {
	anInput: (v) => required(v)
};

export function Example() {
  const initialValues = {};
  return <>
		<Menu fixed='top' style={{zIndex: 103}}>
			<Menu.Item><Icon name='smile'/></Menu.Item>
		</Menu>
		<Sidebar.Pushable>
			<Sidebar
				style={{
					paddingTop: 40
				}}
				visible={false/*Setting this to true leads to serious React problems!?!*/}
				width='thin'
			><div>Text</div></Sidebar>
			<Sidebar.Pusher>
				<Header as='h1' content='A header'/>
				<List animated divided relaxed selection>
					<List.Item>
						<Icon color='red' size='large' aligned='middle' name='npm'/>
						<List.Content>
							<List.Header content='A header'/>
							<List.Description content='A description'/>
						</List.Content>
					</List.Item>
					<List.Item>
						<Icon color='red' size='large' aligned='middle' name='npm'/>
						<List.Content>
							<List.Header content='Another header'/>
							<List.Description content='Another description'/>
						</List.Content>
					</List.Item>
				</List>
				<EnonicForm
			    afterValidate={(dereffed) => {
			      //console.debug('Collection afterValidate dereffed', dereffed);
			    }}
			    afterVisit={(dereffed) => {
			      //console.debug('Collection afterVisit dereffed', dereffed);
			    }}
			    initialValues={initialValues}
			    onChange={(values) => {
						//console.debug('Collection onChange values', values);
					}}
			    onSubmit={(values) => {
						//console.debug('submit values', values);
			    }}
			    schema={SCHEMA}
			  >
			    <Input
			      fluid
			      label='An input'
			      name='anInput'
			    />
			    <Dropdown
			      fluid
			      name='aDropDown'
			      options={[{
			        key: 'anOption',
			        text: 'An option',
			        value: 'anOption'
			      },{
			        key: 'anotherOption',
			        text: 'Another option',
			        value: 'anotherOption'
			      }]}
			      placeholder='A placeholder'
			      selection
			    />
			  </EnonicForm>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	</>;
}
