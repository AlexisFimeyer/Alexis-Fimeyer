(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),r=t.n(l),c=(t(13),t(1)),s=t(2),m=t(4),o=t(3),u=t(5),p=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},e.name),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.role,".",e.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))})))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profilepic.png",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"columns contact-details"},i.a.createElement("h2",null,"Contact Details"),i.a.createElement("p",{className:"address"},i.a.createElement("span",null,e.name),i.a.createElement("br",null),i.a.createElement("span",null,e.address),i.a.createElement("br",null),i.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),i.a.createElement("p",null,e.Achievements)))}))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Certificates"))),i.a.createElement("div",{className:"nine columns main-col"},e.certificates&&e.certificates.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),i.a.createElement("p",null,i.a.createElement("a",{href:e.Achievements.url,target:"_blank",rel:"noopener noreferrer"},e.Achievements.text))))}))),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("p",null,e.skillsDescription),i.a.createElement("div",{className:"bars"},i.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return i.a.createElement("li",null,i.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),i.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"Check Out Some of My Projects."),i.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return i.a.createElement("div",{className:"columns portfolio-item"},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,e.name),i.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={imagebaseurl:"AlexisFimeyer.github.io/",name:"Alexis Fimeyer",role:"Student at TUDelft in computer science and engineering",roleDescription:"",socialLinks:[{name:"github",url:"https://github.com/AlexisFimeyer",className:"fa fa-github"}],aboutme:"I am currently a second year student at TUDelft and pursuing a bachelor in computer science and engineering, following the data variant, with a minor in quantum computing, quantum information and quantum technology.",address:"Netherlands",website:"https://AlexisFimeyer.github.io",education:[{UniversityName:"Delft University of Technology",specialization:"Minor Quantum Computing, Quantum Information and Quantum Technology.",MonthOfPassing:"Sept-Feb",YearOfPassing:"2024-2025",Achievements:"Minor focusing on the mathematical foundations of quantum mechanics, quantum sensing and measurement techniques, and advanced topics like semiconductor and superconductor quantum bits. The minor also covers quantum communication and computation, providing a comprehensive understanding of the emerging field of quantum technology."},{UniversityName:"BeDataDriven",specialization:"Software Engineer Intern",MonthOfPassing:"April-June",YearOfPassing:"2024",Achievements:"Worked on developping an AI powered spreadsheet importer for ActivityInfo."},{UniversityName:"Delft University of Technology",specialization:"Bachelor of Computer Science and Engineering - Data Variant",MonthOfPassing:"Sept-July",YearOfPassing:"2022-2025",Achievements:"Second year completed."},{UniversityName:"\xc9cole Europ\xe9enne de Bruxelles II",specialization:"Mathematics, physics and chemistry",MonthOfPassing:"Sept-July",YearOfPassing:"2008-2022",Achievements:"European Baccalaureate"}],certificates:[{CompanyName:"Stanford University",specialization:"Machine Learning",MonthOfLeaving:"2021",YearOfLeaving:"",Achievements:{text:"Certificate of completion (97.46%)",url:"https://coursera.org/share/66a2da2d7403df4926b08dc76b26d0a2"}},{CompanyName:"Michigan University",specialization:"Applied Machine Learning in Python",MonthOfLeaving:"2021",YearOfLeaving:"",Achievements:{text:"Certificate of completion (92.04%)",url:"https://coursera.org/share/8638ab3bf0cef84337ff2fdfc8cda3e9"}},{CompanyName:"\xc9cole polytechnique f\xe9d\xe9rale de Lausanne",specialization:"Optimization: principles and algorithms",MonthOfLeaving:"2021",YearOfLeaving:"",Achievements:{text:"Certificate of completion",url:"https://courses.edx.org/certificates/f206032bfa254a74afd25b9fcc3fc1bb"}}],skillsDescription:"",skills:[{skillname:"java"},{skillname:"python"},{skillname:"javascript"},{skillname:"Octave"}],portfolio:[{name:"Assembly BitMap encoder",description:"Script",imgurl:"/images/project-2.png",url:"https://github.com/AlexisFimeyer/Assembly-projects/tree/main/BitMap%20Encoder"},{name:"Python Synthetic Data Generator with Ollama",description:"Container",imgurl:"/images/Datagen.png",url:"https://github.com/AlexisFimeyer/Synthetic-Data-Agent-Generator"},{name:"SHA-1 implemented in Assembly",description:"Script",imgurl:"/images/project-1.png",url:"https://github.com/AlexisFimeyer/Assembly-projects/tree/main/SHA1"},{name:"Talio - A java based board sharing app",description:"App",imgurl:"images/project-3.png",url:"https://github.com/AlexisFimeyer/Talio"},{name:"A BrainFuck interpreter written in Assembly",description:"Script",imgurl:"images/project-4.png",url:"https://github.com/AlexisFimeyer/Assembly-projects/tree/main/BrainFuck"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},g=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{resumeData:v}),i.a.createElement(h,{resumeData:v}),i.a.createElement(d,{resumeData:v}),i.a.createElement(f,{resumeData:v}),i.a.createElement(E,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.4938c743.chunk.js.map