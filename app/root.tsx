import {
  Form,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Navbar from "~/components/navbar";
import styles from "./tailwind.css";

export default function App() {
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

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  // {
  //   rel: "stylesheet",
  //   href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
  // },
  { rel: "stylesheet", href: styles },
];
