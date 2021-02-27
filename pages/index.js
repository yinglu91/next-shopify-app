import Link from 'next/link'
import { Layout, Page, EmptyState } from '@shopify/polaris';
const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => {
  return (
    <Page>
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: 'Select products',
            onAction: () => console.log('clicked'),
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
// You can create three different types of apps for Shopify stores: public, custom and private. 
// here: public

// https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react/embed-your-app-in-shopify