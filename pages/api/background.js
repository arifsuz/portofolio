const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Mercu Buana University',
                degree: 'BS, Informatics Engineering',
                detail: "Bachelor's Degree in Informatics Engineering from Mercu Buana University.",
                year: '2023 - Present'
            },
            {
                id: 1,
                title: 'SMK Yadika 3 Jakarta',
                degree: 'THC, Computer and Network Engineering',
                detail: "Completed Technical High School in SMK Yadika 3 Jakarta.",
                year: '2020-2023'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Law Firm Tetap Setia PP POLRI',
                role: 'Fullstack Developer',
                url: 'https://lawfirmtspppolri.com/',
                desc: "I was offered to create a profile website of a legal institution called Law Firm Tetap Setia PP POLRI and was offered as a Fullstack Developer and was given the trust to manage their website and was paid per month.",
                year: '02/2024 - Present',
                location: 'Jakarta, Indonesia'
            },
            {
                id: 2,
                title: 'Syncminds, co. Ltd',
                role: 'CTO',
                url: 'no website',
                desc: "I created a group for a competition to build a start up Gorden Loket and I am the CTO",
                year: '06/2023 - 08/2023',
                location: 'Bandung, Indonesia'
            },
            {
                id: 3,
                title: 'GordenLoket Startup',
                role: 'CTO',
                url: 'https://www.instagram.com/gordenloket/',
                desc: 'As a ui/ux designer and frontend designer developer, I use Figma to create UI/UX and React, Next & JavaScript to build user interfaces for web applications.',
                year: '06/2023 - 08/2023',
                location: 'Bandung, Indonesia'
            },
            {
                id: 4,
                title: 'JNE Express',
                role: 'Junior IT Support',
                url: 'no website',
                desc: 'I work part time as IT Support at JNE Express, I work on network and device maintenance at the package delivery office.',
                year: '01/2022 - 05/2022',
                location: 'Tangerang, Indonesia'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
