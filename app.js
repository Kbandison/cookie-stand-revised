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

let randomCustPerHr = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

let City = (city, minCust, maxCust, avgCookiePerCust) => {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.cookiesSoldPerHr = [];
  this.totalCookies = 0;
};

City.prototype.getCustPerHr = function () {
  // let custPerHr = randomCustPerHr(this.minCust, this.maxCust);
  return console.log("me");
};

City.prototype.getCookiesSoldPerHr = () => {
  this.cookiesSoldPerHr = [];

  this.totalCookies = 0;

  for (let i = 0; i < openHours.length; i++) {
    this.getCustPerHr();
    let cookiePerHr = Math.ceil(City.custPerHr * City.avgCookiePerCust);
    City.cookiesSoldPerHr.push(cookiePerHr);
    this.totalCookies += cookiePerHr;
  }
};

City.prototype.render = () => {
  let div = document.createElement("div");

  let list = document.createElement("ul");
  let location = document.createElement("h2");
  let totalCookies = document.createElement("li");

  location.textContent = "City";
  totalCookies.textContent = `Total: ${this.totalCookies} sold for the day`;

  for (let i = 0; i < openHours.length; i++) {
    let times = document.createElement("li");
    times.textContent = `${openHours[i]}: ${City.cookiesSoldPerHr[i]} cookies sold`;
    list.appendChild(times);
  }

  list.appendChild(totalCookies);
  div.appendChild(location);
  div.appendChild(list);
  store.appendChild(div);
};

City.getCookiesSoldPerHr();
City.render();

new City("Seattle", 23, 65, 6.3);
// new City("Tokyo", 23, 65, 6.3);
// new City("Dubai", 23, 65, 6.3);
// new City("Paris", 23, 65, 6.3);
// new City("Lima", 23, 65, 6.3);

// let seattle = {
//   name: "seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgCookiePerCust: 6.3,
//   cookiesSoldPerHr: [],

//   getCustPerHr: function () {
//     this.custPerHr = randomCustPerHr(this.minCust, this.maxCust);
//   },

//   getCookiesSoldPerHr: () => {
//     this.totalCookies = 0;

//     for (let i = 0; i < openHours.length; i++) {
//       seattle.getCustPerHr();
//       let cookiePerHr = Math.ceil(seattle.custPerHr * seattle.avgCookiePerCust);
//       seattle.cookiesSoldPerHr.push(cookiePerHr);
//       this.totalCookies += cookiePerHr;
//     }
//   },

//   render: () => {
//     let div = document.createElement("div");

//     let list = document.createElement("ul");
//     let location = document.createElement("h2");
//     let totalCookies = document.createElement("li");

//     location.textContent = "Seattle";
//     totalCookies.textContent = `Total: ${this.totalCookies} sold for the day`;

//     for (let i = 0; i < openHours.length; i++) {
//       let times = document.createElement("li");
//       times.textContent = `${openHours[i]}: ${seattle.cookiesSoldPerHr[i]} cookies sold`;
//       list.appendChild(times);
//     }

//     list.appendChild(totalCookies);
//     div.appendChild(location);
//     div.appendChild(list);
//     store.appendChild(div);
//   },
// };

// seattle.getCookiesSoldPerHr();
// seattle.render();

// let tokyo = {
//   name: "tokyo",
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesSoldPerHr: [],

//   getCustPerHr: function () {
//     this.custPerHr = randomCustPerHr(this.min, this.max);
//   },

//   getCookiesSoldPerHr: () => {
//     this.totalCookies = 0;

//     for (let i = 0; i < openHours.length; i++) {
//       tokyo.getCustPerHr();
//       let cookiePerHr = Math.ceil(tokyo.custPerHr * tokyo.avg);
//       tokyo.cookiesSoldPerHr.push(cookiePerHr);
//       this.totalCookies += cookiePerHr;
//     }
//   },

//   render: () => {
//     let div = document.createElement("div");

//     let list = document.createElement("ul");
//     let location = document.createElement("h2");
//     let totalCookies = document.createElement("li");

//     location.textContent = "Tokyo";
//     totalCookies.textContent = `Total: ${this.totalCookies} sold for the day`;

//     for (let i = 0; i < openHours.length; i++) {
//       let times = document.createElement("li");
//       times.textContent = `${openHours[i]}: ${tokyo.cookiesSoldPerHr[i]} cookies sold`;
//       list.appendChild(times);
//     }

