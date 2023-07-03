const express = require('express');
const app = express();
const port = 4654;

const demoRedirects = {
  // 'sonicboom': 'https://demo.sam.gl/sonicboom',
  // 'hermes': 'https://hermes.example.com'
};

const codeRedirects = {
  'sonicboom': 'https://github.com/sam-gl/sonicboom',
  'hermes': 'https://github.com/sam-gl/hermes-react'
};

app.get('/', (req, res) => {
  if(demoRedirects[req.query?.demo]) {
    res.redirect(308, demoRedirects[req.query?.demo])
  } else if(codeRedirects[req.query?.code]) {
    res.redirect(308, codeRedirects[req.query?.code])
  } else {
    res.send('This is a redirect service for sam.gl');
  }
});

app.listen(port, () => {
  console.log(`SamGL Redirect app listening on port ${port}`)
});