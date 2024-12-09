import React from 'react';
import myImage from './../assets/main_image.png';
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from 'react-icons/ai';
import Typewriter from './Typewriter';
import GmailCopy from './GmailCopy';

function Main() {

    return (
        <div id="main" className="flex flex-col sm:min-h-screen min-h-[calc(100vh-6.6rem)] pl-[3rem] lg:mt-5 lg:m-14 lg:pt-0 pr-[4rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0">
            <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
                <div className="flex flex-col justify-center sm:w-[60%] w-full sm:mr-5">
                    <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
                        Hi,
                    </h1>
                    <blockquote className="font-[800] text-[2rem] text-[#6699CC;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
                        I'm
                        <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#6699CC;] relative inline-block">
                            <span className="relative text-[#5C4DCE] dark:text-[#20262E]">AMULYA</span>
                        </span>
                    </blockquote>
                    <div className="h-10 mt-4">
                        <Typewriter />
                    </div>
                    <p className="dark:text-gray-300 text-justify leading-loose pt-8 tm:w-full sm:w-full sm:mt-0" style={{ fontSize: '21px', lineHeight: '1.5' }}>
                        I’m a developer with expertise in full-stack applications, <br />
                        skilled in SQL, MongoDB, Flask, Spring Boot, and React. <br />
                        Passionate about transforming ideas into solutions.
                    </p><br/><p>Contact Me:<GmailCopy/></p>
                </div>
                <div className="flex py-[10px] tm:mt-[20px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
                    <div className="box">
                        <div className="h-full justify-end flex items-center sm:justify-center">
                            <img
                                src={myImage}
                                alt="main"
                                className="h-[100%] min-h-[130px] min-w-[190px] tm:h-[30px] tm:mt-[300px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[10px]"
                            />
                        </div>


                    </div>


                </div>
                <div className="flex place-content-center mt-7">
                    <div className="flex flex-row sm:flex-col gap-5">
                        <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/amulya-s-082904261"
                            target="_blank"
                        >
                            <AiFillLinkedin size={40} className="cursor-pointer" />
                        </a>
                        <a
                            rel="noreferrer"
                            href="https://github.com/AmulyaSKumar"
                            target="_blank"
                        >
                            <AiFillGithub size={40} className="cursor-pointer" />
                        </a>
                        <a
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1ccmupSuAfVdekuc4W5vUqtWkzB405a5w/view?usp=sharing"
                            target="_blank"
                        >
                            <AiFillFilePdf size={40} className="cursor-pointer" />
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Main;
