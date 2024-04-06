import Navbar from "../../shared/Navbar";

const Banner = () => {
  return (
    <div className="banner h-auto lg:h-[900px]">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-44 p-4 container">
        <div className="order-1 lg:order-2">
          <img
            src="/images/dove.png"
            className="lg:hidden  w-full mb-5"
            alt="Banner"
          />
        </div>

        <div className="order-2 lg:order-2">
          <div className="space-y-3">
            <h2 className="text-white text-xl lg:text-5xl">
              Welcome to <br /> Memorial Moments Magazine
            </h2>
            <h2 className="text-3xl lg:text-5xl text-white font-semibold">
              Unforgettable Moments, Endless Love
            </h2>
            <p className="text-white text-xl">
              We understand every funeral is different because every person
              isunique and each family situation is different.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <a href="#">
              <img src="/images/Apple.png" className="w-40" alt="Banner" />
            </a>
            <a href="#">
              <img src="/images/Google.png" className="w-40" alt="Banner" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
