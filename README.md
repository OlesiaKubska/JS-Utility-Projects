# 🛠️ JS Utility Projects

![GitHub repo size](https://img.shields.io/github/repo-size/OlesiaKubska/Js-Utility-Projects)
![GitHub top language](https://img.shields.io/github/languages/top/OlesiaKubska/Js-Utility-Projects)
![GitHub last commit](https://img.shields.io/github/last-commit/OlesiaKubska/Js-Utility-Projects)

A collection of JavaScript utility apps built with vanilla JS and Parcel. Each task demonstrates DOM manipulation, event handling, or asynchronous JavaScript.

---

## 📋 Tasks

### 🎨 1. Color Switcher

**Description:** Changes the page background to a random color every second after clicking "Start". Stops on "Stop".

🧩 Features:
- Random color generator
- Controlled Start/Stop buttons
- Start button disables during operation

🔧 Tools: `setInterval`, `clearInterval`, `style.backgroundColor`

---

### ⏰ 2. Countdown Timer

**Description:** A timer that counts down to a selected future date and time using `flatpickr`.

🧩 Features:
- Date/time picker (Flatpickr)
- Timer updates in real-time
- Prevents past date selection

🔧 Tools: `flatpickr`, `setInterval`, `padStart`, custom `convertMs()` function

---

### 📬 3. Promise Generator

**Description:** Creates multiple promises with different delays. Resolves/rejects each and shows results in console (or Notiflix if connected).

🧩 Features:
- User-controlled delay/step/amount
- Asynchronous promise simulation
- Optional notification integration (Notiflix)

🔧 Tools: `Promise`, `setTimeout`, `Math.random`, `form handling`

---

## 🚀 Getting Started

```bash
git clone https://github.com/OlesiaKubska/js-utility-projects.git
cd js-utility-projects
npm install
npm start
Open in browser via live server or npm run dev.
```
##  📦 Built With
- Parcel

- flatpickr

- Notiflix

- Vanilla JS, HTML, CSS

##  ✅ Requirements
- Node.js & npm

- Modern browser with ES6 support

##  📄 License
Licensed under the MIT License.

💡 Made with 💙 by OlesiaKubska
