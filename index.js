const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const blogRoutes = require('./routes/blog');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contacts');


const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));

app.use('/', homeRoutes);
app.use('/blog-minibar', blogRoutes);
app.use('/admin', adminRoutes);
app.use('/receive-contact', contactRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

