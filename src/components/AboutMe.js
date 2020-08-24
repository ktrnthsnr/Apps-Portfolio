import React from "react";
import aboutImage from "../assets/images/at.jpg";
// import '../../assets/css/style.css';

function AboutMe() {

  return (
    <section className="my-5">
        
            <h5 className="left-heade">Thanks for checking out my portfolio!</h5>
            <p></p>
            <img src={aboutImage} className="my-2" style={{ width: "20%" }} alt="cover" />
            <p></p>
            <div>
                <p>
                Living in the Pacific Northwest for over twenty years, I've worked supporting globaly-scaled, highly-available, enterprise online applications within various technology groups in the Seattle region, at both the website and database layers, in projects supporting legacy Microsoft Windows and IIS Manager\SQL Server based applications to newer Azure web services sand online websites. 
                </p>
                <p>
                Last year I spent the year studying Agile Methodology and PMI, and most recently this year my university studies are focusing on full stack development. 
                </p>
                <p>
                Front-end browser side technologies studies have included creating MERN stack projects hightlighted under the Portfolio tab created using VSCode, Gitbash, and Node.js JavaScript languages and npm technology including React, Apollo GraphQL, jQuery, HTML, CSS. Along with Node.js applications, our assignments had us creating and using third party APIs and uploading these projects to GitHub.   
                </p>
                <p>
                And from the back-end and PaaS database perspective I've been recently building applications using the following technologies: MERN stack - MongoDB\Mongoose ODM, Express.js, React, Node.js, deploying to GitHub and also Heroku with JawsDB and mLab add-ons, supported by MySQL, MySQL2, SQLite, MongoDB at the backend. Devtools utilized during these exercises have included Git, npm, MySQL Workbench, and testing with Jest.
                </p>
                <p>
                The previous years my focus was centered on Azure cloud services deployment, optimization, alerting, maintenance, security, and legacy migrations from Windows Server Enterprise platforms, and IIS Manager and SQL Servers software.
                Supporting Azure cloud services and Windows based enterprise applications and online websites for various Microsoft.com community, forum, blog and docs websites, I provided escalated engineering support, along with web app and virtual machine environment setups, live-site quick fixes, site redirects, migrations, longterm maintenance, monitoring, and on-premises system-wide rebuilds to the newer cloud platforms.
                </p>
                <p></p>
                <p></p>
                <p></p>
                
                <a href="https://www.linkedin.com/in/akatarinathisner/">www.linkedin.com/in/akatarinathisner</a> 
                <p></p>
                <a href="https://github.com/ktrnthsnr">github.com/ktrnthsnr</a> 
            </div>            
    </section>
  );

}

// const AboutMe = () => (
//   <div>
//     <h1>About Me</h1>
//     <p>
//         description.. testing
//     </p>
//   </div>
// );

export default AboutMe;
