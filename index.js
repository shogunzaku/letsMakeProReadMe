// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message:"Whats the project title?",
            name:'title',
            // validate property to check that user provided a value
            validate: (value)=>{ if(value){return true} else {return 'i need a value to to continue'}}
        },
        {
            type: 'input',
            message:'How do you install the app?',
            name:'intallation',
            validate: (value)=>{ if (value){return true} else {return 'i need a value to to continue'}}
         },
        {
            type: 'input',
            message:'instructions to be follow?',
            name:'instructions',
            validate: (value)=>{ if (value){return true} else {return 'i need a value to to continue'}}
        },
        {
            type: 'input',
            message:'any credits?',
            name:'intallation',
            validate: (value)=>{ if (value){return true} else {return 'i need a value to to continue'}}
        },
        {
            type: 'input',
            message:'how do you use your app?',
            name:'usage',
            validate: (value)=>{ if (value){return true} else {return 'i need a value to to continue'}}
        },
        {
            // list of licenses
            type: 'list',
            message:'What license did you use?',
            name:'license',
            choices:['The MIT License', 'The GPL License','Apache License','GNU License','N/A'],
            validate: (value)=>{ if (value){ return true } else {return 'i need a value to to continue'}}
        },
        {
            type:'input',
            message:'GitHub username:',
            name:'git',
            validate: (value)=>{ if (value){ return true } else {return 'i need a value to to continue'}}
        },
        {
           type:'input',
           message:'E-mail:',
           name:'email',
           validate: (value)=>{ if (value){ return true } else {return 'i need a value to to continue'}}
        }
 ]
).then(({
    title,
    installation,
    instructions,
    credits,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{
// template
const template =`# ${title}
        
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [license](#license)
# Installation
${installation}
##Usage
${usage}
## Contribution
${contribution}
### Instructions
${instructions}
## Credits
${credits}
##License
${license}

# Contact
* GitHub :${git}
* Linkedin :${linkedin}
* E-mail :${email}`;
// function to create new readme using fs 
createNewFile(title,template);
}
);
// createNewFile function
function createNewFile(fileName,data){
// fs
fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Your README has been generated');
})
}
