import { Parallax } from "react-parallax";

const Cover = ({ image, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -35, max: 25 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
