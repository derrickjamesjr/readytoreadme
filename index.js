// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'node:fs/promises';
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type:'input',
            name:'docname',
            message:'What is the name of the project?'
        },
        {
            type:'input',
            name: 'description',
            message: 'Describe your document briefly.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your application?'
        },
        {
            type:'input',
            name:'useit',
            message:"How does it work?"
        },

        {
            type:'input',
            name:'contribution',
            message:'Who contributed to this project?'
        },
        {
            type:'input',
            name:'testing',
            message:'How do you test it to make sure it works?'
        },
        {
            type:'input',
            name:'gettoyouemail',
            message:'Please provide your email address.'
        },
        {
            type:'input',
            name:'gettoyougit',
            message:'Please provide a link to your Github profile.'
        }
    ])
    
    .then(data => {
        const file = `${data.docname
            .toLowerCase()
            .split(' ')
            .join('')}.json`;
    
    console.log(data);

    fs.appendFile('README.md', JSON.stringify(data, null, '\t'), err => 
    err ? console.log(err) : console.log('Excellent!'));});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();