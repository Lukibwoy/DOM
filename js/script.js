//2. Wykonaj poniższe podpunkty:
// Pobierz sekcję “container” bez wykorzystywania querySelector
const container = document.getElementById('container')

// Pobierz sekcję “container”, tym razem z wykorzystaniem querySelector
const container2 = document.querySelector('#container')

// Pobierz listę elementów o klasie “second”
const second = document.querySelectorAll('.second')

// Pobierz listę elementów o klasie “third”, ale tylko z selektora <ol>
const third = document.querySelector('ol .third')

// Dodaj do sekcji “container” tekst “Hello”
const container3 = document.getElementById('container')
container.innerHTML += 'Hello'

// Dodaj nowy element <li> do dowolnego selektora. Nadaj takiemu elementowi wartość “Hello!”

const newLi = document.createElement('li')
newLi.textContent = 'Hello!'
container.appendChild(newLi)

// Usuń diva o klasie footer
const footer = document.querySelector('.footer')
footer.remove()

// Przeiteruj po wszystkich elementach znajdujących się w <ol> i zmień i kolor na #dbc110.

let olElements = document.querySelectorAll('ol li')

olElements.forEach(element => {
	element.style.color = '#dbc110'
})

// Challenge 4
// Korzystając z poniższej strony, zmień tło przycisku Get Started na kolor niebieski: #007bff z białym tekstem i napisem “Buy now”.

const button = document.querySelector('.button')

button.style.background = '#007bff'
button.style.color = 'white'
button.textContent = 'Buy now'

// Challenge 6
// Stwórz program, który będzie po kliknięciu przycisku Change losował dowolny kolor RGB i na podstawie wylosowanej wartości, zmieniał tło strony.

const button3 = document.querySelector('.change')

function changeColor() {
	const r = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const randomColor = 'rgb(' + r + ',' + b + ',' + g + ')'
	document.body.style.background = randomColor
}

button3.addEventListener('click', changeColor)

// Chellenge 3

// Exercise: Level 1

//     Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const first = document.querySelectorAll('p')

//     Get each of the the paragraph using document.querySelector('#id') and by their id
const firstP = document.querySelector('#first')
const secondP = document.querySelector('#second')
const thirdP = document.querySelector('#third')
const fourthP = document.querySelector('#fourth')

//     Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const allP = document.querySelectorAll('p')
console.log(allP)
//     Loop through the nodeList and get the text content of each paragraph

allP.forEach(p => {
	console.log(p.textContent)
})

//     Set a text content to paragraph the fourth paragraph,Fourth Paragraph
fourthP.textContent = 'Fourth Paragraph'
console.log(fourthP.textContent)
//     Set id and class attribute for all the paragraphs using different attribute setting methods

// Exercise: Level 2

//     Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

// for(let i=0; i < allP.length; i++){
// allP[i].style.color = 'red'
// allP[i].style.background = 'blue'
// allP[i].style.border = 'black'
// allP[i].style.fontSize = '20px'
// allP[i].style.fontFamily = 'Arial'
// }
allP.forEach(function (p) {
	p.style.color = 'red'
	p.style.background = 'blue'
	p.style.border = 'black'
	p.style.fontSize = '20px'
	p.style.fontFamily = 'Arial'
})

//     Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allP.forEach((p, index) => {
	if (index % 2 === 0) {
		p.style.color = 'green'
	} else {
		p.style.color = 'red'
	}
})
//     Set text content, id and class to each paragraph

// Exercise: Level 3
// DOM: Mini project 1

//     Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
//         The year color is changing every 1 second

function changeColor2() {
	setInterval(() => {
		const randomColor2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
			Math.random() * 256
		)})`	
		let h1 = document.querySelector('h1')
		let content = h1.innerHTML
		let newContent = content.replace('2020', `<span style="color:${randomColor2}">2020</span>`)

	h1.innerHTML = newContent
  }, 1000)
}

changeColor2()

const allLi = document.querySelectorAll('.wrapper ul li')

//         The date and time background color is changing every on seconds
//         Completed challenge has background green
const completed = document.querySelector('.wrapper ul li')
completed.style.backgroundColor = 'green'
//         Ongoing challenge has background yellow

allLi.forEach(item => {
	if (item.textContent.includes('Ongoing')) {
		item.style.backgroundColor = 'yellow'
	}
})
//         Coming challenges have background red

allLi.forEach(item => {
	if (item.textContent.includes('Coming')) {
		item.style.backgroundColor = 'red'
	}
})

// Exercies 5

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const heading = document.querySelector('.heading')
const words = heading.textContent.split(' ')
for (let i = 0; i < words.length; i++) {
	if (words[i].length > 8) {
		words[i] = '<span style="background-color: yellow;">' + words[i] + '</span>'
	}
}
heading.innerHTML = words.join(' ')
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)*/

const link = document.createElement('a')
link.href = 'https://forcemipsum.com/'
link.innerText = 'Link'
heading.appendChild(link)

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const sentences = heading.textContent.split('. ')
for (let i = 0; i < sentences.length; i++) {
	console.log(sentences[i])
}
