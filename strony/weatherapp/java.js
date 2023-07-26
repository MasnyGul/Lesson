const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherBox=document.querySelector('.weather-box');
const weatherdetails=document.querySelector('.weather-details');
const error404=document.querySelector('.not-found');

search.addEventListener('click', () => {

    const APIKey='6e101b772dbd3fa94d4e82690633ea46';
    const city=document.querySelector('.search-box input').value;

    if(city === '')
        return;
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response =>response.json())
        .then(json => {
            if(json.cod === '404'){
                container.style.height ='400px';
                weatherBox.style.display='none';
                weatherdetails.style.display='none';
                error404.style.display='block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display='none';
            error404.classList.remove('fadeIn')

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');


            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'picture/clear.png';
                    break;

                case 'Rain':
                    image.src = 'picture/rain.png';
                    break;

                case 'Snow':
                    image.src = 'picture/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'picture/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'picture/mist.png';
                    break;

                default:
                    image.src = '';
            };

            temperature.innerHTML = `10<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';




        });

});