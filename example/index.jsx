import {
  Dropdown,
  Form,
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
  return <Form
    afterValidate={(dereffed) => {
      console.debug('Collection afterValidate dereffed', dereffed);
    }}
    afterVisit={(dereffed) => {
      console.debug('Collection afterVisit dereffed', dereffed);
    }}
    initialValues={initialValues}
    onChange={(values) => {
			console.debug('Collection onChange values', values);
		}}
    onSubmit={(values) => {
			console.debug('submit values', values);
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
  </Form>;
}
