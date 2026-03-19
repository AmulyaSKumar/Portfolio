import DoorProject from "./../assets/portfolioImages/DoorProject.png";
import stopwatch from "./../assets/portfolioImages/stopwatch.png";
import EmailProject from "./../assets/portfolioImages/EmailProject.png"
import Visualizer from "./../assets/portfolioImages/Visualizer.png";
import cryptolab from "./../assets/portfolioImages/cryptolab.png"
import ConstructionVisualizer from "./../assets/portfolioImages/constr.jpg";
import TimetableVisualizer from "./../assets/portfolioImages/timetable.png"
import CodeGenVisualizer from "./../assets/portfolioImages/image.png";
import EduSparkVisualizer from "./../assets/portfolioImages/eduspark.jpg"
import weather from "./../assets/portfolioImages/weather.png"
import bs from "./../assets/portfolioImages/bs.png"

const ProjectsData = [
  
  {
  id: "eduspark-mentorship-hub",
  img: EduSparkVisualizer,
  name: "EduSpark: Learning & Mentorship Hub",
  category: "Web Application / Education Tech",
  stack: ["ReactJS", "Flask", "MongoDB", "HTML", "CSS", "JavaScript"],
  live: null,
  source: "https://github.com/AmulyaSKumar/EduSpark",
  description: "A collaborative platform connecting students, educators, and startup enthusiasts through mentorship, AI-driven learning roadmaps, and job opportunities.",
  features: [
    "Mentorship matchmaking between students and experts",
    "Personalized learning roadmaps using AI suggestions",
    "Startup and internship opportunities listing",
    "User dashboard for tracking progress and connections",
    "Secure authentication and intuitive UI"
  ],
  achievements: [
    "Built a scalable mentorship hub from scratch",
    "Facilitated meaningful connections between learners and mentors",
    "Demonstrated strong full-stack development using MongoDB, Flask, and ReactJS"
  ],
  duration: "3 months",
  teamSize: "Team of 4",
  status: "Completed"
}
,
  {
    id: "CryptoLab",
    img: cryptolab,
    name: "CryptoLab",
    category: "Frontend Development",
    stack: ["ReactJS", "CryptoJS","Tailwindcss"],
    live: "https://crypto-lab-murex.vercel.app/",
    source: "https://github.com/AmulyaSKumar/CryptoLab",
    description: "CryptoLab is an interactive cryptographic simulation tool featuring gamification, voice narration, and step-by-step encryption demos. Built for learners and educators to explore classical and modern cryptographic techniques in an engaging, hands-on way.",
    features: ["Interactive Cipher Tools", "Educational Content", "Practice Challenge", "Quizzes", "AI Chat Assistance"],
    achievements: [ "Processed 1000+ test transactions", "Mobile-first responsive design"],
    duration: "2 months",
    teamSize: "Team of 2",
    status: "Completed"
  },
  {
  id: "timetable-workload-management",
  img: TimetableVisualizer,
  name: "Timetable & Workload Management System",
  category: "Automation / Web Application",
  stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "MongoDB"],
  live: null,  
  source: "https://github.com/AmulyaSKumar/TimeTable_and_Workload_Management",
  description: "An automated system designed for educational institutions to generate faculty timetables, provide personalized schedules, and track extra workloads—eliminating manual errors and improving transparency.",
  features: [
    "Automated timetable generation",
    "Personalized schedule access for teachers",
    "Extra workload tracking (meetings, admin tasks, research)",
    "Centralized storage of schedules and workload data"
  ],
  achievements: [
    "Reduced manual scheduling errors significantly",
    "Enhanced accessibility for faculty via personalized dashboards",
    "Improved recognition and tracking of extra responsibilities"
  ],
  duration: "3 months",
  teamSize: "Team of 3",
  status: "Completed"
},
{
  id: "voice-based-code-generator",
  img: CodeGenVisualizer,
  name: "Voice-Based Code Generator",
  category: "AI / Web Application",
  stack: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Gemini AI API"],
  live: null,  
  source: "https://github.com/AmulyaSKumar/Voice-Based-CodeGenerator",
  description: "A web app that converts spoken instructions into code using voice-to-text and Gemini AI. Built with a Flask backend and a simple front-end interface for seamless developer interaction.",
  features: [
    "Voice-to-Text Input for Code Commands",
    "Gemini AI API Integration for Code Generation",
    "Flask-Powered Backend API Handling",
    "Clean and Responsive Front-End"
  ],
  achievements: [
    "Demonstrated effective speech-to-code pipeline",
    "Enabled rapid code prototyping via voice",
    "User-friendly interface for faster interaction"
  ],
  duration: "2 months",
  teamSize: "Solo Project",
  status: "Completed"
},
  {
  id: "construction-progress-analysis",
  img: ConstructionVisualizer,
  name: "Image-Based Construction Progress Analysis",
  category: "Computer Vision",
  stack: ["Python", "OpenCV", "Flask", "HTML5", "Bootstrap", "SQLite"],
  source: "https://github.com/AmulyaSKumar/Image-Based-Construction-Progress-Analysis",
  description: "A computer vision-based system to monitor and analyze construction progress using time-series images. Automates image alignment, detects structural changes, computes similarity metrics, and provides visual + quantitative insights via a web dashboard.",
  features: [
    "Image Alignment using ORB, FLANN, RANSAC",
    "Change Detection with SSIM and Contour Analysis",
    "Quantitative Progress Metrics",
    "Flask-based Web Interface",
    "Downloadable Visual Reports"
  ],
  achievements: [
    "Enabled objective monitoring of construction progress",
    "Reduced manual inspection time by 40%",
    "Improved accuracy of progress tracking compared to visual assessment"
  ],
  duration: "1 months",
  teamSize: "Team of 3",
  status: "Completed"
},{
  "id": "string-matching-visualizer",
  "img": Visualizer,
  "name": "String Matching Visualizer using Finite Automata",
  "category": "Web Application / Educational Tool",
  "stack": ["ReactJS", "JavaScript", "HTML", "CSS"],
  "live": "https://visualizer-for-string-matching-8rzh.vercel.app/",
  "source": "https://github.com/AmulyaSKumar/VISUALIZER-ForStringMatching",
  "description": "An interactive ReactJS tool that visualizes the string matching process using finite automata. It includes step-by-step state transitions, theory explanations, reference videos, and quizzes to enhance learning.",
  "features": [
    "Interactive visualizer showing finite automata state transitions",
    "Educational resources explaining the theory behind finite automata",
    "Reference videos for deeper understanding of string matching algorithms",
    "Quizzes to test knowledge of finite automata and string matching concepts"
  ],
  "achievements": [
    "Created an educational tool for interactive learning of string matching",
    "Integrated theory, visualization, and quizzes for comprehensive learning",
    "Demonstrated step-by-step finite automata operation in an intuitive UI"
  ],
  "duration": "1 month",
  "teamSize": "Team of 4",
  "status": "Completed"
}
,
{
  id: "builderstream-owner-dashboard",
  img: bs,
  name: "BuilderStream – Property Owner Dashboard",
  category: "Web Application / Real Estate",
  stack: ["React", "Spring Boot", "MySQL"],
  live: null,  
  source: "https://github.com/AmulyaSKumar/BuilderStream",
  description: "A user-friendly dashboard for property owners to manage listings efficiently—providing secure registration, property CRUD operations, and profile management.",
  features: [
    "Owner Registration & Secure Login",
    "Add, View, Update, Delete Property Listings",
    "Profile Dashboard for Personal & Property Details",
    "Secure Logout Functionality"
  ],
  achievements: [
    "Streamlined property management for owners",
    "Implemented full-stack solution with React front-end and Spring Boot back-end",
    "Robust data handling with MySQL integration"
  ],
  duration: "1 month",
  teamSize: "Solo Project",
  status: "Completed"
}
,
{
  id: "city-temperature-lookup",
  img: weather,
  name: "City Temperature Lookup & Weather Navigator",
  category: "Web Application / Weather Utility",
  stack: ["React", "Spring Boot", "Java", "JavaScript", "HTML", "CSS"],
  live: null,
  source: "https://github.com/AmulyaSKumar/City-Temperature-Lookup",
  description: "A seamless React + Spring Boot app that lets users fetch city-wise temperature data (min/max) and navigate directly to Google’s live weather page for detailed forecasts.",
  features: [
    "City selection via dropdown and temperature lookup (min/max)",
    "REST API served by Spring Boot reading from a flat-file data store",
    "Front-end data display with real-time interaction controls",
    "Quick redirect to Google’s weather page for expanded details"
  ],
  achievements: [
    "Demonstrated full-stack integration of React and Spring Boot",
    "Simplified weather information access with single-click navigation",
    "Easy-to-run local setup—no complex infrastructure needed"
  ],
  duration: "1 month",
  teamSize: "Solo Project",
  status: "Completed"
}
,
  {
  id: "prodigy_stopwatch_app",
  img: stopwatch,
  name: "Stopwatch Application",
  category: "Web Utility / Time Management",
  stack: ["HTML", "CSS", "JavaScript"],
  live: "https://amulyaskumar.github.io/STOPWATCH_APPLICATION",
  source: "https://github.com/AmulyaSKumar/PRODIGY_WD_01",
  description: "A simple and intuitive stopwatch tool designed to help users track time accurately—ideal for study sessions, workouts, or any task requiring precision.",
  features: [
    "Start, Stop, Resume controls",
    "Reset functionality",
    "Lap time tracking",
    "Clean and minimal UI",
    "Millisecond-level accuracy"
  ],
  achievements: [
    "Hosted live on GitHub Pages for easy accessibility",
    "Enhanced user focus with integrated motivational quotes",
    "Simple yet effective tool for productivity-enhancing use"
  ],
  duration: "2 days",
  teamSize: "Solo Project",
  status: "Completed"
}
];



export default {ProjectsData};