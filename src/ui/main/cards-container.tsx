import { JSX } from "react";

export default function CardsContainer({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <section className="bg-white rounded-lg px-4 py-6 ms-4 me-4 grid grid-cols-3 max-sm:grid-cols-1 max-sm:justify-items-center justify-items-end gap-3">
      {children}
    </section>
  );
}
