"use strict";

let store = document.querySelector(".store");
let storeForm = document.querySelector(".store-form");
let formLocation = document.querySelector(".form-location input");
let formMin = document.querySelector(".min input");
let formMax = document.querySelector(".max input");
let formAvg = document.querySelector(".avg input");
let formSubmit = document.querySelector(".form-button");

let table = document.createElement("table");

let tableHead = document.createElement("thead");
let tableHeadRow = document.createElement("tr");

let tableBody = document.createElement("tbody");
let blankHead = document.createElement("th");
let totalHead = document.createElement("th");

let tableFoot = document.createElement("tfoot");
let totalRow = document.createElement("tr");
let hourlyTotalHead = document.createElement("th");
let overallTotal = document.createElement("th");

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

console.log(stores);

let newCity = (e) => {
  e.preventDefault();

  let cityMin = Number(formMin.value);
  let cityMax = Number(formMax.value);
  let cityAvg = Number(formAvg.value);

  new City(formLocation.value, cityMin, cityMax, cityAvg);

  // new City("Lima", 2, 16, 4.6);
  console.log(stores);
};

storeForm.addEventListener("submit", newCity);

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
    hourlyTotals.push(s.cookiesSoldPerHr);
    // console.log(s.totalCookies);
  });
  // console.log(hourlyTotals);
};

City.prototype.getStoreTotals = () => {
  let hourlyTotal = 0;
  let hourlyArr = [];
  // console.log(hourlyTotals);

  stores.forEach((s, i) => {
    result = hourlyTotals.reduce((a, b) => a.map((c, i) => c + b[i]));

    s.cookiesSoldPerHr.forEach((c) => {
      overAllTotal += c;
    });
    // console.log(s.cookiesSoldPerHr);
    // console.log(overAllTotal);
  });

  // console.log(result);
};

City.prototype.render = () => {
  table.className = "salmon-table";
  tableHead.className = "table-head";
  tableFoot.className = "table-footer";
  hourlyTotalHead.className = "hourly-total-head";
  tableBody.className = "table-body";
  tableHeadRow.className = "table-times";
  blankHead.className = "table-head-blank";
  totalHead.className = "table-head-total";
  overallTotal.className = "overall-total";

  totalHead.textContent = "Day Total";
  hourlyTotalHead.textContent = "Hour Total";

  totalRow.appendChild(hourlyTotalHead);

  tableHeadRow.appendChild(blankHead);
  tableHead.appendChild(tableHeadRow);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  table.appendChild(tableFoot);

  for (let j = 0; j < openHours.length; j++) {
    let times = document.createElement("th");
    let hourTotal = document.createElement("th");

    times.className = "table-hour";
    hourTotal.className = "hour-total";

    times.textContent = openHours[j];
    overallTotal.textContent = overAllTotal;

    tableHead.appendChild(times);
    tableHeadRow.appendChild(times);

    hourTotal.textContent = result[j];
    totalRow.appendChild(hourTotal);
  }

  stores.forEach((i) => {
    let tableRow = document.createElement("tr");
    let location = document.createElement("th");
    let totalCookies = document.createElement("th");

    tableRow.className = "table-stores";
    location.className = "table-city";
    totalCookies.className = "table-city-total";

    totalCookies.textContent = i.totalCookies;
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

  totalRow.appendChild(overallTotal);

  tableFoot.appendChild(totalRow);

  tableHeadRow.appendChild(totalHead);
};
// console.log("Bottom" + totalFromEachHour);

for (let i = 0; i < 1; i++) {
  stores[i].getCookiesSoldPerHr();
  stores[i].getStoreTotals();
  stores[i].render();
}
