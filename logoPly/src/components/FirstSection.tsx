function FirstSection() {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen capitalize p-20">
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="/public/images/1.png"
            className="w-[300px] hidden md:block"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold">
            get an amazing logo for your startup in 60 seconds
          </h1>
          <p className="font-extralight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            officiis perspiciatis odit distinctio vitae.
          </p>

          <div className="pt-10">
            <input
              className="bg-gray-200 md:p-4 p-2 rounded-md outline-none"
              type="email"
              id="email"
              name="email"
              placeholder="Write Your Email"
            />
            <button className="bg-[#7f784e] text-white md:p-3 p-2 md:text-base lg:text-lg rounded-md">
              Notify me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
