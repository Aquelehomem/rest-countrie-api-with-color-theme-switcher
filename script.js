window.addEventListener('load',show)
window.addEventListener('load',countries)
var input = document.querySelector('input')
input.addEventListener('keyup', type)

function show(){
	fetch("https://restcountries.eu/rest/v2/all")
	.then(res=>res.json())
	.then(update)
}

var container = document.querySelector('.content')

function update(e){
	container.innerHTML=``
	for(var c = 0; c<e.length;c++){
		var flag= e[c].flag
		var name = e[c].name
		var population= e[c].population
		var region = e[c].region
		var capital = e[c].capital

		container.innerHTML+= `<div class="div">
		<a href="details.html"><img src="${flag}" alt="${name}"></a>
		<div><h3>${name}</h3></div>
		<div><span>Population:</span> ${population}</div>
		<div><span>Region:</span> ${region}</div>
		<div><span>Capital:</span> ${capital}</div>
	</div>`
	}
	
	
}/*fdsafsfdsafdafdsafdsfdddddddd*/
var country =``
var filter = document.querySelectorAll('.filter')
function countries(){
		var link = `https://restcountries.eu/rest/v2/region`
		if(filter[0].innerHTML==='All'){
			filter[0].addEventListener('click',function query(){
			country=``
			fetch(`https://restcountries.eu/rest/v2/all`)
			.then(res=>res.json())
			.then(show)
			})	
		}
		 if(filter[1].innerHTML==='Africa'){
			filter[1].addEventListener('click',function query(){
			country=`africa`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		if(filter[2].innerHTML==='America'){
			filter[2].addEventListener('click',function query(){
			country=`americas`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		if(filter[3].innerHTML==='Asia'){
			filter[3].addEventListener('click',function query(){
			country=`asia`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		if(filter[4].innerHTML==='Europe'){
			filter[4].addEventListener('click',function query(){
			country=`europe`
			fetch(`${link}/${country}`)
			.then(res=>res.json())
			.then(updateFilter)
			})	
		}
		if(filter[5].innerHTML==='Oceania'){
			filter[5].addEventListener('click',function query(){
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
	for(var c=0;c<e.length;c++){
		var flag= e[c].flag
		var name = e[c].name
		var population= e[c].population
		var region = e[c].region
		var capital = e[c].capital
		content.innerHTML+=`<div class="div">
		<a href="details.html"><img src="${flag}" alt="${name}"></a>
		<div><h3>${name}</h3></div>
		<div><span>Population:</span> ${population}</div>
		<div><span>Region:</span> ${region}</div>
		<div><span>Capital:</span> ${capital}</div>
	</div>`
	}
	
}	
function type(e){
	var h3 = document.querySelectorAll('h3')
	var value = input.value.toUpperCase()
	var div = document.querySelectorAll('.div')
	for(var c= 0; c<div.length;c++){
		if(h3[c].innerHTML.toUpperCase().indexOf(value.toUpperCase())>-1){
		div[c].style.display=""
	}
	else{
		div[c].style.display="none"
	}
	}
}


var button = document.querySelector('.button1')
button.addEventListener('click',function(){
	alert('fdlkj')
})
var details = document.querySelectorAll('a')
function details(){
	details.forEach(a=>a.addEventListener('click', function(){
		alert('fkdj')
	}))
}