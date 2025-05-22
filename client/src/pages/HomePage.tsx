import { CTAButton } from "../components/layout/CTAButton";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import SocialMidia from "../components/ui/SocialMidia";
import { footerSections } from "../utils/data/footer";
import { socialLinks } from "../utils/data/socialLinks";

function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Header />
      <SocialMidia links={socialLinks} />
      {/* <List items={tasks}>
        {(item) => <LinkCard {...item} className="max-w-lg" />}
      </List> */}
      <section className="w-full flex items-center justify-center mb-4">
        <CTAButton
          href={"/contato"}
          text="Entrar em contato"
          className="w-full max-w-lg mx-4"
        />
      </section>
      <Footer
        logo="/assets/cover.jpg"
        sections={footerSections}
        socialLinks={socialLinks}
        className="mt-auto"
      />
    </main>
  );
}

export default HomePage;
