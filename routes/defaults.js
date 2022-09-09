exports.index = (req, res) => {
    res.status(200).render('index', {
        title: `Front-end Developer Dmitry Kuchukov`,
        isHome: true,
        name: 'Dmitry Kuchukov',
        profession: 'Front-End Developer',
        placeBirth: 'Saint Petersburg',
        location: 'Saint Petersburg',
        age: new Date().getFullYear() - 1984,
        gender: 'Male',
        year: new Date().getFullYear(),
        hardSkills: [
            {
                name: 'JavaScript',
                progress: 86
            },
            {
                name: 'React',
                progress: 85
            },
            {
                name: 'HTML + CSS',
                progress: 100
            },
            {
                name: 'NextJS',
                progress: 75
            },
            {
                name: 'NodeJS',
                progress: 55
            },
            {
                name: 'Strapi',
                progress: 65
            }
        ],
        softSkills: [
            {
                name: 'Git / GitHub',
                progress: 90
            },
            {
                name: 'Webpack',
                progress: 85
            },
            {
                name: 'Figma',
                progress: 65
            },
            {
                name: 'Photoshop',
                progress: 75
            },
            {
                name: 'English',
                progress: 55
            },
        ],
        education: [
            {
                year: '2022-Current',
                course: 'NodeJS',
                school: 'SkillBox',
                certificate: ''
            },
            {
                year: 2021,
                course: 'Next.js & React - The Complete Guide ',
                school: 'Udemy',
                certificate: ''
            },
            {
                year: 2020,
                course: 'React. Development of Complex Front-end Applications',
                school: 'Html Academy',
                certificate: 'https://assets.htmlacademy.ru/certificates/intensive/171/625447.pdf?1608060015&_ga=2.120491713.852210870.1662730242-1409567150.1662730242'
            },
            {
                year: 2019,
                course: 'Profession "Front-end Developer"',
                school: 'Html Academy',
                certificate: 'https://assets.htmlacademy.ru/certificates/profession/5/625447.pdf?1579507998&_ga=2.120187201.852210870.1662730242-1409567150.1662730242'
            },
            {
                year: 2008,
                course: 'Infocommunication Technologies and Communication Systems',
                school: 'St. Petersburg State University of Telecommunications',
                certificate: ''
            },
       

        ],
        projects: [
            {
                name: 'Pink',
                description: 'App images',
                image: '../assets/img/work/work-1.jpg',
            }
        ]
    });
}
