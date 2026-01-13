import Marquee from "react-fast-marquee";

const InfiniteScroll: React.FC = () => {
  return (
    <Marquee pauseOnHover={true} autoFill={true} speed={70}>
      <div
        className="h-[55px] w-[130px] rounded-lg bg-white/50 p-2 md:h-[50px] md:w-[150px] md:rounded-xl md:p-4 
         lg:rounded-2xl lg:p-3"
      >
        <img
          alt="logo"
          src="/img/logo1.png"
          className="h-full w-full object-contain"
        />
      </div>
      <div
        className="h-[55px] w-[130px] rounded-lg bg-white/50 p-2 md:h-[50px] md:w-[150px] md:rounded-xl md:p-4 
         lg:rounded-2xl lg:p-3"
      >
        <img
          alt="logo"
          src="/img/logo2.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="h-[55px] w-[130px] rounded-lg bg-white/50 p-2 md:h-[50px] md:w-[150px] md:rounded-xl md:p-4 
       lg:rounded-2xl lg:p-3"
      >
        <img
          alt="logo"
          src="/img/logo3.png"
          className="h-full w-full object-contain"
        />
      </div>
      <div
        className="h-[55px] w-[130px] rounded-lg bg-white/50 p-2 md:h-[50px] md:w-[150px] md:rounded-xl md:p-4 
         lg:rounded-2xl lg:p-3"
      >
        <img
          alt="logo"
          src="/img/logo4.png"
          className="h-full w-full object-contain"
        />
      </div>
      <div
        className="h-[55px] w-[130px] rounded-lg bg-white/50 p-2 md:h-[50px] md:w-[150px] md:rounded-xl md:p-4 
         lg:rounded-2xl lg:p-3"
      >
        <img
          alt="logo"
          src="/img/logo5.png"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="h-[55px] w-[130px] rounded-lg bg-white/50 p-2 md:h-[50px] md:w-[150px] md:rounded-xl md:p-4 
       lg:rounded-2xl lg:p-3"
      >
        <img
          alt="logo"
          src="/img/logo1.png"
          className="h-full w-full object-contain"
        />
      </div>
      <div
        className="h-[55px] w-[130px] rounded-lg bg-white/50 p-2 md:h-[50px] md:w-[150px] md:rounded-xl md:p-4 
         lg:rounded-2xl lg:p-3"
      >
        <img
          alt="logo"
          src="/img/logo4.png"
          className="h-full w-full object-contain"
        />
      </div>
    </Marquee>
  );
};

export default InfiniteScroll;
