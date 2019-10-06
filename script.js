window.addEventListener('load', show)

function show(){
	fetch("https://restcountries.eu/rest/v2/all")
	.then(res=>res.json())
	.then(update)
}

function update(e){
	var container = document.querySelector('.content')

	for(var c = 0; c<=10;c++){
		var flag= e[c].flag
		

	container.innerHTML+= `<div class="div">
		<img src="${flag}" alt="${e[c].name}">
		<div><h3>${e[c].name}</h3></div>
		<div><span>Population:</span> ${e[c].population}</div>
		<div><span>Region:</span> ${e[c].region}</div>
		<div><span>Capital:</span> ${e[c].capital}</div>
	</div>`
	}
	
	
}
