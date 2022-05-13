exports.index = (req, res) => {
    res.status(200).render('index', {
        title: `Front-end Developer Dmitry Kuchukov`,
        isHome: true,
        name: 'Dmitry Kuchukov',
        profession: 'Front-End Developer',
        placeBirth: 'Saint-Petersburg, Russia',
        location: 'Saint-Petersburg, Russia',
        age: new Date().getFullYear() - 1984,
        gender: 'Male',
        year: new Date().getFullYear(),
    });
}
