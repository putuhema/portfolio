const Card = ({ w, h, img }: { w?: number; h: number; img: string }) => {
  return (
    <div
      className={`${
        !w ? "w-full" : `w-[${w}px]`
      } h-[${h}px] relative overflow-hidden group `}
    >
      <div className="w-full h-full">
        <img src={img} alt="thumbnail" />
      </div>
      <div className="block bg-black/50 text-white absolute inset-0 translate-y-full transition-all duration-500 group-hover:translate-y-0 p-4 backdrop-blur-sm">
        <p className="font-bold text-lg">Calculator</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
          praesentium?
        </p>
        <a href="#a" className="underline">
          <i>check repo</i>
        </a>
      </div>
    </div>
  );
};

export default Card;
