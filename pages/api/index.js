import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.send('MY REQUEST');
  })
  .post((req, res) => {
    res.json({ message: 'posted' });
  });

export default handler;
