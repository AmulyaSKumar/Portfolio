import DoorProject from "./../assets/portfolioImages/DoorProject.png";
import stopwatch from "./../assets/portfolioImages/stopwatch.png";
import EmailProject from "./../assets/portfolioImages/EmailProject.png"
import Visualizer from "./../assets/portfolioImages/Visualizer.png";

const ProjectsData = [
  {
    id: "stopwatch-app",
    img: stopwatch,
    name: "Stopwatch Application",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://amulyaskumar.github.io/PRODIGY_WD_01/",
    source: "https://github.com/AmulyaSKumar/PRODIGY_WD_01",
    description:
      "A simple and intuitive stopwatch application for efficient time tracking. Ideal for activities like studying, exercising, or tasks requiring precise timing. Features start/stop, reset, and lap tracking with a clean and user-friendly interface.",
  },
  {
    id: "emailjs-mail-sending",
    img: EmailProject,
    name: "Mail Sending using EmailJS",
    stack: ["< ReactJS />", "< EmailJS />"],
    live: "",
    source: "",
    description: "Implemented client-side email-sending functionality using EmailJS in a React app for mail communication. Designed a user-friendly interface with real-time validation and seamless integration of the EmailJS API for email delivery."
  },
  {
    id: "door-locking-system",
    img: DoorProject,
    name: "Door Locking System",
    stack: ["ESP32-CAM ", "Arduino IDE", "Telegram"],
    live: "",
    source: "",
    description: "Developed an intelligent door locking system with facial capture using the ESP32 CAM module. Integrated remote access via a Telegram chatbot for door control. Designed a secure password entry system using a shuffle technique for unlocking mechanisms."
  },
  {
    id: "simulation-tool",
    img: Visualizer,
    name: "Simulation Tool - String Matching using Finite Automata",
    stack: ["< ReactJS />"],
    live: "https://visualizer-for-string-matching-8rzh.vercel.app/",
    source: "https://github.com/AmulyaSKumar/VISUALIZER-ForStringMatching",
    description: "Developed a simulation tool for string matching using finite automata with ReactJS. Implemented an interactive user interface to visualize the string matching process step-by-step. Enhanced the learning experience by providing real-time feedback and explanations."
  },

];



export default {ProjectsData};