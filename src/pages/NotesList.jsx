import { useState } from "react";

import SidebarItem from "../components/common/SidebarItem";
import Divider from "../components/common/Divider";

const Sidebar = () => {
  const [activeState, setActiveState] = useState(0);

  const handleClick = (step) => () => {
    setActiveState(step);
  };

  return (
    <div className="w-64 h-full bg-primary">
      <div className="text-white text-2xl p-3 bg-purple-dark mb-4 shadow-md">
        Local Notes
      </div>

      <SidebarItem active={activeState === 0} handleClick={handleClick(0)}>
        Notes
      </SidebarItem>

      <Divider />

      <SidebarItem active={activeState === 1} handleClick={handleClick(1)}>
        <div className="h-2 w-2 rounded-lg bg-red-500" />
        <div className="ml-4">Projects</div>
      </SidebarItem>
      <SidebarItem active={activeState === 2} handleClick={handleClick(2)}>
        <div className="h-2 w-2 rounded-lg bg-yellow-500" />
        <div className="ml-4">Business</div>
      </SidebarItem>
      <SidebarItem active={activeState === 3} handleClick={handleClick(3)}>
        <div className="h-2 w-2 rounded-lg bg-green-500" />
        <div className="ml-4">Personal</div>
      </SidebarItem>
      <SidebarItem>
        <div className="text-4xl">+</div>
        <div className="ml-4">Add new</div>
      </SidebarItem>

      <Divider />
    </div>
  );
};

const TagButton = ({ children, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`m-2 ${
        active && "bg-primary text-white"
      } pl-5 pr-5 pb-1 pt-1 rounded-md focus:outline-none`}
    >
      {children}
    </button>
  );
};

const Card = () => {
  return (
    <div
      className={`h-56 w-card-sm m-4 p-4 shadow-md bg-white rounded-md 2xl:w-card-2xl xl:w-card-xl lg:w-card-lg md:w-card-md sm:w-card-sm`}
    >
      <div className="text-sm opacity-50 mb-4">23 June, 2017</div>
      <div className="flex items-center mb-2 ">
        <div className="text-xl font-medium">The monkey rope</div>
        <div className="h-2 w-2 rounded-lg bg-red-500 ml-2" />
      </div>
      <div className="overflow-hidden h-24">
        This is a sample notes taken to avoid by taking all these data.
        sdfasjdkfna sdjfnasdkjfnsdi
        ufnfu4h.efijdbfjadbfasidhfnak.djsfnasjdkfnjasdnfasjdkfnakjs saf dfa adsf
        djsfnasjdkfnjasdnfasjdkfnakjsdf asf as
      </div>
    </div>
  );
};

function NotesList() {
  const [selectedTag, selectTag] = useState(0);

  const handleEnter = (e) => {
    if (e.keyCode !== 13) return;
    console.log("Enter Key Presses");
  };

  const handleSelect = (step) => () => {
    selectTag(step);
  };

  const cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 43, 54, 5, 2, 2, 3, 33, 3, 3, 3, 3, 3, 3, 33,
  ];

  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="h-full w-full-without-sidebar ">
        <div className="h-14 w-full shadow-md flex justify-center items-center">
          <input
            className="w-full max-w-lg pt-1 pb-1 pl-2 pr-2 border-gray-300 border-solid border-2 rounded-md focus:outline-none"
            placeholder="Search"
            onKeyDown={handleEnter}
          />
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 bg-gray-100 h-full-without-header w-full">
          <div className="flex justify-between items-center pl-2 pr-4">
            <div>
              <TagButton active={selectedTag === 0} onClick={handleSelect(0)}>
                All
              </TagButton>
              <TagButton active={selectedTag === 1} onClick={handleSelect(1)}>
                Projects
              </TagButton>
              <TagButton active={selectedTag === 2} onClick={handleSelect(2)}>
                Business
              </TagButton>
              <TagButton active={selectedTag === 3} onClick={handleSelect(3)}>
                Personal
              </TagButton>
            </div>

            <button className="flex items-center">
              <div className="text-4xl border-solid rounded-full border-primary border-2 h-6 w-6 leading-5 text-primary">
                +
              </div>
              <div className="ml-2 text-primary font-medium">Add new note</div>
            </button>
          </div>

          <div className="flex flex-wrap w-full overflow-y-scroll overflow-x-hidden max-h-full-without-header-tags mt-2">
            {cards.map((card, i) => (
              <Card key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesList;
