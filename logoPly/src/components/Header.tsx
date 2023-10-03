function Header() {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "ABOUT",
    },
    {
      id: 3,
      name: "CONTACT",
    },
  ];
  return (
    <>
      <div className=" flex justify-between items-center py-2 px-6">
        <div className="">
          <img
            src="/public/images/logo.webp"
            alt=""
            className="w-32 md:w-[180px]"
          />
        </div>

        <div className="hidden md:flex md:gap-14">
          {menu.map((item) => (
            <div className="cursor-pointer font-medium hover:underline">
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="fixed bg-[#c5b78b] w-screen hidden">
        <ul className="m-5 text-center">
          {menu.map((item) => (
            <div className="cursor-pointer font-medium hover:underline p-5">
              <h2 className="">{item.name}</h2>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
