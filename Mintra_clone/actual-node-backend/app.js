  // import express from 'express';
  // import bodyParser from 'body-parser';
  // import { DEFAULT_ITEMS } from './data/items.js';

  // const app = express();

  // app.use(bodyParser.json());

  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  //   next();
  // });

  // app.get('/items', async (req, res) => {
  //   const storedItems = await getStoredItems();
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   res.json({ items: storedItems });
  // });

  // app.get('/items/:id', async (req, res) => {
  //   const storedItems = await getStoredItems();
  //   const item = storedItems.find((item) => item.id === req.params.id);
  //   res.json({ item });
  // });

  // app.post('/items', async (req, res) => {
  //   const existingItems = await getStoredItems();
  //   const itemData = req.body;
  //   const newItem = {
  //     ...itemData,
  //     id: Math.random().toString(),
  //   };
  //   const updatedItems = [newItem, ...existingItems];
  //   await storeItems(updatedItems);
  //   res.status(201).json({ message: 'Stored new item.', item: newItem });
  // });

  // app.listen(8080, () => {
  //   console.log('✅ Server running on http://localhost:8080');
  // });
import express from 'express';
import bodyParser from 'body-parser';
import { DEFAULT_ITEMS } from './data/items.js';

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ✅ Add artificial delay of 2 seconds before sending items
app.get('/items', async (req, res) => {
  console.log('Fetching items...');

  // delay function using Promise
  await new Promise((resolve) => setTimeout(resolve, 4000));

  console.log('Sending items after 2 seconds delay');
  res.json({ items: DEFAULT_ITEMS });
});

app.get('/items/:id', (req, res) => {
  const item = DEFAULT_ITEMS.find((i) => i.id === req.params.id);
  res.json({ item });
});

app.listen(8080, () => {
  console.log('✅ Server running on http://localhost:8080');
});
