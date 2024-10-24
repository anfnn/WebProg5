const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

const {
  getExpectationsData,
  postExpectationsData,
} = require("../controllers/ExpectatiosDataController");

router.route("/expectations").get(getExpectationsData).post(postExpectationsData);

const {
  getRegistrationData,
  postRegistrationData,
} = require("../controllers/RegistrationDataController");

router.route("/registration").get(getRegistrationData).post(postRegistrationData);


const {
  getNewsData,
  postNewsData,
} = require("../controllers/NewsDataController");

router.route("/News").get(getNewsData).post(postNewsData);


const {
  getMany_newsData,
  postMany_newsData,
} = require("../controllers/Many_newsDataController");

router.route("/many_news").get(getMany_newsData).post(postMany_newsData);

const {
  getFooterData,
  postFooterData,
} = require("../controllers/footerDataController");

router.route("/footer").get(getFooterData).post(postFooterData);

module.exports = router;
