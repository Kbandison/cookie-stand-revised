"use strict";

let store = document.querySelector(".store");

let table = document.createElement("table");
let tableHead = document.createElement("thead");
let tableBody = document.createElement("tbody");
let tableFoot = document.createElement("tfoot");

let storeForm = document.querySelector(".store-form");
let formLocation = document.querySelector(".form-location input");
let formMin = document.querySelector(".min input");
let formMax = document.querySelector(".max input");
let formAvg = document.querySelector(".avg input");
let formSubmit = document.querySelector(".form-button");

table.className = "salmon-table";

store.appendChild(table);

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

let hourlyTotals = [];

let overAllTotal = 0;

let result;

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

/*******Function to get customers Per Hour*******/
City.prototype.getCustPerHr = function () {
  let custPerHr = randomCustPerHr(this.minCust, this.maxCust);
  return custPerHr;
};

/*******Function to calculate cookies sold per hour*******/
City.prototype.getCookiesSoldPerHr = function () {
  openHours.forEach(() => {
    let custNum = this.getCustPerHr();
    let cookiesSold = Math.floor(custNum * this.avgCookiePerCust);
    this.cookiesSoldPerHr.push(cookiesSold);

    this.totalCookies += cookiesSold;
  });
  hourlyTotals.push(this.cookiesSoldPerHr);
};

/*******Function to calculate total cookies sold for all stores per hour*******/
City.prototype.getStoreTotals = function () {
  let hourlyTotal = 0;
  let hourlyArr = [];

  result = hourlyTotals.reduce((a, b) => a.map((c, i) => c + b[i]));

  for (let i = 0; i < result.length; i++) {
    overAllTotal += result[i];
  }
};

/*******Function to Render the Header*******/
City.prototype.renderHeader = function () {
  let tableHeadRow = document.createElement("tr");

  let blankHead = document.createElement("th");
  let totalHead = document.createElement("th");

  tableHead.className = "table-head";
  blankHead.className = "table-head-blank";
  totalHead.className = "table-head-total";

  totalHead.textContent = "Day Total";

  tableHeadRow.appendChild(blankHead);

  openHours.forEach((e, i) => {
    let times = document.createElement("th");

    times.className = "table-hour";

    times.textContent = openHours[i];

    tableHeadRow.appendChild(times);
  });

  tableHeadRow.appendChild(totalHead);
  tableHead.appendChild(tableHeadRow);
  table.appendChild(tableHead);
};

/*******Function to render the body*******/
City.prototype.renderBody = function () {
  tableBody.className = "table-body";

  let tableRow = document.createElement("tr");
  let locations = document.createElement("th");
  let totalCookies = document.createElement("th");

  locations.textContent = this.city;
  totalCookies.textContent = this.totalCookies;

  tableRow.appendChild(locations);

  this.cookiesSoldPerHr.forEach((e, i) => {
    let hrlyCookies = document.createElement("td");
    hrlyCookies.textContent = e;
    tableRow.appendChild(hrlyCookies);
  });

  tableBody.className = "table-body";

  tableRow.appendChild(totalCookies);
  tableBody.appendChild(tableRow);
  table.appendChild(tableBody);
};

/*******Function to render the footer*******/

City.prototype.renderFooter = function () {
  tableFoot.className = "table-footer";

  let totalRow = document.createElement("tr");
  let hourlyTotalHead = document.createElement("th");

  let overallTotal = document.createElement("th");

  overallTotal.className = "overall-total";

  hourlyTotalHead.textContent = "Hour Total";

  overallTotal.textContent = overAllTotal;

  totalRow.appendChild(hourlyTotalHead);

  result.forEach((r, i) => {
    let hourTotal = document.createElement("th");
    hourTotal.textContent = result[i];
    totalRow.appendChild(hourTotal);
  });

  totalRow.appendChild(overallTotal);
  tableFoot.appendChild(totalRow);
  table.appendChild(tableFoot);
};

/*******Function calls for rendering the entire table*******/
stores[0].renderHeader();
for (let i = 0; i < stores.length; i++) {
  stores[i].getCookiesSoldPerHr();

  stores[i].renderBody();
}

for (let i = 0; i < 1; i++) {
  stores[i].getStoreTotals();
}
stores[0].renderFooter();

let newCity = (e) => {
  e.preventDefault();

  let cityMin = Number(formMin.value);
  let cityMax = Number(formMax.value);
  let cityAvg = Number(formAvg.value);

  new City(formLocation.value, cityMin, cityMax, cityAvg);

  table.deleteTFoot();

  // stores[stores.length - 1].getCookiesSoldPerHr();
  // stores[stores.length - 1].getStoreTotals();
  // stores[stores.length - 1].renderBody();
  // stores[0].renderFooter();

  // console.log(stores);

  // storeForm.reset();
};

storeForm.addEventListener("submit", newCity);
