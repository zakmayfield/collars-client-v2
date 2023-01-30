export default function ScoobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <section>{children}</section>
    </section>
  );
}
