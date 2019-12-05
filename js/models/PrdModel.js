const data = [
	{
		id: 1, 
		title: 'The Perfect Sandwich, A Real NYC Classic', 
		desc: 'Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.', 
		src: '../img/sandwich.jpg'
	},
	{
		id: 2, 
		title: 'Let Me Tell You About This Steak', 
		desc: 'Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.', 
		src: '../img/steak.jpg'
	},
	{
		id: 3, 
		title: 'Cherries, interrupted', 
		desc: 'Lorem ipsum text praesent tincidunt ipsum lipsum. What else?', 
		src: '../img/cherries.jpg'
	},
	{
		id: 4, 
		title: 'Once Again, Robust Wine and Vegetable Pasta', 
		desc: 'Lorem ipsum text praesent tincidunt ipsum lipsum.', 
		src: '../img/wine.jpg'
	},
]

export default {
	name: "PrdModel",
	list() {
		return data;
	},
	remove() {

	}
}
