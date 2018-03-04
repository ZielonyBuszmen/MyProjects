const array = [
  {
    title: 'Hackaton WawCode',
    description: 'Opis jakis tam',
    photo: 'photos/placeholder.png',
    link: {
      github: 'guthub.com/asdasd',
      www: ['pplan.cba.pl',],
      descLink: 'zielonybuszmen.github.io/asdasd',
      blog: 'asd'
    }
  },
  {
    title: 'Blog ',
    description: 'Opis jakis tam',
    photo: 'photos/placeholder.png',
    link: {
      github: 'guthub.com/asdasd',
      www: ['pplan.cba.pl',],
      descLink: 'zielonybuszmen.github.io/asdasd',
      blog: 'asd'
    }
  },
  {
    title: 'projektMoodle',
    description: 'W pełni działająca aplikacja e-learningowa, umożliwiająca wysyłanie materiałów, tworzenie testów, wystawianie ocen i administrowanie kursem. Projekt został stworzony na potrzeby zaliczenia programowania w czwartej klasie technikum informatycznego.',
    photo: 'photos/projektMoodle.png',
    link: {
      github: 'https://github.com/bartoszgajda55/projektMoodle',
      www: ['http://projektmoodle.cba.pl/', 'http://projektmoodle.za.pl/',],
      blog: 'https://zielonybuszmen.github.io/2017/02/23/projekt-moodle-prosta-platforma-e-learningowa/',
    }
  },
  {
    title: 'projektSklep',
    description: 'Projekt sklepu internetowego wraz z paginacją, filtrowaniem, koszykiem, składaniem zamówienia i panelem administratora dla pracownika. Projekt został stworzony na potrzeby zaliczenia programowania w czwartej klasie technikum informatycznego.',
    photo: 'photos/projektSklep.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/projektSklep',
      www: ['http://projektsklep.cba.pl/','http://projektsklep.za.pl/'],
      blog: 'https://zielonybuszmen.github.io/2017/02/23/projekt-sklep-prosty-sklep-internetowy/'
    }
  },
  {
    title: 'onePage Hafty',
    description: 'Opis jakis tam',
    photo: 'photos/placeholder.png',
    link: {
      github: 'guthub.com/asdasd',
      www: ['pplan.cba.pl',],
      descLink: 'zielonybuszmen.github.io/asdasd',
      blog: 'asd'
    }
  },
  {
    title: 'jpg.aq.pl',
    description: 'Opis jakis tam',
    photo: 'photos/placeholder.png',
    link: {
      github: 'guthub.com/asdasd',
      www: ['pplan.cba.pl',],
      descLink: 'zielonybuszmen.github.io/asdasd',
      blog: 'asd'
    }
  },
  {
    title: 'projektMoodle',
    description: 'Opis jakis tam',
    photo: 'photos/placeholder.png',
    link: {
      github: 'guthub.com/asdasd',
      www: ['pplan.cba.pl',],
      descLink: 'zielonybuszmen.github.io/asdasd',
      blog: 'asd'
    }
  },
];

/**
 * Tworzy odnośniki WWW
 * @param linkObject
 * @returns {string}
 */
function createWwwLinks(linkObject) {
  const links = linkObject.www.map((element, i) =>
    `<a href="${element}" class="btn btn-sm btn-outline-secondary">
      <span class="oi oi-globe"></span> ${(i == 0) ? 'WWW' : ''}
    </a>`
  );

  return `
    <div class="btn-group">
      ${links.join('')}
    </div>`;
}

function createGitHubLink(linkObject) {
  if (linkObject.github == '') return '';
  return `
    <a href="${linkObject.github}" class="btn btn-sm btn-outline-secondary github-button">
      <img src="photos/github.svg"> GitHub
    </a>
  `;

}

function createBlogLink(linkObject) {
  if (linkObject.blog == '') return '';
  return `
    <a href="${linkObject.blog}" class="btn btn-sm btn-outline-secondary link-project-button">
      <span class="oi oi-project"></span> Opis
    </a>
  `;
}

function createTile(projectObject) {
  const {title, description, link, photo} = projectObject;

  const template = `
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${photo}" alt="${title}">
      <div class="card-body">
        <b>${title}</b>
        <p class="card-text">${description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            ${createGitHubLink(link)}
            ${createBlogLink(link)}
            </div>
            ${createWwwLinks(link)}
        </div>
      </div>
    </div>
  `;
  const node = document.createElement('div');
  node.className += 'col-md-4';
  node.innerHTML = template;
  document.getElementById('projects_list').appendChild(node);
}

function initializeAllTiles(array) {
  array.map((element) => {
    createTile(element)
  });
}

initializeAllTiles(array);