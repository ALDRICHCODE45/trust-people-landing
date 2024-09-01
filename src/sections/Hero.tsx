import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <>
      <section
        className="h-[492px]  md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent]"
        style={{ backgroundImage: `url(${starsBg.src})` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
        <div
          className="absolute md:h-96 md:w-96 h-64 w-64 rounded-full border border-white/20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0px_0px_50px_rgb(140,69,255)] "
          style={{
            background: `radial-gradient(50% 50% at 16.8% 18.3%,white,rgb(184,148,255)37.7%,rgb(24,0,66))`,
          }}
        />
        <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
          <div className="absolute h-2 w-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2  left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-5 w-5  inline-flex items-center justify-center left-full border border-white  rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </div>
        <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20  top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 border-dashed"></div>

        <div className="absolute h-[544px] w-[544px] md:h-[980px]  md:w-[980px] rounded-full border border-white/20  top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 ">
          <div className="absolute h-2 w-2  left-0 bg-white rounded-full opacity-20 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2  left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container relative mt-16  ">
          <h1 className="text-6xl  md:text-[168px] md:leading-none font-semibold tracking-tighter bg-gradient-to-r from-white to-indigo-300 text-transparent bg-clip-text text-center">
            Trust People Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/70 mt-5 text-center  mx-auto max-w-xl">
            We are committed to professionalizing high-profile hunting, making
            you live the best end-to-end experience to impact the results of
            your organization.
          </p>
          <div className="flex justify-center mt-5">
            <Button title="Únete" />
          </div>
        </div>
      </section>
    </>
  );
};
