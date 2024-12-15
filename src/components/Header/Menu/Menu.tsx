const Menu = () => {
  return (
    <button className="flex items-center py-2 px-3 space-x-2 font-matteo border border-[#DDDDDD]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span className="uppercase tracking-widest">Menu</span>
    </button>
  );
};

export default Menu;
