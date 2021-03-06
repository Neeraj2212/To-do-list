const express = require('express');

const bodyParser = require('body-parser');
let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];
app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
	let today = new Date();

	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	};
	let day = today.toLocaleDateString('en-US', options);
	res.render('index', {
		listTitle: day,
		newItems: items,
	});
});

app.post('/', function (req, res) {
	let newItem = req.body.newItems;

	if (req.body.list === 'Work') {
		workItems.push(newItem);
		res.redirect('/work');
	} else {
		items.push(newItem);
		res.redirect('/');
	}
});

app.get('/work', function (req, res) {
	res.render('index', { listTitle: 'Work', newItems: workItems });
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.listen(3000, function () {
	console.log('Started on server 3000');
});
