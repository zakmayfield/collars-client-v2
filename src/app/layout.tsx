import './globals.css';
import { Provider as ApolloProvider } from '@/apollo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <ApolloProvider>
        <body className='text-center p-2'>{children}</body>
      </ApolloProvider>
    </html>
  );
}