//     list.appendChild(totalCookies);
//     div.appendChild(location);
//     div.appendChild(list);
//     store.appendChild(div);
//   },
// };

// tokyo.getCookiesSoldPerHr();
// tokyo.render();

// let dubai = {
//   name: "dubai",
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesSoldPerHr: [],

//   getCustPerHr: function () {
//     this.custPerHr = randomCustPerHr(this.min, this.max);
//   },

//   getCookiesSoldPerHr: () => {
//     this.totalCookies = 0;

//     for (let i = 0; i < openHours.length; i++) {
//       dubai.getCustPerHr();
//       let cookiePerHr = Math.ceil(dubai.custPerHr * dubai.avg);
//       dubai.cookiesSoldPerHr.push(cookiePerHr);
//       this.totalCookies += cookiePerHr;
//     }
//   },

//   render: () => {
//     let div = document.createElement("div");

//     let list = document.createElement("ul");
//     let location = document.createElement("h2");
//     let totalCookies = document.createElement("li");

//     location.textContent = "Dubai";
//     totalCookies.textContent = `Total: ${this.totalCookies} sold for the day`;

//     for (let i = 0; i < openHours.length; i++) {
//       let times = document.createElement("li");
//       times.textContent = `${openHours[i]}: ${dubai.cookiesSoldPerHr[i]} cookies sold`;
//       list.appendChild(times);
//     }

//     list.appendChild(totalCookies);
//     div.appendChild(location);
//     div.appendChild(list);
//     store.appendChild(div);
//   },
// };

// dubai.getCookiesSoldPerHr();
// dubai.render();

// let paris = {
//   name: "paris",
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesSoldPerHr: [],

//   getCustPerHr: function () {
//     this.custPerHr = randomCustPerHr(this.min, this.max);
//   },

//   getCookiesSoldPerHr: () => {
//     this.totalCookies = 0;

//     for (let i = 0; i < openHours.length; i++) {
//       paris.getCustPerHr();
//       let cookiePerHr = Math.ceil(paris.custPerHr * paris.avg);
//       paris.cookiesSoldPerHr.push(cookiePerHr);
//       this.totalCookies += cookiePerHr;
//     }
//   },

//   render: () => {
//     let div = document.createElement("div");

//     let list = document.createElement("ul");
//     let location = document.createElement("h2");
//     let totalCookies = document.createElement("li");

//     location.textContent = "Paris";
//     totalCookies.textContent = `Total: ${this.totalCookies} sold for the day`;

//     for (let i = 0; i < openHours.length; i++) {
//       let times = document.createElement("li");
//       times.textContent = `${openHours[i]}: ${paris.cookiesSoldPerHr[i]} cookies sold`;
//       list.appendChild(times);
//     }

//     list.appendChild(totalCookies);
//     div.appendChild(location);
//     div.appendChild(list);
//     store.appendChild(div);
//   },
// };

// paris.getCookiesSoldPerHr();
// paris.render();

// let lima = {
//   name: "lima",
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   cookiesSoldPerHr: [],

//   getCustPerHr: function () {
//     this.custPerHr = randomCustPerHr(this.min, this.max);
//   },

//   getCookiesSoldPerHr: () => {
//     this.totalCookies = 0;

//     for (let i = 0; i < openHours.length; i++) {
//       lima.getCustPerHr();
//       let cookiePerHr = Math.ceil(lima.custPerHr * lima.avg);
//       lima.cookiesSoldPerHr.push(cookiePerHr);
//       this.totalCookies += cookiePerHr;
//     }
//   },

//   render: () => {
//     let div = document.createElement("div");

//     let list = document.createElement("ul");
//     let location = document.createElement("h2");
//     let totalCookies = document.createElement("li");

//     location.textContent = "Lima";
//     totalCookies.textContent = `Total: ${this.totalCookies} sold for the day`;

//     for (let i = 0; i < openHours.length; i++) {
//       let times = document.createElement("li");
//       times.textContent = `${openHours[i]}: ${lima.cookiesSoldPerHr[i]} cookies sold`;
//       list.appendChild(times);
//     }

//     list.appendChild(totalCookies);
//     div.appendChild(location);
//     div.appendChild(list);
//     store.appendChild(div);
//   },
// };

// lima.getCookiesSoldPerHr();
// lima.render();
