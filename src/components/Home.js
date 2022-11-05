import React from "react";
import "./Css/Home.css";
import thanay from "../images/Thanay.jpg";
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
          <span>560100, Bangalore, India</span>
        </h4>
      </div>
      <div className="about">
        <h3>About</h3>
        <p>
          Hello, I am Thanay Kumar Y R, currently pursuing B.E in Computer
          Science at Dr Ambedkar Institute of Technology. My expertise lies in
          frontend especially in React JS. I'm strong in Javacript, C, and basic
          python, currently learning Nodejs and MongoDb, hoping to become a
          Fullstack devoloper. Thank you !
        </p>
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <p>
          Please go through the links of my projects in the sidebar or by
          clicking the menu button above. You can also access the sites through
          clicking thier title.
        </p>
        <div className="ymovies">
          <h3>
            <a href="https://thanaykumaryr.github.io/ymovies.github.io/">
              Y-movies
            </a>
          </h3>
          <p>
            It is a static, responsive website and repleca of F-MOVIES which is
            top of free streaming website, where to watch movies online free
            without registration required. I have used basic html and css with
            vanila javascript to develop the website.I got a good hold on flex
            box property through this project.
          </p>
        </div>
        <div className="junkfood">
          <h3>Junkfood Detecter</h3>
          <p>
            It is web application used to deploy Machine Learnig model, Mobil
            Net through tensorflowjs module. You can upload an image and predict
            that image whether it is food or not. If it is food, then it will
            tell which food it is. It takes some time to load the model
            initially, so please be patient
          </p>
        </div>
        <div className="sanskruthi">
          <h3>Sanskruthi</h3>
          <p>
            This responsive website was developed for the main fest "Sanskruthi"
            of Dr Ambedkar Institute of Technology. It tells about the events
            and important date of the fest. It has various sections with
            alternative designs patterns.
          </p>
        </div>
        <div className="code-reader">
          <h3>Code-Reader</h3>
          <p>
            A ReactJS website to type code in differnt languages like C, C++,
            javascript, python etc. I have used monoco editor. By clicking
            Record we land on recording page, where we can record ourselves
            explaing the code. The media recorder doesn't work in mobile, so
            please view in laptop or destop.
          </p>
        </div>
        <div className="agriverse">
          <h3>Agriverse</h3>
          <p>
            A ReactJS website for NFT'S. Plant to Earn. A Web 3.0 based
            decentralized Agriculture where you get real piece of
            land/crop/livestock as NFT with 24/7 live monitoring through special
            drones and cameras. Also paying unbelievable APY for all your
            assets/crops/NFTS and play to earn game which keeps entertaining and
            ensures continuous earning for you. The mode of play is a new
            concept in the world of gaming and one that gamers can leverage on
            in order maximize profit.
          </p>
        </div>
        <div className="dynamic-table">
          <h3>Dynamic-table</h3>
          <p>
            A ReactJS app where we can add details and are able to edit them if required. We can also delete them.
          </p>
        </div>
        <div className="rock-paper-scissors">
          <h3>Rock-Paper-Scissors</h3>
          <p>
            A website to play Rock-Paper-Scissor with the computer. Press start and select Rock, Paper or Scissor
            by clicking their image and finally click play and see the results. This website isn't responsive, hence play in laptop or destop.
          </p>
        </div>
        <div className="random-numbers">
          <h3>Random-Numbers</h3>
          <p>
            A responsive webapp to generate random numbers. First we have to enter the number to define the range and click start. By clicking the div in the center we can generate random numbers with in range infinitely. 
          </p>
        </div>
      </div>
      <div className="media-links">
        <a href="https://github.com/ThanayKumarYR">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/thanay-kumar-y-r-94a16a224/">
          <AiFillLinkedin />
        </a>
        <a href="mailto:thanaykumaryr@gmail.com">
          <IoIosMail />
        </a>
        <a href="https://www.instagram.com/thanaykumaryr/">
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};

export default Home;
