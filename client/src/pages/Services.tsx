import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { CTAButton } from "../components/layout/CTAButton";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import SocialMidia from "../components/ui/SocialMidia";
import { footerSections } from "../utils/data/footer";
import { socialLinks } from "../utils/data/socialLinks";
function Services() {
  const navigate = useNavigate();

  const [openTypes, setOpenTypes] = useState(false);
  const eyelashTypes = [
    {
      name: "Volume Brasileiro",
      img: "/assets/b1.jpg",
    },
    {
      name: "Volume Egipcio",
      img: "/assets/b2.jpg",
    },
    {
      name: "Efeito Fox",
      img: "/assets/b3.jpg",
    },
  ];
  return (
    <main className="relative min-h-screen bg-dark text-slate-50 flex flex-col">
      <Header />
      <SocialMidia links={socialLinks} />
      <div className="w-full flex flex-col items-center justify-center">
        <section className="w-[90%] max-w-lg flex items-center bg-quaternary text-white p-4 px-8 mt-8 mb-2">
          <div className="flex items-center justify-between w-full">
            <h3>Serviços</h3>
            <GoArrowUpRight
              className="text-white hover:text-primary transition duration-300 ease-in-out border rounded-full p-1 cursor-pointer text-2xl"
              onClick={() => navigate(-1)}
            />
          </div>
        </section>
        <div
          onClick={() => setOpenTypes((v) => !v)}
          className="relative w-[90%] max-w-lg h-90 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-102 cursor-pointer"
        >
          <img
            src="/assets/c1.jpg"
            alt="Descrição"
            className="object-cover w-full h-full filter brightness-35 grayscale"
          />

          <div className="absolute inset-0 bg-primary opacity-50"></div>

          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <h2 className="text-white text-3xl font-bold">Cílios</h2>
            <GoArrowRight className="w-6 h-6 mt-1 text-white border rounded-full p-1" />
          </div>
        </div>
        <AnimatePresence>
          {openTypes && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-[90%] max-w-lg overflow-hidden bg-quaternary mt-2 rounded-lg"
            >
              <ul className="flex flex-col divide-y divide-primary">
                {eyelashTypes.map((type) => (
                  <li
                    key={uuidv4()}
                    className="flex items-center justify-between p-4 text-white transition cursor-pointer hover:bg-tertiary hover:text-primary"
                  >
                    <div className="flex items-center gap-4">
                      <img className="w-10 h-10" src={type.img} alt="" />
                      {type.name}
                    </div>
                    <GoArrowRight className="w-6 h-6 mt-1 text-white p-1" />
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* <List items={[]}> */}
      {/* {(item) =>
          pathname !== item?.href && <LinkCard {...item} className="max-w-lg" />
        } */}
      {/* </List> */}
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

export default Services;
