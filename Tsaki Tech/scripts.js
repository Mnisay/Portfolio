
class ProjectCard {
    constructor(thumbnail, modalImages, companyName, projectTitle, jobTitle, description, portfolioLink) {
      this.thumbnail = thumbnail;
      this.projectTitle = projectTitle;
      this.description = description;
      this.portfolioLink = portfolioLink;
    }
  }

    // Generate the HTML for the card
    generateHTML();

    // Blank array
  const projects = [];

  projects.push(new ProjectCard(
    "http://127.0.0.1:5500/Assets/thumbnail.png",
    ["Assets/thumbnail.png"], //Note the []
    "Add your project title here",
    "Add a detailed description of your project in here",
    "Add a link to your Netlify upload here"
  ));

  const projectContainer = document.getElementById('project-container');
  projects.forEach(project => {
    projectContainer.innerHTML += project.generateHTML();
  });
