const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();
app.use(cors());
const disciplines = JSON.parse(fs.readFileSync(`${__dirname}/data/disciplines.json`, 'utf-8'));
console.log(disciplines)
const cities = JSON.parse(fs.readFileSync(`${__dirname}/data/Cities.json`, 'utf-8'));
const universities = JSON.parse(fs.readFileSync(`${__dirname}/data/universities.json`, 'utf-8'));

app.use(express.json());
app.get('/disciplines', (req, res) => {
  res.status(200).json({status: 'success', disciplines})
})
app.get('/Cities', (req, res) => {
  res.status(200).json({status: 'success', cities})
})
app.get('/universities', (req, res) => {
  res.status(200).json({status: 'success', universities})
})
app.listen(8000, () => {
    console.log('app is listening on port 8000');
})