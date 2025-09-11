export default function Section({ title, children }: React.PropsWithChildren<{title:string}>) {
  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}