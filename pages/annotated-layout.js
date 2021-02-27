import { useState } from 'react';
import Link from 'next/link'
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
} from '@shopify/polaris';

const AnnotatedLayout = () => {
  const [state, setState] = useState({
    discount: '10%',
    enabled: false,
  })

  const { discount, enabled } = state;
  const contentStatus = enabled ? 'Disable' : 'Enable';
  const textStatus = enabled ? 'enabled' : 'disabled';

  const handleSubmit = () => {
    setState({
     discount:  state.discount,
   });
   console.log('submission',  state);
 };

 const handleChange = (field) => {
   return (value) =>  setState({ [field]: value });
 };

 const handleToggle = () => {
    setState(({ enabled }) => {
     return { enabled: !enabled };
   });
  };
  
  return (
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Default discount"
          description="Add a product to Sample App, it will automatically be discounted."
        >
          <Card sectioned>
            <Form onSubmit={ handleSubmit}>
              <FormLayout>
                <TextField
                  value={discount}
                  onChange={ handleChange('discount')}
                  label="Discount percentage"
                  type="discount"
                />
                <Stack distribution="trailing">
                  <Button primary submit>
                    Save
                  </Button>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Price updates"
          description="Temporarily disable all Sample App price updates"
        >
          <SettingToggle
            action={{
              content: contentStatus,
              onAction:  handleToggle,
            }}
            enabled={enabled}
          >
            This setting is{' '}
            <TextStyle variation="strong">{textStatus}</TextStyle>.
          </SettingToggle>
          <Link href='/'><a>1st page</a></Link>
        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  );
}

export default AnnotatedLayout;