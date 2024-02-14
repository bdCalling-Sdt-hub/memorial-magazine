const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center text-center bg-white">
      <div>
        <img className="w-96" src="/images/notFound.png" alt="" />
        <h2 className="text-8xl font-bold ">404</h2>
        <p className="text-gray-300">
          Powered by <a href="https://saifulportfolio.netlify.app/">Fahim</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
