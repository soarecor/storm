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
import zero from "~/assets/Logo.png";
import gear from "~/assets/Gear.png";
import notifs from "~/assets/Notifs.png";
import user from "~/assets/User.png";

export default function Navbar({ q }) {
  const [state, setState] = React.useState(false);

  // the search query string is stored in state
  const [query, setQuery] = React.useState(q || "");

  // useEffect synchronizes the search query string to the search input
  React.useEffect(() => {
    setQuery(q || "");
  }, [q]);

  const submit = useSubmit();

  return (
    <nav className="flex lg:grid lg:grid-cols-4 items-center justify-between md:py-10 md:max-w-[1184px] mx-auto">
      {/* Site Logo */}
      <div className="flex flex-1 justify-between items-center p-4 sm:p-8 lg:pl-0 col-span-1 lg:col-span-1">
        <Link to="/">
          <img src={zero} className="pl-4 md:pl-0 w-[70px] md:w-[210px]" />
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="hidden lg:flex md:pl-6 md:col-span-2 lg:col-span-2 justify-center ">
        <Form id="search-form" role="search">
          <input
            id="q"
            className="border-solid border-2 border-[#DCDFE3] p-3 mr-3 rounded-sm w-[264px] text-sm"
            aria-label="Search products"
            placeholder="Search"
            type="text"
            // the regex pattern here will only allow letters, numbers and spaces
            pattern="[a-zA-Z0-9\s]+"
            name="q"
            defaultValue={q || ""}
            // on hover the user is presented with this tooltip
            title="Please enter only letters and numbers"
          />
          <button
            onClick={submit}
            className="border-solid border-2 border-[#605DEC] py-3 px-6 bg-[#605DEC] rounded-sm text-[#fff] text-sm"
          >
            Search
          </button>
        </Form>
      </div>
      <div className="flex justify-end">
        <img src={gear} className="" />
        <img src={notifs} className="" />
        <img src={user} className="" />
      </div>
    </nav>
  );
}
