import { useState } from "react";
import TabItem from "./TabItem";

const skills = [
  {
    name: "HTML",
    level: "w-[80%]",
  },
  {
    name: "css",
    level: "w-[65%]",
  },
  {
    name: "javascript",
    level: "w-[75%]",
  },
  {
    name: "react",
    level: "w-[45%]",
  },
];

const Tab = () => {
  const [activetab, setActivetab] = useState("tab1");
  return (
    <div className="ml-4 w-1/2">
      <span className="flex gap-4">
        <button
          className={`font-bold ${
            activetab === "tab1" ? "border-b border-black" : "text-black/60"
          }`}
          onClick={() => setActivetab("tab1")}
        >
          who am i ?
        </button>
        <button
          className={`font-bold ${
            activetab === "tab2" ? "border-b border-black" : "text-black/60"
          }`}
          onClick={() => setActivetab("tab2")}
        >
          skills
        </button>
      </span>
      <>
        <TabItem activetab={activetab} title="tab1">
          <p className="max-w-md">
            I’m a web developer base in Indonesia. I really enjoy solving
            problems as well making things looks aesthetic.
          </p>
        </TabItem>
        <TabItem activetab={activetab} title="tab2">
          <div className="flex flex-col gap-4 mt-4">
            {skills.map((skill) => (
              <div key={skill.name} className="flex w-full items-center">
                <span className="w-32">{skill.name}</span>
                <div className="overflow-hidden rounded w-full border border-black h-max ">
                  <span className="block bg-[#e0dfdd]">
                    <span
                      className={`block bg-black p-1 ${skill.level}`}
                    ></span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabItem>
      </>
    </div>
  );
};

export default Tab;
