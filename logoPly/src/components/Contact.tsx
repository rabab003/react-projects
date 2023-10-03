function Contact() {
  return (
    <>
      <div className="lg:h-screen flex flex-col justify-around">
        <h2 className=" py-20 lg:pb-1 text-center text-[#756f47] font-bold text-5xl ">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-around m-10">
          <div className="md:w-1/2 flex justify-between items-center md:h-screen">
            <div>
              <h1 className="text-4xl font-extrabold pb-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                maxime
              </h1>
              <p className="font-bold text-2xl">
                name : <span className="font-light"> rabab qasim</span>
              </p>
              <p className="font-bold text-2xl">
                address :<span className="font-light"> new york , USA</span>
              </p>
              <p className="font-bold text-2xl">
                Phone :<span className="font-light"> +964 07840971013</span>
              </p>
              <p className="font-bold text-2xl">
                hours :<span className="font-light"> 6:00 am - 2:00 am</span>
              </p>
              <p className="font-bold text-2xl">
                Email :
                <span className="font-light"> qasimrabab021@gmail.com</span>
              </p>
            </div>
          </div>

          <div className="md:w-2/5 flex flex-col bg-[#807b51] p-10 mt-12 items-center rounded-3xl ">
            <h1 className="text-white text-3xl mb-12">send a massage :</h1>
            <input
              placeholder="write you name"
              className="mb-8 p-2 outline-none"
              type="name"
            />{" "}
            <input
              placeholder="write your email"
              className="mb-8 p-2 outline-none"
              type="email"
            />
            <textarea
              placeholder="message"
              className="mb-8 py-6 px-5 outline-none"
            />
            <button className="bg-[#86b597] rounded-3xl p-2">submite</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
