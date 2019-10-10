window.addEventListener('load',show)
window.addEventListener('load',countries)

function show(){
	fetch("https://restcountries.eu/rest/v2/all")
	.then(res=>res.json())
	.then(update)
}

var container = document.querySelector('.content')
container.innerHTML=``
function update(e){
	for(var c = 0; c<=10;c++){
		var flag= e[c].flag
		var name = e[c].name
		var population= e[c].population
		var region = e[c].region
		var capital = e[c].capital

		container.innerHTML+= `<div class="div">
		<img src="${flag}" alt="${name}">
		<div><h3>${name}</h3></div>
		<div><span>Population:</span> ${population}</div>
		<div><span>Region:</span> ${region}</div>
		<div><span>Capital:</span> ${capital}</div>
	</div>`
	}
	
	
}

function countries(){
		var country =``
		var filter = document.querySelectorAll('.filter')
		var link = `https://restcountries.eu/rest/v2/region`
		if(filter[0].innerHTML==='Africa'){
			filter[0].addEventListener('click',function query(){
			country=`africa`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		 if(filter[1].innerHTML==='America'){
			filter[1].addEventListener('click',function query(){
			country=`americas`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		if(filter[2].innerHTML==='Asia'){
			filter[2].addEventListener('click',function query(){
			country=`asia`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		if(filter[3].innerHTML==='Europe'){
			filter[3].addEventListener('click',function query(){
			country=`europe`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		if(filter[4].innerHTML==='Oceania'){
			filter[4].addEventListener('click',function query(){
			country=`oceania`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}


	}

function updateFilter(e){
	var content = document.querySelector('.content')
	content.innerHTML=``
	for(var c=0;c<10;c++){
		var flag= e[c].flag
		var name = e[c].name
		var population= e[c].population
		var region = e[c].region
		var capital = e[c].capital
		content.innerHTML+=`<div class="div">
		<img src="${flag}" alt="${name}">
		<div><h3>${name}</h3></div>
		<div><span>Population:</span> ${population}</div>
		<div><span>Region:</span> ${region}</div>
		<div><span>Capital:</span> ${capital}</div>
	</div>`
	}
	
}	
