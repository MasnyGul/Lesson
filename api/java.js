document.addEventListener("DOMContentLoaded", () => {
    const response = fetch('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&units=metric&appid=6e101b772dbd3fa94d4e82690633ea46');
    const movies = response.json();
    console.log(movies)
    console.log("Hello World!");
  });