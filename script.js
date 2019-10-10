// VIEW
function renderProject(project) {
  const projectsContainerElement = document.querySelector('#projects');
  const projectArticleElement = document.createElement('article');
  const projectTitleElement = document.createElement('h3');
  const projectLinkElement = document.createElement('a');

  projectTitleElement.textContent = project.title;
  projectLinkElement.textContent = 'Go';
  projectLinkElement.setAttribute('href', project.link);

  projectArticleElement.className = 'project-item';
  projectArticleElement.append(projectTitleElement, projectLinkElement);
  projectsContainerElement.appendChild(projectArticleElement);
}

function renderError(error) {
  const projectsContainerElement = document.querySelector('#projects');
  projectsContainerElement.textContent = `Project rendering failed due to: ${error}`;
}

// CONTROLLER
function main() {
  fetch('projects.json')
    .then(response => response.json())
    .then((data) => {
      data.projects.forEach(project => {
        renderProject(project);
      });
    })
    .catch(error => renderError(error));
}

window.onload = main;
