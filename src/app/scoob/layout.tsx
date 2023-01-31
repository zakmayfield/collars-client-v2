import TestQuery from '@/components/TestQuery';

export default function ScoobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TestQuery />
      <section>{children}</section>
    </section>
  );
}
