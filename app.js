"use strict";

let store = document.querySelector(".store");

let openHours = [
  "6:00",
  "7:00",
  "8:00",
  "9:00, 10:00",
  "11:00, 12:00",
  "13:00, 14:00",
  "15:00, 16:00",
  "17:00, 18:00",
  "19:00",
];

let randomCustPerHr = (min, max) =>
  Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);

let seattle = {
  name: "seattle",
  min: 23,
  max: 65,
  avg: 6.3,
  hours: openHours,
  getCustPerHr: function () {
    this.custPerHr = randomCustPerHr(this.min, this.max);
    console.log(this.custPerHr);
  },
};

let tokyo = {
  name: "tokyo",
  min: 3,
  max: 24,
  avg: 1.2,
  hours: openHours,
};

let dubai = {
  name: "dubai",
  min: 11,
  max: 38,
  avg: 3.7,
  hours: openHours,
};

let paris = {
  name: "paris",
  min: 20,
  max: 38,
  avg: 2.3,
  hours: openHours,
};

let lima = {
  name: "lima",
  min: 2,
  max: 16,
  avg: 4.6,
  hours: openHours,
};
