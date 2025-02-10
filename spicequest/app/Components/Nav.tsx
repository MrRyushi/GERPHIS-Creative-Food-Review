import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      {/* Nav Bar */}
      <nav className="flex justify-between items-center bg-[#0C0C0C] p-4 md:pe-20 lg:pe-28 md:ps-20 xl:pe-36 lg:ps-28 xl:ps-36 h-1/4 text-white w-screen">
        <Link href="/" className="dm-serif-text text-xl">
          SpiceQuest
        </Link>
        <div className="space-x-12 figtree">
          <Link
            href="/countries"
            className="hover:underline underline-offset-4"
          >
            Countries
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
