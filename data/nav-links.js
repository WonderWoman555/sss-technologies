const navLinksData = [
    { "title": "Home", "url": "/" },
    { "title": "About", "url": "/about" },
    {
        "type": 'dropdown', "title": "Services", "url": "/services",
        links: [
            { href: '/services/digital-marketing', title: 'Digital Marketing', description: "Boost Your Brand, Drive Results" },
            { href: '/services/web-development', title: 'Web Design & Development', description: "Crafting Engaging Experience" },
            { href: '/services/app-development', title: 'App Development', description: "Android and iOS app Development" },
            { href: '/services/game-development', title: 'Game Development', description: "Multi Functionality Game Development" },
            { href: '/services/game-development', title: 'Software Development', description: "Multi Functionality Game Development" },
            { href: '/services/game-development', title: 'Graphics UI/UX & Animations', description: "Bring your ideas to life with our design and animations" },
        ]
    },
    { "title": "Portfolio", "url": "/portfolio" },
    {
        "type": 'dropdown', "title": "Contact", "url": "/contact", links: [
            { href: '/contact', title: 'Contact us', description: "Reach out to us anytime!" },
            { href: '/contact?form=meeting', title: 'Book a meeting', description: "Schedule a meeting today!" },
        ]
    },
    { "title": "Career", "url": "/career" },

];

export { navLinksData }