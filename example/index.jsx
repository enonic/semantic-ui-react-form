import {
  Form,
  Input
} from '../src';

function required(value) {
	return value ? undefined : 'Required!';
}

const SCHEMA = {
	name: (v) => required(v)
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
      label='Name'
      path='name'
    />
  </Form>;
}
