import { useState } from 'react'
import Link from 'next/link'
import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react'
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  const [state, setState] = useState({ open: false })
  
  const handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id)
    //["gid://shopify/Product/6543158149319", "gid://shopify/Product/6543158313159"]

    setState({ open: false });
    console.log(idsFromResources);
  }

  return (
    <Page>
      <TitleBar
        title="Sample App"
        primaryAction={{
          content: 'Select products',
          onAction: () => setState({open: true }),
        }}
      />

      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={state.open}
        onSelection={(resources) => handleSelection(resources)}
        onCancel={() => setState({ open: false })}
      />

      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: () => {
              console.log('clicked')
              setState({open: true})
            },
          }}
          image={img}
        >
          <p>Select products to change their price temporarily.</p>
          <Link href='/annotated-layout'><a>2nd page</a></Link>
        </EmptyState>
      </Layout>
    </Page>
  )
}

export default Index

// https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react/embed-your-app-in-shopify

// ngrok http 3000
// https://dashboard.ngrok.com/get-started/setup
// You can create three different types of apps for Shopify stores: public, custom and private. 
// here: public

// https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react/embed-your-app-in-shopify

// tutorial: https://github.com/Shopify/shopify-app-node/tree/master