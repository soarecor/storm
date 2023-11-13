import {
  Link,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
  useMatches,
  Form,
  useSubmit,
} from "@remix-run/react";
import * as React from "react";
import logo from "~/assets/Logo.png";
import gear from "~/assets/Gear.png";
import notifs from "~/assets/Notifs.png";
import user from "~/assets/User.png";
import menu from "~/assets/menu.png";
import SearchForm from "./search-form";

export default function Navbar({ q }) {
  return (
    <nav className="flex lg:grid lg:grid-cols-4 items-center justify-between lg:py-10 lg:max-w-[1184px] mx-auto px-4 mt-4 lg:mt-0">
      {/* Site Logo */}
      <div className="flex flex-1 justify-between items-center py-4 sm:py-8 lg:pl-0 col-span-1 lg:col-span-1">
        <Link to="/">
          <img src={logo} className="w-[210px]" />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="hidden lg:flex lg:pl-6 lg:col-span-2 lg:col-span-2 justify-center ">
        <SearchForm q={q} />
      </div>
      <div className="lg:flex justify-end hidden">
        <img src={gear} className="" />
        <img src={notifs} className="" />
        <span className="flex items-center">
          <img src={user} className="" />
          <span className="text-[#605DEC]">Adriana Arias</span>
        </span>
      </div>
      <div className="lg:hidden justify-end flex pr-4">
        <img src={menu} className="" />
      </div>
    </nav>
  );
}
