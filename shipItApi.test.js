"use strict";

const {
  shipProduct, SHIPIT_SHIP_URL } = require("./shipItApi");



const AxiosMockAdapter = require("axios-mock-adapter");
const axios = require('axios');
const axiosMock = new AxiosMockAdapter(axios);


test("shipProduct", async function () {

  axiosMock.onPost(`${SHIPIT_SHIP_URL}`, {
    itemId: 1500,
    name: "Dan",
    addr: "100 Test St",
    zip: "12345",
    key: "SECRET"
  }).reply(200, {
    receipt: {
      itemId: 1500,
      name: "Dan",
      addr: " 100 Test St",
      zip: "12345",
      key: "SECRET",
      shipId: 111
    }

  });
  const res = await shipProduct(1500, "Dan", "100 Test St", "12345");
  expect(res).toEqual({
    receipt: {
      itemId: 1500,
      name: "Dan",
      addr: "100 Test St",
      zip: "12345",
      shipId: 111
    }
  });
});

  // expect(shipId).toEqual(expect.any(Number));

