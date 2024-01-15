import Navbar from "../shared/Navbar";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="grid grid-cols-2 gap-20 items-center container">
        <div>
          <div className="space-y-3">
            <h2 className="text-white  text-xl">
              Welcome to Memorial Moments Magazine
            </h2>
            <h2 className="text-4xl text-white font-semibold">
              Unforgettable Moments,
              <br /> Endless Love
            </h2>
            <p className="text-white">
              We understand every funeral is different because every person
              isunique and each family situation is different.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-12">
            <img src="/images/Apple.png" className="w-40" alt="Banner" />
            <img src="/images/Google.png" className="w-40" alt="Banner" />
          </div>
        </div>
        <div>
          <img
            src="/images/mobile.png"
            className="ml-auto w-4/6"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
