import {
  Link,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
  useMatches,
  Form,
} from "@remix-run/react";
import * as React from "react";
import zero from "~/assets/Logo.png";
import gear from "~/assets/Gear.png";
import notifs from "~/assets/Notifs.png";
import user from "~/assets/User.png";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const links = [
    {
      label: "Gear",
      url: "/gear",
    },
    {
      label: "Notifications",
      url: "/notifications",
    },
  ];

  return (
    <nav className="flex lg:grid lg:grid-cols-4 items-center justify-between md:py-10 md:max-w-[1184px] mx-auto">
      {/* Site Logo */}
      <div className="flex flex-1 justify-between items-center p-4 sm:p-8 lg:pl-0 col-span-1 lg:col-span-1">
        <Link to="/">
          <img src={zero} className="pl-4 md:pl-0 w-[70px] md:w-[100px]" />
        </Link>
        <div className="lg:hidden">
          <button className="outline-none p-2" onClick={() => setState(!state)}>
            {/* <Menu /> */}
          </button>

          {/* MENU MODAL */}
          <div
            className={`h-screen w-screen top-0 left-0 z-10 pb-3 overflow-hidden lg:hidden border-4 border-lime-500 ${
              state ? "absolute" : "hidden"
            }`}
          >
            <button
              className="outline-none absolute right-2 top-2 p-2"
              onClick={() => setState(!state)}
            >
              {/* <X /> */}
            </button>
            <div className="grid justify-center content-center items-center h-full">
              {/* <img
                src={zerow}
                className="pb-7 mx-auto text-center w-[40px] md:w-[150px]"
              /> */}
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.url}
                  className="block text-4xl py-4"
                  onClick={() => setState(!state)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          {/* MENU MODAL */}
        </div>
      </div>
      {/* Navigation Links */}
      <div className="hidden lg:flex md:pl-6 md:col-span-2 lg:col-span-2 justify-center ">
        <Form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
        </Form>
        <Form method="post">
          <button type="submit">Search</button>
        </Form>
      </div>
      <div className="flex ">
        <img src={gear} className="" />
        <img src={notifs} className="" />
        <img src={user} className="" />
      </div>
    </nav>
  );
}
