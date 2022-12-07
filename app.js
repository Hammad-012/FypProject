const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();
app.use(cors());
const disciplines = JSON.parse(fs.readFileSync(`${__dirname}/data/disciplines.json`, 'utf-8'));
console.log(disciplines)
const cities = JSON.parse(fs.readFileSync(`${__dirname}/data/Cities.json`, 'utf-8'));
const universities = JSON.parse(fs.readFileSync(`${__dirname}/data/universities.json`, 'utf-8'));
const UniversityAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/UniversityAdmissionAdvertisement.json`, 'utf-8'));
const IslamabadAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/IslamabadAdmissionAdvertisement.json`, 'utf-8'));
const LahoreAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/LahoreAdmissionAdvertisement.json`, 'utf-8'));
const FaislabadAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/FaislabadAdmissionAdvertisement.json`, 'utf-8'));
const RawalpindiAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/RawalpindiAdmissionAdvertisement.json`, 'utf-8'));
const MultanAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/MultanAdmissionAdvertisement.json`, 'utf-8'));
const RahimYarKhanAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/RahimYarKhanAdmissionAdvertisement.json`, 'utf-8'));
const AbottabadAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/AbottabadAdmissionAdvertisement.json`, 'utf-8'));
const BhawalPurAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/BhawalPurAdmissionAdvertisement.json`, 'utf-8'));
const WaahCantAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/WaahCantAdmissionAdvertisement.json`, 'utf-8'));
const SargodhaAdmissionAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/SargodhaAdmissionAdvertisement.json`, 'utf-8'));
const ScholarshipAdvertisement = JSON.parse(fs.readFileSync(`${__dirname}/data/ScholarshipAdvertisement.json`, 'utf-8'));
console.log(ScholarshipAdvertisement)
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
app.get('/UniversityAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', UniversityAdmissionAdvertisement})
})
app.get('/IslamabadAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', IslamabadAdmissionAdvertisement})
})
app.get('/LahoreAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', LahoreAdmissionAdvertisement})
})
app.get('/FaislabadAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', FaislabadAdmissionAdvertisement})
})
app.get('/RawalpindiAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', RawalpindiAdmissionAdvertisement})
})
app.get('/MultanAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', MultanAdmissionAdvertisement})
})
app.get('/RahimYarKhanAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', RahimYarKhanAdmissionAdvertisement})
})
app.get('/AbottabadAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', AbottabadAdmissionAdvertisement})
})
app.get('/BhawalPurAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', BhawalPurAdmissionAdvertisement})
})
app.get('/WaahCantAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', WaahCantAdmissionAdvertisement})
})
app.get('/SargodhaAdmissionAdvertisement', (req, res) => {
  res.status(200).json({status: 'success', SargodhaAdmissionAdvertisement})
})
app.get('/ScholarshipAdvertisement', (req, res) => {
  console.log('hello world')
  res.status(200).json({status: 'success', ScholarshipAdvertisement})
})
app.listen(8000, () => {
    console.log('app is listening on port 8000');
})