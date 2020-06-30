function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// Development will happen in generate markdown
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge( data.license, data.github, data.title)}

## Description

${data.description}

## Table Of Contents 
*Installation
*Usage
*License
*Contributing
*Tests
*Questions

## Installation

To install dependencies use this command:

${data.install}

## Usage

${data.usage}


${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests 
To run tests use this command:

${data.test}

## Questions

## User profile picture
${data.avatar_url}

## User email

Any other questions or comments can be directed at [${data.github}] at ${data.email}.

`;
}

module.exports = generateMarkdown;
