const Banner = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/images/Kingsglaive_Final_Fantasy_XV.jpg')",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Book Your Tickets for
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
