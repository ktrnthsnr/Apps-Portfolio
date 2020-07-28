import React from "react";
import aboutImage from "../assets/images/at.jpg";
// import '../../assets/css/style.css';

function AboutMe() {

  return (
    <section className="my-5">
        
            <h5 className="left-header">Thanks for checking out my portfolio!</h5>
            <p></p>
            <img src={aboutImage} className="my-2" style={{ width: "20%" }} alt="cover" />
            <p></p>
            <div>
                <p>
                Living in the Pacific Northwest for over twenty years, I've worked supporting globally-scaled, enterprise wide online applications, at both the website and database layers, in projects supporting legacy Microsoft IIS Manager and SQL Server based applications to newer Azure web services sand online websites. 
                </p>
                <p>
                Last year I spent the year studying Agile Methodology and PMI, and most recently this year my university studies are focusing on full stack development. 
                </p>
                <p>
                Front-end browser side technologies studies have included creating projects hightlighted under the Portfolio tab created using VSCode, Gitbash, JavaScript, API, jQuery, HTML, CSS, and uploading these projects to GitHub. 
                </p>
                <p>
                And from the back-end and PaaS database perspective I've been recently building applications using the following technologies: MERN stack, React, Node.js, Express.js, Heroku JawsDB, MySQL, MySQL2, SQLite, Heroku mLab, MongoDB, Mongoose.js. Devtools utilized during these exercises have included Git, npm, MySQL Workbench, and testing with Jest.
                </p>
                <p>
                The previous years my focus was centered on Azure cloud services deployment, optimization, alerting, maintenance, security, and legacy migrations from Windows Server Enterprise platforms, and IIS Manager and SQL Servers software.
                Supporting Azure cloud services and Windows based enterprise applications and online websites for various Microsoft.com community, forum, blog and docs websites, I provided escalated engineering support, along with web app and virtual machine environment setups, live-site quick fixes, site redirects, migrations, longterm maintenance, monitoring, and on-premises system-wide rebuilds to the newer cloud platforms.
                </p>
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
