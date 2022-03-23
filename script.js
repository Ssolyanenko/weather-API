// task 1 --------------------
let a = 4;
if (a == 4) {
	console.log('сообщение')
}

let cities = {
	745044: "Istanbul",
	701404: "Melitopol",
	1810821: "Fuzhou",
}
const param = {
	"url": "http://api.openweathermap.org/data/2.5/",
	"appid": "15529439e6e6c41cad1861644e1a2384"
}

let selectElement = document.createElement('select');
selectElement.id = 'city-two';
let selectOption = '';
for (key in cities) {
	selectOption = document.createElement('option');
	let out = '';
	let out2 = '';
	for (let i = 0; i < cities[key].length; i++) {
		selectElement.appendChild(selectOption)
		out = key;
		out2 = cities[key];

	}
	selectOption.value = out;
	selectOption.innerHTML = out2;

}
city2.append(selectElement)

function getWeather() {
	const cityId = document.querySelector('#city-two').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
		.then(weather => {
			return weather.json();
		}).then(showWeather);


}


function showWeather(data) {
	document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)} &#176;`;
	document.querySelector('.wind-speed').textContent = data.wind.speed + ' ' + 'м/с';;
	document.querySelector('.icon_sun').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	document.querySelector('.city').innerHTML = data.name

}

getWeather();
document.querySelector('#city-two').onchange = getWeather;