const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


const urls = [93, 11, 87, 47, 71, 73, 3, 7, 10, 97, 99, 39, 19, 83, 52, 75, 27, 17, 43, 85, 74, 12, 51, 16, 60, 66, 18, 58, 55, 88, 2, 9, 30, 72, 92, 1, 78, 28, 96, 69, 40, 84, 36, 49, 68, 41, 95, 38, 67, 15, 22, 13, 34, 23, 61, 90, 48, 14, 82, 81, 65, 64, 57, 44, 4, 37, 25, 91, 77, 20, 89, 33, 8, 63, 54, 56, 80, 76, 86, 45, 100, 6, 5, 98, 32, 70, 35, 79, 42, 50, 31, 21, 59, 29, 53, 62, 94, 46, 26, 24];

const urlMap = urls.reduce((result, val, index, arr) => ({
  ...result,
  [val]: arr[index + 1]
}), {});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.json({ next: `/${urlMap[urls[0]]}` });
});

app.get('/:id', (req, res) => {
  const next = urlMap[req.params.id];
  if (!next) {
    res.json({ next: 'done' });
  }
  res.json({ next: `/${urlMap[req.params.id]}` });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
