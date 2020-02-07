const array = [
  {
    title: 'Testowanie aplikacji w React.js.',
    description: 'Prawie trzy-godzinny kurs wideo. Podczas kursu poruszane są tematy związane z testami jednostkowymi i integracyjnymi. Omawiane są wady i zalety testowania, wyjaśnione zjawisko regresji, i wiele więcej. Całość oparta jest na praktycznych przykładach prezentowanych w kodzie źródłowym. ',
    photo: 'photos/kursJestJs.png',
    link: {
      github: '',
      www: ['https://videopoint.pl/kurs/testowanie-aplikacji-w-react-js-kurs-video-praca-z-biblioteka-jest-js-krzysztof-komar,vtesap.htm', 'https://videopoint.pl/kurs/testowanie-aplikacji-w-react-js-kurs-video-praca-z-biblioteka-jest-js-krzysztof-komar,vtesap.htm'],
      blog: ''
    },
    date: 'czerwiec - wrzesień 2019',
  },
  {
    title: 'Literaki',
    description: 'Literaki to dwu-osobowa gra, polegająca na zgadywaniu popularnych polskich przysłów. Napisana w Pythonie (backend) oraz w React+Redux (frontend). Komunikacja pomiędzy graczami a serwerem opiera się o websockets.',
    photo: 'photos/literaki.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/Literaki',
      www: [],
      blog: ''
    },
    date: 'kwiecień 2019',
  },
  {
    title: 'VirtualPiano',
    description: 'VirtualPiano to aplikacja pozwalająca na grę na pianinie za pomocą zwykłej klawiatury w przeglądarce, z możliwością przełączania typów granego dźwięku',
    photo: 'photos/virtualPiano.png',
    link: {
      github: 'https://github.com/Patrycja20/VirtualPiano',
      www: ['https://patrycja20.github.io/VirtualPiano/'],
      blog: ''
    },
    date: 'styczeń 2019',
  },
  {
    title: 'Image Changer',
    description: 'Program graficzny, służący do edycji istniejących obrazów i tworzenia nowych. Przekształcenia obrazów odbywają się za pomocą Canvasa z HTML5, a szkielet strony oparty jest o Reacta i Reduxa',
    photo: 'photos/imageChanger.png',
    link: {
      github: 'https://github.com/Patrycja20/ImageChanger',
      www: ['https://patrycja20.github.io/ImageChanger/'],
      blog: ''
    },
    date: 'listopad 2018',
  },
  {
    title: 'GraphProjekt',
    description: 'Aplikacja napisana w React i Redux, umożliwiająca sprawdzanie silnej spójności grafu.',
    photo: 'photos/graphProjekt.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/GraphProjekt',
      www: ['https://zielonybuszmen.github.io/GraphProjekt/'],
      blog: ''
    },
    date: 'czerwiec 2018',
  },
  {
    title: 'TimestampConverter ',
    description: '`Konwerter` timestampa na normalną datę i <i>vice versa</i>. Napisany w czystym JavaScript ES6, z wykorzystaniem Bootstrapa 4. Jest odpowiedzią na wszelkie bolączki toczące słabe konwertery krążące po sieci i wyświetlające masy reklam',
    photo: 'photos/timestampConverter.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/TimestampConverter',
      www: ['https://zielonybuszmen.github.io/TimestampConverter/'],
      blog: ''
    },
    date: 'kwiecień 2018',
  },
  {
    title: 'Kalendarz Historyczny ',
    description: 'Projekt zrealizowany podczas hackatonu <b>WawCode 2017</b>. Jest to kalendarz, wyświetlający wydarzenia z danego dnia, które miały miejsce w przeszłości i działy się na terenie Warszawy',
    photo: 'photos/kalendarzHistoryczny.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/WawCodeApi',
      www: [],
      blog: ''
    },
    date: 'październik 2017',
  },
  {
    title: 'Blog',
    description: 'Mocno techniczny blog programistyczny oparty o GoHugo i GitHub Pages',
    photo: 'photos/blog.png',
    link: {
      github: '',
      www: ['https://zielonybuszmen.github.io/',],
      blog: ''
    },
    date: 'luty 2017 - teraz',
  },
  {
    title: 'Algorytmy',
    description: 'Dosyć spore repozytorium z kodem i materiałami pomocnymi przy nauce <b>A</b>lgorytmów <b>i</b> <b>D</b>anych <b>S</b>truktur. Implementacja w C#.',
    photo: 'photos/algorytmy.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/Algorytmy',
      www: ['https://github.com/ZielonyBuszmen/Algorytmy/blob/master/README.md'],
      blog: ''
    },
    date: 'styczeń 2018',
  },
  {
    title: 'onePage Hafty',
    description: 'Projekt na zlecenie. Z założenia miała być to strona do auto-prezentacji, na której klient może pokazywać swoje ręko-dzieła. Dlatego też głównym miejscem na stronie jest galeria, uzupełniona dodatkowo o krótką notkę biograficzną. Wszystko wykonane jako ‘OnePage’. Strona została “zlokalizowana” w trzech językach, a sama jest napisana na Laravelu.',
    photo: 'photos/hafty.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/onePage-hafty',
      www: ['http://hafty-kasi.cba.pl/',],
      blog: 'https://zielonybuszmen.github.io/2017/02/23/onepage-hafty/'
    },
    date: 'luty 2017',
  },
  {
    title: 'projektMoodle',
    description: 'W pełni działająca aplikacja e-learningowa, umożliwiająca wysyłanie materiałów, tworzenie testów, wystawianie ocen i administrowanie kursem. Projekt został stworzony na potrzeby zaliczenia programowania w czwartej klasie technikum informatycznego.',
    photo: 'photos/projektMoodle.png',
    link: {
      github: 'https://github.com/bartoszgajda55/projektMoodle',
      www: ['http://projektmoodle.cba.pl/',],
      blog: 'https://zielonybuszmen.github.io/2017/02/23/projekt-moodle-prosta-platforma-e-learningowa/',
    },
    date: 'październik - listopad 2015',
  },
  {
    title: 'projektSklep',
    description: 'Projekt sklepu internetowego wraz z paginacją, filtrowaniem, koszykiem, składaniem zamówienia i panelem administratora dla pracownika. Projekt został stworzony na potrzeby zaliczenia programowania w czwartej klasie technikum informatycznego.',
    photo: 'photos/projektSklep.png',
    link: {
      github: 'https://github.com/ZielonyBuszmen/projektSklep',
      www: ['http://projektsklep.cba.pl/',],
      blog: 'https://zielonybuszmen.github.io/2017/02/23/projekt-sklep-prosty-sklep-internetowy/'
    },
    date: 'październik - listopad 2015',
  },
  {
    title: 'jpg.aq.pl',
    description: 'Projekt napisany na potrzeby własne. A potrzebą był szybki upload zdjęć do `chmury`, bez potrzeby logowania i innych niepotrzebnych formalności. I ten serwis taki jest - wrzucasz zdjęcie, dostajesz link i zapewnienie, że zdjęcie z czasem nie wygaśnie (jak ma to miejsce na wielu podobnych stronach).',
    photo: 'photos/jpg_aq_pl.png',
    link: {
      github: '',
      www: [],
      blog: 'https://zielonybuszmen.github.io/2017/02/22/jpg-aq-pl-hosting-screenow-i-zdjec/'
    },
    date: 'styczeń 2013',
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
  const {title, description, link, photo, date} = projectObject;

  const template = `
    <div class="card mb-4 box-shadow">
      <img class="card-img-top" src="${photo}" alt="${title}">
      <div class="card-body">
        <b>${title}</b>
        <p class="date text-secondary small">${date}</p>
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
  node.className += 'col-md-6 col-lg-4';
  node.innerHTML = template;
  document.getElementById('projects_list').appendChild(node);
}

function initializeAllTiles(array) {
  array.map((element) => {
    createTile(element)
  });
}

initializeAllTiles(array);