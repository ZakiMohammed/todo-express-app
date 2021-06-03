const express = require('express')
const hbs = require('express-handlebars')
const tasks = require('./data/tasks')

const app = express();

const PORT = process.env.port || 5000;

// handlebars
app.engine('hbs', hbs({ 
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.render('index', {
    title: 'Todo App',
    tasks: tasks,
    isEmpty: tasks.length === 0
}));

app.get('/about', (req, res) => res.render('about', {
    title: 'Todo App',
}));

app.use('/routes/tasks', require('./routes/tasks'))

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});