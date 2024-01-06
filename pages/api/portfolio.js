const portfolio = [
    {
        id: 0,
        projectName: "JAVCO Store",
        url: "https://github.com/arifsuz/javcostore",
        image: "projects/javcostore.png",
        projectDetail: "Javco Store is a mini e-commerce website created to complete Big Assignment 2, in the 1st Semester Database Systems Course.",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "JavaScipt"
            },
            {
                tech: "CSS"
            },
            {
                tech: "SQL"
            },
        ]
    },
    {
        id: 0,
        projectName: "JAVCO Population Data Collection",
        url: "https://github.com/arifsuz/javco-pendataan-penduduk/tree/main",
        image: "projects/javco-pendataan-penduduk.png",
        projectDetail: "Javco Population Data Collection is a population data collection website created to complete Big Assignment 1, in the Database Systems Course Semester 1.",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "CSS"
            },
            {
                tech: "SQL"
            },
        ]
    },
    {
        id: 0,
        projectName: "Inco Academy Work In Tech",
        url: "https://drive.google.com/file/d/1yu27e5ijRk9mn8AqxVCIRN8J1_mivNIy/view?usp=sharing",
        image: "certificate/sertif-inco-academy.jpg",
        projectDetail: "Won first place in the competition to create a startup project, and I and members of Syncminds,co.Ltd created an application called Gorden Loket.",
        technologiesUsed: [
        ]
    },
    {
        id: 0,
        projectName: "Alibaba CLoud",
        url: "https://drive.google.com/file/d/1Heer2IBs6esFkxDCawrk9oGHi-xflIna/view?usp=sharing",
        image: "certificate/sertif-alibaba.jpg",
        projectDetail: "Has successfully developed applications with Alibaba Cloud services and has achieved.",
        technologiesUsed: [
        ]
    },
    {
        id: 0,
        projectName: "Google IT Support",
        url: "https://drive.google.com/file/d/1fOlyOzJFVpiegAGCNGs39GY2zXJSNfpG/view?usp=sharing",
        image: "certificate/IT-Support.jpg",
        projectDetail: "Google's IT Support Professional developed by Google, includes hands-on, practice-based assessments and is designed to prepare them for a variety of entry-level positions in the IT Support field. They have competency in basic skills, including problem solving and customer service, networking, operating systems, system administration, and security.",
        technologiesUsed: [
        ]
    },
    // {
    //     id: 1,
    //     projectName: "Otawix",
    //     url: "https://b2c.otawix.com/",
    //     image: "projects/otawix.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "NextJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "MUI"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    // {
    //     id: 2,
    //     projectName: "Spatay",
    //     url: "https://spatay.com/",
    //     image: "projects/spatay.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },h4cfccxxxx
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
