"use strict";

let store = document.querySelector(".store");

let openHours = [
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

let stores = [];

let randomCustPerHr = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

function City(city, minCust, maxCust, avgCookiePerCust) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.cookiesSoldPerHr = [];
  this.totalCookies = 0;

  stores.push(this);
}

new City("Seattle", 23, 65, 6.3);
new City("Tokyo", 3, 24, 1.2);
new City("Dubai", 11, 38, 3.7);
new City("Paris", 20, 38, 2.3);
new City("Lima", 2, 16, 4.6);

City.prototype.getCustPerHr = function () {
  let custPerHr = randomCustPerHr(this.minCust, this.maxCust);
  return custPerHr;
};

City.prototype.getCookiesSoldPerHr = () => {
  stores.forEach((s) => {
    openHours.forEach(() => {
      let custNum = s.getCustPerHr();
      let cookiePerHr = Math.ceil(custNum * s.avgCookiePerCust);
      // console.log(cookiePerHr);
      s.cookiesSoldPerHr.push(cookiePerHr);
      s.totalCookies += cookiePerHr;
    });
    // console.log(s.cookiesSoldPerHr);
    // console.log(s.totalCookies);
  });
};

City.prototype.render = () => {
  let table = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");
  let tableHeadRow = document.createElement("tr");
  let blankHead = document.createElement("th");
  let totalHead = document.createElement("th");

  table.className = "salmon-table";
  tableHead.className = "table-head";
  tableBody.className = "table-body";
  tableHeadRow.className = "table-times";
  blankHead.className = "table-head-blank";
  totalHead.className = "table-head-total";

  totalHead.textContent = "Total";

  tableHeadRow.appendChild(blankHead);
  tableHead.appendChild(tableHeadRow);
  table.appendChild(tableHead);
  table.appendChild(tableBody);

  for (let j = 0; j < openHours.length; j++) {
    let times = document.createElement("th");

    times.className = "table-hour";

    times.textContent = openHours[j];

    tableHead.appendChild(times);
    tableHeadRow.appendChild(times);
  }

  stores.forEach((i) => {
    let tableRow = document.createElement("tr");
    let location = document.createElement("th");
    let totalCookies = document.createElement("th");

    tableRow.className = "table-stores";
    location.className = "table-city";
    totalCookies.className = "table-city-total";

    totalCookies.textContent = `${i.totalCookies} `;
    location.textContent = i.city;

    tableRow.appendChild(location);

    for (let j = 0; j < openHours.length; j++) {
      let hrlyCookies = document.createElement("td");

      hrlyCookies.className = "table-hour-total";

      hrlyCookies.textContent = i.cookiesSoldPerHr[j];

      tableRow.appendChild(hrlyCookies);
    }

    tableRow.appendChild(totalCookies);
    tableBody.appendChild(tableRow);
    table.appendChild(tableBody);
    store.appendChild(table);
  });

  tableHeadRow.appendChild(totalHead);
};

for (let i = 0; i < 1; i++) {
  stores[i].getCookiesSoldPerHr();
  stores[i].render();
}
