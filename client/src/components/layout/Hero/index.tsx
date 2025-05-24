import Breadcrumbs from "../../ui/Breadcrumbs";
import LinearEffectImg from "../LinearEffect";

const Hero = ({
  breadcrumbItems,
}: {
  breadcrumbItems: { label: string; href: string }[];
}) => {
  return (
    <LinearEffectImg src="/assets/covers/hero.png" className="p-8 md:px-22">
      <main className="flex flex-col w-full h-[580px]">
        <Breadcrumbs items={breadcrumbItems} className="!text-dark" />
        <div className="flex flex-col items-start justify-center w-full h-full">
          <img src="/assets/line.png" alt="Linha Orthopedic" />
          <ul className="list-disc list-inside text-black mt-[38px]">
            <li className="max-w-[628px] text-lg md:text-2xl text-medium font-releway leading-[30px]">
              Produtos desenvolvidos para auxiliar na prevenção e retorno das
              atividades, no tratamento e recuperação de pacientes com lesões
              ortopédicas. s
            </li>
          </ul>
        </div>
      </main>
    </LinearEffectImg>
  );
};

export default Hero;
