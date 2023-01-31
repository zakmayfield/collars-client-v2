import './globals.css';
// import { Provider as ApolloProvider } from '@/apollo';
import { client, gql } from '@/gqlrq';

const AGENCY_BY_ID = gql`
  query AgencyById {
    agencyById {
      id
      email
      name
    }
  }
`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { agencyById } = await client.request(AGENCY_BY_ID);

  console.log('::: agencyById Query :::', agencyById)

  return (
    // <ApolloProvider>
    <html lang='en'>
      <head />
      <body className='text-center p-2'>{children}</body>
    </html>
    // </ApolloProvider>
  );
}
