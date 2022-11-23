var menu = document.querySelector(".menu");
var drawer = document.getElementById("drawer");
var icon = document.getElementById("menu-icon");
var isClose = true;
menu.addEventListener("click", () => {
    if(isClose)
    {
        drawer.style.right="-8%";
        icon.className = "fa fa-close";

    }
    else{
        drawer.style.right="-110%";
        icon.className = "fa fa-navicon";
    }
    isClose = !isClose;
});

var skills = document.querySelector(".skills");
var svgLink = "http://www.w3.org/2000/svg";

function createElement(language,percentage){

    var box = document.createElement("div");
    box.className="box";
    var circular_progress = document.createElement("div");
    circular_progress.className = "circular-progress";
    var svg = document.createElementNS(svgLink,"svg");

    var outer_circle= document.createElementNS(svgLink,"circle");
    outer_circle.setAttribute("r",60);
    outer_circle.setAttribute("cx",65);
    outer_circle.setAttribute("cy",65);
    outer_circle.setAttributeNS(null,"class","outer-circle");
    svg.appendChild(outer_circle);

    var inner_circle= document.createElementNS(svgLink,"circle");
    inner_circle.setAttribute("r",60);
    inner_circle.setAttribute("cx",65);
    inner_circle.setAttribute("cy",65);
    let dashoffset = 377 - percentage/100*377;
    inner_circle.setAttribute("stroke-dashoffset",dashoffset);
    inner_circle.setAttributeNS(null,"class","inner-circle");
    svg.appendChild(inner_circle);
    circular_progress.appendChild(svg);

    var percent = document.createElement("div");
    percent.className="percent";
    percent.innerHTML="<h2>"+percentage+"<span>%</span></h2>";
    circular_progress.appendChild(percent);
    box.appendChild(circular_progress);

    let languageTitle = document.createElement("div");
    languageTitle.className="language";
    languageTitle.innerHTML="<h2>"+language+"</h2>"
    box.appendChild(languageTitle)
    skills.appendChild(box);
  
}
var skillDetails={
    "HTML":70,
    "JAVA":80,
    "CSS":90,
    "PYTHON":50,
    "FLUTTER":40,
    "PHP":40,
    "JAVASCRIPT":60,
    "REACT":80,
    "DJANGO":60

}
for(let key in skillDetails){
    createElement(key,skillDetails[key]);
}

// Portfolio scripts
var popup = document.getElementById("popup");

var popupClose = document.getElementById("popup-close");
popupClose.addEventListener("click",() => {
    popup.style.visibility="hidden";
});


var projectList = [
    {
        project : "College Finder",
        imgSrc : "./images/collegefinder.jpg",
        codeLink : "https://github.com/bikrampoudel9/College-Finder-Android-App.git",
        language : "Java",
        demoLink : ""
    },
    {
        project : "Time - rate System",
        imgSrc : "./images/collegefinder.jpg",
        codeLink : "https://github.com/bikrampoudel9/time_rate_system.git",
        language : "Flutter",
        demoLink : ""
    },
    {
        project : "Movie Rental System",
        imgSrc : "./images/collegefinder.jpg",
        codeLink : "",
        language : "Python",
        demoLink : ""
    },
    {
        project : "Hotel Rating System",
        imgSrc : "./images/12345.jpg",
        codeLink : "https://github.com/bikrampoudel9/hotel_rating_system.git",
        language : "C#",
        demoLink : ""
    },
    {
        project : "Stock Management System",
        imgSrc : "./images/collegefinder.jpg",
        codeLink : "https://github.com/bikrampoudel9/stock_management_system",
        language : "C#, ASP.NET",
        demoLink : ""
    },
    {
        project : "Personal Portfolio",
        imgSrc : "./images/collegefinder.jpg",
        codeLink : "",
        language : "Html,Css,Javascript",
        demoLink : ""
    }
];

var portfolios = document.getElementById("portfolios");
var proHeading = document.getElementById("pro-heading");
var proName = document.getElementById("pofo-pro-nm");
var proCode = document.getElementById("pro-code");
var proLang = document.getElementById("lang");
var proDemo = document.getElementById("pro-demo");
var proImg = document.getElementById("project-img");


function addPortfolio(project,imgSrc,codeLink,language,demoLink){
    let projectBox = document.createElement("div");
    projectBox.className = "box";
    let projectImg = document.createElement("img");
    projectImg.src=imgSrc;
    let portfolioTitle = document.createElement("div");
    portfolioTitle.className="portfolio-title";
    portfolioTitle.innerHTML="<h5>"+project+"</h5>";
    projectBox.appendChild(projectImg);
    projectBox.appendChild(portfolioTitle);

    projectBox.addEventListener("click",()=>
    {
        proHeading.innerText=project;
        proName.innerText=project;
        proCode.href=codeLink;
        proLang.innerText=language;
        proDemo.href=demoLink;
        proImg.src=imgSrc;
        popup.style.visibility ="visible";
        
    })
    portfolios.appendChild(projectBox);
}

projectList.forEach((portfolio)=>{
    addPortfolio(portfolio.project, portfolio.imgSrc, portfolio.codeLink, portfolio.language,
        portfolio.demoLink
        );
});


function sendMail(){
    
    var mailto = "bikrampoudel9@gmail.com";
    var mailFrom = document.getElementById("mailFrom").value;
    var subject = document.getElementById("mailsubject").value;
    var mailMessage = document.getElementById("mailmessage").value;
    Email.send({
        SecureToken :"1d19b8a6-15c8-4b77-bebb-d702263bf42f",
        To : mailto,
        From : mailFrom,
        Subject : subject,
        Body : mailMessage,
    }).then(
      message => alert("Mail Successfully send")
    );
}
    
    

