import Hero from "../components/layout/Hero";

const breadcrumbItems = [
  { label: "Início", href: "/" },
  { label: "Linha Orthopedic", href: "#orthopedic" },
];

function HomePage() {
  return (
    <section className="bg-dark w-full">
      <Hero breadcrumbItems={breadcrumbItems} />
      {/* <List items={tasks}>
        {(item) => <LinkCard {...item} className="max-w-lg" />}
      </List> */}
    </section>
  );
}

export default HomePage;
