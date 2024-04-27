# Castles & Crusades Treasure Generator
A treasure generator for the table top RPG: Castles and Crusades.

Based on the treasure tables in the Fourth Printing of "Castles and Crusades Monsters and Treasure" (but it should work for the 5th edition too)

## Development

Install the dependencies...

```bash
cd cnc-treasure-generator
npm install
```

...then start the server:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

### Building and hosting

To create an optimised version of the app:

```bash
npm run build
```

You can upload the updated `public` folder wherever you'd like to host the treasure tracker.

---

To test that the production build is working locally, you can run a local `serve` using the following command:

```bash
npm start
```

This will start up a server pointing to the `public` directory on `localhost:5000`