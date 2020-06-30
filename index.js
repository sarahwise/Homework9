const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {   type: "input",
        name: "title",
        message: "Input your title here."
    },

    {   type: "input",
        name: "description",
        message: "Describe your repo here."
    },

    {   type: "input",
        name: "table of contents",
        message: "Input table of contents here."
    },

    {   type: "input",
        name: "install",
        message: "What command would you like to install dependencies?",
        default: "npm install"
    },

    {   type: "input",
        name: "usage",
        message: "Input instructions on using this repo here."
    },

    {   type: "list",
        name: "license",
        message: "What kind of license does your project require?",
        choices: ["none", "apache-2.0", "cc", "osl-3.0"]
    },

    {   type: "input",
        name: "contributing",
        message: "Is there anything a user would need to know to contribute to this repository?"
    },

    {   type: "input",
        name: "test",
        message: "What command would you like to run tests?"
    },

    {   type: "input",
        name: "questions",
        message: "Input any other questions here."
    },

    {   type: "input",
        name: "email",
        message: "input your email here"
    },

    //add questions
];

function writeToFile(fileName, data) {
    //setup writefile
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    //build out intialize
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Loading");
    
     api
    .getUser(inquirerResponses.github)
    .then(({ data }) => {
     writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data }));
    })
    });

}

init();
