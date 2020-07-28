import React from "react";
import aboutImage from "../assets/images/at.jpg";
// import '../../assets/css/style.css';

function AboutMe() {

  return (
    <section className="my-5">
        
            <h2 class="left-header">Background</h2>
            <div>
                <p>
                Located in Seattle, as an applications engineer, I've worked in projects supporting Microsoft SQL Server based applications to Azure web services and online websites. The last few years my focus has been on Azure cloud services and legacy migrations with Windows Server Enterprise, IIS Manager, and SQL Servers software.
                Supporting Azure cloud services and Windows based enterprise applications and online websites, I specialize in web app and virtual machine environment setups, live-site quick fixes and on-call escalated support, to longterm maintenance, monitoring, and on-premises system updates and rebuilds to the newer cloud platforms.
                After spending the last year studying Agile Methodology and PMI, this year my university studies are focusing on full stack development. Technologies focused on the front-end side have been VSCode, Gitbash, JavaScript, API, jQuery, HTML, CSS, and uploading these projects to GitHub. And from the back-end and PaaS database perspective I've been recently building applications using the following technologies: Node.js, Express.js, Heroku, JawsDB, MySQL, MySQL2, SQLite. Devtools utilized during these exercises have included Git, npm, MySQL Workbench, and testing with Jest.
                </p>
            </div>
        
        <img src={aboutImage} className="my-2" style={{ width: "20%" }} alt="cover" />
    </section>
  );

}

// const AboutMe = () => (
//   <div>
//     <h1>About Me</h1>
//     <p>
//         Located in Seattle, as an applications engineer, I've worked in projects supporting Microsoft SQL Server based applications to Azure web services and online websites. The last few years my focus has been on Azure cloud services and legacy migrations with Windows Server Enterprise, IIS Manager, and SQL Servers software.
//                 Supporting Azure cloud services and Windows based enterprise applications and online websites, I specialize in web app and virtual machine environment setups, live-site quick fixes and on-call escalated support, to longterm maintenance, monitoring, and on-premises system updates and rebuilds to the newer cloud platforms.
//                 After spending the last year studying Agile Methodology and PMI, this year my university studies are focusing on full stack development. Technologies focused on the front-end side have been VSCode, Gitbash, JavaScript, API, jQuery, HTML, CSS, and uploading these projects to GitHub. And from the back-end and PaaS database perspective I've been recently building applications using the following technologies: Node.js, Express.js, Heroku, JawsDB, MySQL, MySQL2, SQLite. Devtools utilized during these exercises have included Git, npm, MySQL Workbench, and testing with Jest.
//     </p>
//   </div>
// );

export default AboutMe;
