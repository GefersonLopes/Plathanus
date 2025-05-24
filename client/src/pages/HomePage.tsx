import Hero from "../components/layout/Hero";
import Tabs from "../components/layout/Tabs";
import { tabItems } from "../components/layout/Tabs/data";

const breadcrumbItems = [
  { label: "Início", href: "/" },
  { label: "Linha Orthopedic", href: "#orthopedic" },
];

function HomePage() {
  return (
    <section className="bg-dark w-full">
      <Hero breadcrumbItems={breadcrumbItems} />
      <Tabs tabs={tabItems} className="bg-white" />
      {/* <List items={tasks}>
        {(item) => <LinkCard {...item} className="max-w-lg" />}
      </List> */}
    </section>
  );
}

export default HomePage;
