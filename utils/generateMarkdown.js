// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.docname}

  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Email](#email)
  * [GitHub](#github)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.useit}

  ## License 
  This project is license under ${data.license}

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Email
  Contact me directly at ${data.gettoyouemail} if you have any questions.
  
  ## GitHub
  View more of my projects at https://github.com/${data.gettoyougit}.
`;
}


// use for importing Markdown in index 
// export default generateMarkdown;
module.exports = generateMarkdown;