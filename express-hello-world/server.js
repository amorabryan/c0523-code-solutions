import express from 'express';

const app = express();
app.use((req, res, next) => {
  console.log(req.method);
  res.send('New Log');
});

app.listen(8080, () => {
  console.log('server is listening');
});
