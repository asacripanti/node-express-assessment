const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/', async(req, res, next) => {
  try {
    const developers = req.body.developers;

    // Map over the array of developers and fetch their data asynchronously
    const results = await Promise.all(
      developers.map(async (d) => {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return response.data;
      })
    );

    // Map over the results and extract the relevant information
    const out = results.map((r) => ({ name: r.name, bio: r.bio }));

    return res.json(out);
  } catch (err) {
    next(err);
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch {
//     next(err);
//   }
// });