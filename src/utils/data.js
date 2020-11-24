import Uji from "../images/Uji.jpg";
import Thanksgiving from "../images/Thanksgiving.png";
import Halloween from "../images/Halloween.png";
import Triply from "../images/Triply.png";
import Planner from "../images/Planner.png";
import Code from "../images/Code.png";
import Password from "../images/Password.png";


export default
    {
        name: "Emay Lin",
        headerTagline: [
            "Fullstack Web Developer located in Seattle, Washington"
        ],
        abouttext: ["I grew up in Seattle, Washington. My favorite animals are cats and capybara.", "My favorite flower is the hydrangea.", "In my free time I like to read, craft, and play Taiko."],
        aboutImage: Uji,
        ShowAboutImage: true,
        projects: [
            {
                id: 1,
                title: "Project 3: Thanksgiving Together",
                imageSrc: Thanksgiving,
                url: "https://thanksgiving-together.herokuapp.com/",
                github: "https://github.com/GAFelton/thanksgiving-together"
            },
            {
                id: 2,
                title: "Project 2: House of Boo",
                imageSrc: Halloween,
                url: "https://insanecoolapp.herokuapp.com/",
                github: "https://github.com/juleeb/house-of-boo"
            },
            {
                id: 3,
                title: "Project 1: Triply",
                imageSrc: Triply,
                url: "https://toogii2019.github.io/Project1/",
                github: "https://github.com/Toogii2019/Project1"
            },
            {
                id: 4,
                title: "Day Planner",
                imageSrc: Planner,
                url: "https://xelinx.github.io/day-planner/",
                github: "https://github.com/xelinx/day-planner"
            },
            {
                id: 5,
                title: "Code Quiz",
                imageSrc: Code,
                url: "https://xelinx.github.io/code-quiz/",
                github: "https://github.com/xelinx/code-quiz"
            },
            {
                id: 6,
                title: "Password Generator",
                imageSrc: Password,
                url: "https://xelinx.github.io/password-generator/",
                github: "https://github.com/juleeb/password-generator"
            }
        ],
        websites: [
            {
                name: "Github",
                url: "https://github.com/xelinx"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/emay-lin-525957b9"
            },
            {
                name: "Resume",
                url: "https://drive.google.com/file/d/1V22CzLVc0LNefUAY8KN3W0F0CBAz3qCt/view?usp=sharing"
            }

        ]
    }