"use strict";
let obj = document.getElementById("obj");
let edu = document.getElementById("edu");
let skil = document.getElementById("skil");
let work = document.getElementById("work");
let objsec = document.getElementById("objsec");
let edusec = document.getElementById("edusec");
let skill = document.getElementById("skill");
let worksec = document.getElementById("worksec");
obj?.addEventListener('click', () => {
    if (objsec.style.display == "block") {
        objsec.style.display = "none";
    }
    else {
        objsec.style.display = "block";
    }
});
edu?.addEventListener('click', () => {
    if (edusec.style.display == "block") {
        edusec.style.display = "none";
    }
    else {
        edusec.style.display = "block";
    }
});
skil?.addEventListener('click', () => {
    if (skill.style.display == "block") {
        skill.style.display = "none";
    }
    else {
        skill.style.display = "block";
    }
});
work?.addEventListener('click', () => {
    if (worksec.style.display == "block") {
        worksec.style.display = "none";
    }
    else {
        worksec.style.display = "block";
    }
});
