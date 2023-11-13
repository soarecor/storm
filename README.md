# Storm

## Development

Steps to run the application locally from your terminal:

1. Clone the repository

2. Install dependencies

```sh
npm install
```

3. Run the application

```sh
npm run dev
```

This starts your app in development mode.

## Additional Notes

This app is built with Remix which is full stack web framework that uses web standards to deliver snappy user experiences. The main and only route lives in root.tsx.
The GET request to fetch products lives inside the `loader` function which makes the calls to the server. The API is handled in server.js.

Also,

- tailwindcss is used as the CSS framework, which has assisted with rapidly applying styles
- shadcn is used which has assisted with components such as the table, dialog and status badge
- radixui has come in handy for certain icons such as the sort chevron
