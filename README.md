# Storm

## Requirements

Node v18 or above

## Development

Steps to run the application locally from your terminal:

1. Clone the repository

2. Install dependencies in the root directory of the local project

```sh
npm install
```

3. Run the application

```sh
npm run dev
```

This starts your app in development mode.

## Troubleshooting

The app requires Node v18 or above to run successfully. If there are any issues with dependencies due to an older version of Node during install, it is recommended to remove the node modules folder and run `npm install` again in the root directory for a clean install.

## Additional Notes

This app is built with Remix which is full stack web framework that uses web standards to deliver snappy user experiences. The main and only route lives in `app/root.tsx`.
The GET request to fetch products lives inside the `loader` function which makes the calls to the server. The API is handled in `app/server.js`.

Also,

- tailwindcss is used as the CSS framework, which has assisted with rapidly applying styles
- shadcn is used which has assisted with components such as the table, dialog and status badge
- radixui has come in handy for certain icons such as the sort chevron
