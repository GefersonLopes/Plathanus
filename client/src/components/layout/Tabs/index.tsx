import clsx from "clsx";
import { useState } from "react";

import Button from "../../ui/Button";

export interface TabItem {
  label: string;
  value: string;
  description: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value);

  const currentTab = tabs.find((tab) => tab.value === activeTab);

  return (
    <div className={clsx("w-full p-8 pt-12 md:px-22", className)}>
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-medium text-quaternary font-raleway max-w-[550px]">
          Conheça as{" "}
          <span className="text-secondary font-semibold">
            famílias exclusivas
          </span>{" "}
          da linha Orthopedic
        </h2>
      </div>

      <div className="flex flex-wrap gap-3 mb-6 pt-6">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;
          return (
            <Button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              variant="custom"
              className={clsx(
                "rounded-lg !px-2 py-2 transition font-raleway",
                "text-base text-medium hover:bg-[#A75897] hover:text-white",
                isActive
                  ? "bg-secondary text-white"
                  : "bg-transparent text-secondary",
              )}
            >
              {tab.label}
            </Button>
          );
        })}
      </div>

      <div className="text-dark leading-relaxed max-w-2xl">
        {currentTab?.description}
      </div>

      <hr className="mt-[40px] border-0 border-t border-[#EBEBEB]" />
    </div>
  );
};

export default Tabs;
