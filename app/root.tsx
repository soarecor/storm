import {
  Form,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { json } from "@remix-run/node";

import Navbar from "~/components/navbar";
import ProductTable from "~/components/table";
import styles from "./tailwind.css";
import { getProducts } from "./server";

export const loader = async () => {
  const products = await getProducts();
  return json({ products });
};

export default function App() {
  const { products } = useLoaderData();
  // console.log(products);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <ProductTable products={products} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
