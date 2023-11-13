import * as React from "react";
import { Form, useSubmit } from "@remix-run/react";
import search from "~/assets/search.png";

export default function SearchForm({ q }) {
  // the search query string is stored in state
  const [query, setQuery] = React.useState(q || "");

  // useEffect synchronizes the search query string to the value in the form search input
  React.useEffect(() => {
    setQuery(q || "");
  }, [q]);
  const submit = useSubmit();

  return (
    <Form
      id="search-form"
      className="flex justify-between sm:justify-start lg:justify-between relative"
      role="search"
    >
      <input
        id="q"
        className="border-solid border-2 border-[#DCDFE3] p-3 mr-3 rounded-sm w-[60vw] lg:w-[264px] text-sm"
        aria-label="Search products"
        placeholder="&#x1F50D; Search"
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
  );
}
