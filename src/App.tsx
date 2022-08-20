import Card from "./components/Card";
import Navbar from "./components/navbar";
import Tab from "./components/tab";

import profile from "./img/prof.png";
import web from "./img/web.png";

function App() {
  return (
    <main className="">
      <div className="px-20">
        <Navbar />
        <div>
          <h1 className="text-[7rem] font-bold">ウェブ開発者</h1>
          <h4 className="tracking-[.8rem]">WEB DEVELOPER</h4>
          <div className="flex">
            <div className="group w-[422px] h-[422px] relative overflow-hidden">
              <img
                className="w-[422px] h-[422px] mt-2 mr-2 group-hover:opacity-80 transition-all"
                src={profile}
                alt="putu mahendra"
              />
              <div className="absolute inset-0 transition-all text-white group-hover:grid items-center justify-center hidden font-bold text-xl">
                <p>{new Date().getFullYear() - 1999}yo</p>
              </div>
            </div>
            <Tab />
          </div>
        </div>
      </div>
      <div className="h-full bg-black mt-4 px-20">
        <h2 className="text-white uppercase tracking-[.8rem] pt-4">My Works</h2>
        {/* cards */}
        <div className="flex mt-4 gap-4 justify-between">
          <Card h={200} img={web} />
          <div className="w-full h-[200px] border border-white"></div>
          <div className="w-full h-[200px] border border-white"></div>
        </div>
        <div className="flex mt-4 gap-4 justify-between">
          <div className="w-full h-[200px] border border-white"></div>
          <div className="w-full h-[200px] border border-white"></div>
          <div className="w-full h-[200px] border border-white"></div>
        </div>
      </div>
      <footer id="contact" className=" bg-black px-20 py-8">
        <h2 className="text-white uppercase tracking-[.8rem] pt-8">Contact</h2>
        {/* add copy to clipboard functionality */}
        <p className="text-white mt-2">putuhendramahendra@gmail.com</p>
      </footer>
    </main>
  );
}

export default App;
