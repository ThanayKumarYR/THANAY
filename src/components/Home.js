import React from "react";
import "./Css/Home.css";
import thanay from "../images/Thanay1.jpg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
const Home = () => {
  return (
    <div className="home">
      <h2>
        Thanay<span> Kumar Y R</span>{" "}
      </h2>
      <div className="my-image">
        <img src={thanay} alt="My" />
      </div>
      <div className="my-details">
        <h4>
          Date of birth: <span>11 April 2002</span>
        </h4>
        <h4>
          Nationality: <span>India</span>
        </h4>
        <h4>
          <span>7259813815</span>
        </h4>
        <h4>
          <a href="mailto:thanaykumaryr@gmail.com">thanaykumaryr@gmail.com</a>
        </h4>
        <h4>
          <span>560072, Bangalore, India</span>
        </h4>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          Hello, I am Thanay Kumar Y R, currently pursuing B.E in Computer
          Science at Dr Ambedkar Institute of Technology. My expertise lies in
          frontend especially in React JS. I'm strong in JavaScript, C, and basic
          python, currently learning Nodejs and MongoDB, hoping to become a
          Full stack devoloper. Thank you !
        </p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <p>
          Please go through the links of my projects in the sidebar or by
          clicking the menu button above. You can also access the sites through
          clicking their title.
        </p>
        <div className="customization">
          <h3>
            <a href="https://thanaykumaryr.github.io/Fashion-Customization/" target="_blank" rel="noreferrer">
              Fashion Customization
            </a>
          </h3>
          <p>
            Users have the ability to craft their unique shirt designs 
            by simply providing a text prompt describing the desired design
            or logo, all made possible through the incorporation of stabilityai technology. What 
            sets this platform apart is its real-time visualization 
            feature, allowing users to instantly view and customize 
            their creations.
          </p>
        </div>
        <div className="election">
          <h3>
            <a href="https://thanaykumaryr-election.onrender.com/" target="_blank" rel="noreferrer">
              Election Management System
            </a>
          </h3>
          <p>
            It is Full Stack Website built on Nodejs with database as MongoDB. Here we can conduct elections
            on small scale. The votes being cast for the Canditates by the voters is fully secure and confidential. Try it out.
          </p>
        </div>
        <div className="ymovies">
          <h3>
            <a href="https://thanaykumaryr.github.io/ymovies.github.io/" target="_blank" rel="noreferrer">
              Y-movies
            </a>
          </h3>
          <p>
            It is a static, responsive website and replica of F-MOVIES which is
            top of free streaming website, where we can watch movies online for free
            without registration. I have used basic html and css with
            vanila javascript to develop the website. I have got good hold on flex
            box property through this project.
          </p>
        </div>
        <div className="junkfood">
          <h3><a href="https://thanay-kumar-yr.github.io/Junkfood_detector/" target="_blank" rel="noreferrer">Junkfood Detecter</a></h3>
          <p>
            It is a web application used to deploy Machine Learnig model (Mobile-Net) through tensorflowjs module. You can upload an image and predict whether
            the image is food or not. If it is food, then it will
            tell which food it is. It takes some time to load the model
            initially, so please be patient.
          </p>
        </div>
        <div className="sanskruthi">
          <h3><a href="https://thanaykumaryr.github.io/Sanskruthi2k22/" target="_blank" rel="noreferrer">Sanskruthi</a></h3>
          <p>
            This responsive website was developed for the main fest "Sanskruthi"
            of Dr Ambedkar Institute of Technology. It tells about the events
            and important dates of the fest. It has various sections with
            alternative design patterns.
          </p>
        </div>
        <div className="code-reader">
          <h3><a href="https://thanaykumaryr.github.io/Code_snippet/" target="_blank" rel="noreferrer">Code-Reader</a></h3>
          <p>
            A ReactJS website to type code in differnt languages like C, C++,
            javascript, python etc. I have used monoco editor. By clicking
            Record we land on recording page, where we can record ourselves
            explaing the code. The media recorder doesn't work in mobile, so
            please view in laptop or destop.
          </p>
        </div>
        <div className="agriverse">
          <h3><a href="https://thanay-kumar-yr.github.io/text/" target="_blank" rel="noreferrer">Agriverse</a></h3>
          <p>
            A ReactJS website for NFT'S. Plant to Earn. A Web 3.0 based
            decentralized Agriculture where you get real piece of
            land/crop/livestock as NFT with 24/7 live monitoring through special
            drones and cameras. Also paying unbelievable APY for all your
            assets/crops/NFTS and play to earn game which keeps entertaining and
            ensures continuous earning for you. The mode of play is a new
            concept in the world of gaming and one that gamers can leverage on
            in-order to maximize profit.
          </p>
        </div>
        <div className="dynamic-table">
          <h3><a href="https://thanaykumaryr.github.io/table/" target="_blank" rel="noreferrer">Dynamic-table</a></h3>
          <p>
            A ReactJS app where we can add details and are able to edit them if required. We can also delete them.
          </p>
        </div>
        <div className="rock-paper-scissors">
          <h3><a href="https://thanaykumaryr.github.io/Rock-Paper-Scissor.github.io/">Rock-Paper-Scissors</a></h3>
          <p>
            A website to play Rock-Paper-Scissor in computer. Press start and select Rock, Paper or Scissor
            by clicking their image and finally click play and see the results. This website isn't responsive on mobile, hence play in laptop or destop.
          </p>
        </div>
        <div className="random-numbers">
          <h3><a href="https://thanaykumaryr.github.io/Random_numbers_generator.github.io/" target="_blank" rel="noreferrer">Random-Numbers</a></h3>
          <p>
            A responsive webapp to generate random numbers. First we have to enter the number to define the range and click start. By clicking the div in the center we can generate random numbers with-in given range infinite times. 
          </p>
        </div>
      </div>
      <div className="media-links">
        <a href="https://github.com/ThanayKumarYR" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/thanay-kumar-y-r-94a16a224/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="mailto:thanaykumaryr@gmail.com" target="_blank" rel="noreferrer">
          <IoIosMail />
        </a>
        <a href="https://www.instagram.com/thanaykumaryr/" target="_blank" rel="noreferrer">
          <AiFillInstagram />
        </a>
      </div>
      <div className="blank"></div>
    </div>
  );
};

export default Home;
