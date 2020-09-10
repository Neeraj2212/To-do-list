const express = require('express');

const bodyParser = require('body-parser');
let items = ['Buy Food', 'Cook Food', 'Eat Food'];
app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	let today = new Date();

	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	};
	let day = today.toLocaleDateString('en-US', options);
	res.render('index', {
		currentDay: day,
		newItems: items,
	});
});

app.post('/', function (req, res) {
	let newItem = req.body.newItems;
	items.push(newItem);
	res.redirect('/');
});

app.listen(3000, function () {
	console.log('Started on server 3000');
});
