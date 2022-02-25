import express from 'express';
import groupByName from '@testorama/superlib'

const app = express();

const data = groupByName([{a:1}]);

app.get('*', (req, res) => {
  res.json(data);
});

app.listen(3000);