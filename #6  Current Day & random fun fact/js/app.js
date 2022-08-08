const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'A crocodile cannot stick its tongue out.',
	"A shrimp's heart is in its head.",
	'It is physically impossible for pigs to look up into the sky.',
	`The "sixth sick sheik's sixth sheep's sick is believed to be the toughest tongue twister in the English language.`,
	'To get to the top of the Eiffel Tower you need to take 1710 steps.',
	'The first person convicted of speeding was going eight mph.',
	`"New car smell" is the scent of dozens of chemicals.`,
	`The world wastes about 1 billion metric tons of food each year.`,
	`Goosebumps are meant to ward off predators.`,
]

const day = new Date()
currentDay.textContent = day.toLocaleString('en', { weekday: 'long' })

const showRandomFact = () => {
	const number = Math.floor(Math.random() * (facts.length - 1))
	console.log(number)

	funFact.textContent = facts[number]
}
showRandomFact()
