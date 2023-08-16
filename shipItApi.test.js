"use strict";

const {
  shipProduct, SHIPIT_SHIP_URL} = require("./shipItApi");



const AxiosMockAdapter = require("axios-mock-adapter");
const axios = require('axios');
const axiosMock = new AxiosMockAdapter(axios);


test("shipProduct", async function () {
  // const shipId = await shipProduct({
  //   productId: 1000,
  //   name: "Test Tester",
  //   addr: "100 Test St",
  //   zip: "12345-6789",

  axiosMock.onPost(`${SHIPIT_SHIP_URL}`)


  });

  // expect(shipId).toEqual(expect.any(Number));
});
