// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const CourseCard = [
  {
    id: 0,
    name: 'Dicoding',
    image: "images/dicoding.gif",
    view: "Dicoding is a startup company that aims to develop the developer ecosystem in Indonesia. Founded on January 5 2015, Dicoding has an electronic learning platform on the Dicoding.com page.",
    linkednURL: "https://www.dicoding.com/"
  },
  {
    id: 1,
    name: 'Coursera',
    image: "images/coursera.png",
    view: "Coursera Inc. is a massive provider of open online courses in the United States, founded in 2012 by Stanford University computer science professors Andrew Ng and Daphne Koller.",
    linkednURL: "https://www.coursera.org/"
  },
  {
    id: 2,
    name: 'CodePolitan',
    image: "images/codepolitan.png",
    view: "Codepolitan is an online programming learning platform in Indonesian that was developed specifically to help the younger generation learn and practice programming to be competitive in the Industry 4.0 era.",
    linkednURL: "https://www.codepolitan.com/"
  },
  {
    id: 3,
    name: 'harisenin',
    image: "images/harisenin.png",
    view: "Harisenin.com is an online learning platform that offers educational programs to get jobs. This platform offers bootcamp programs according to the field you want to study. This program lasts for 3–5 months, and participants can learn directly from experts.",
    linkednURL: "https://www.harisenin.com/"
  },
]
export default function handler(req, res) {
  res.status(200).json(CourseCard)
}
