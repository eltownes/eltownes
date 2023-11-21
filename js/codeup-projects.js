"use strict"

document.querySelectorAll(".projects").forEach( project =>
    project.addEventListener("click", getProject)
);

const projectDesc = [
    {
        name: "Codeup Design Project - Team Brett & Eric",
        obj: "Use Bootstrap to build a responsive site for Codeup Design.",
        descr: "The graphic design team has given us a style guide and 4 wireframes showing us how the site " +
            "should look according to the device screen size: xs, sm, md lg and xl.",
        media: "media/codeup-design.gif",
        width: "50%",
        link: "https://github.com/bret-eric-imugi/codeup-design-project"
    },
    {
        name: "Coffee Project - Team Garrett & Eric",
        obj: "To modernize a coffee menu.",
        descr: "We have inherited a project from Fancy Coffee Company©, and improvements need to be made to it. The " +
            "current version uses tables.",
        media: "media/coffee-project.gif",
        width: "75%",
        link: "https://github.com/Garrett-Eric-Coffee/coffee-project"
    },
    {
        name: "?",
        obj: "?",
        descr: "?",
        media: "media/coding_icon.png",
        width: "5%",
        link: ""
    },
    {
        name: "?",
        obj: "?",
        descr: "?",
        media: "media/coding_icon.png",
        width: "5%",
        link: ""
    },
    {
        name: "?",
        obj: "?",
        descr: "?",
        media: "media/coding_icon.png",
        width: "5%",
        link: ""
    },
    {
        name: "?",
        obj: "?",
        descr: "?",
        media: "media/coding_icon.png",
        width: "5%",
        link: ""
    }
]


function getProject (ev){
    const pNum = ev.target.id.substring(1,2);

    const newMain = `
        <p class="p-title">${projectDesc[pNum - 1].name}</p>
        <p class="p-objective">Objective: ${projectDesc[pNum - 1].obj}</p>
        <p class="p-descr">${projectDesc[pNum - 1].descr}
        <a href="${projectDesc[pNum - 1].link}" target="_blank" class="p-link">( project's GitHub 🚀 )</a>
        </p>
        <br>
        <div class="gif">
            <img src="${projectDesc[pNum - 1].media}" alt="project image" width="${projectDesc[pNum-1].width}">
            <br>
            
        </div>
        
    `
    document.querySelector("main").innerHTML = newMain;
}



