// Mapa para consulta de pesquisa e URL correspondente
const searchMap = new Map([
  // Décadas
  ['1960', '../testes/60.html'],
  ['60', '../testes/60.html'],
  ['anos 60', '../testes/60.html'],
  ['1970', '../testes/70.html'],
  ['70', '../testes/70.html'],
  ['anos 70', '../testes/70.html'],
  ['1980', '../testes/80.html'],
  ['80', '../testes/80.html'],
  ['anos 80', '../testes/80.html'],
  ['1990', '../testes/90.html'],
  ['90', '../testes/90.html'],
  ['anos 90', '../testes/90.html'],
  ['2000', '../testes/2000.html'],
  ['2000s', '../testes/2000.html'],
  ['anos 2000', '../testes/2000.html'],

  //história, cantores e decadas
  ['história', '../história/index.html'],
  ['historia', '../história/index.html'],
  ['História', '../história/index.html'],
  ['Historia', '../história/index.html'],
  ['historia do mpb', '../história/index.html'],
  ['história do mpb', '../história/index.html'],
  ['História do mpb', '../história/index.html'],
  ['Cantores', '../cantores/cant.html'],
  ['cantores', '../cantores/cant.html'],
  ['décadas', '../Décadas/Decadas.html'],
  ['decadas', '../Décadas/Decadas.html'],
  ['Décadas', '../Décadas/Decadas.html'],
  ['Decadas', '../Décadas/Decadas.html'],



  // Cantores
  ['gilberto gil', '../biografia/gilberto 60/gil.html'],
  ['gil', '../biografia/gilberto 60/gil.html'],
  ['Gilberto Gil', '../biografia/gilberto 60/gil.html'],
  ['Gil', '../biografia/gilberto 60/gil.html'],

  ['caetano veloso', '../biografia/caetano 60/caetano.html'],
  ['caetano', '../biografia/caetano 60/caetano.html'],
  ['Caetano Veloso', '../biografia/caetano 60/caetano.html'],
  ['Caetano', '../biografia/caetano 60/caetano.html'],

  ['chico buarque', '../biografia/chico 60/chico.html'],
  ['chico', '../biografia/chico 60/chico.html'],
  ['Chico Buarque', '../biografia/chico 60/chico.html'],
  ['Chico', '../biografia/chico 60/chico.html'],

  ['tim maia', '../biografia/tim 70/timmaia.html'],
  ['tim', '../biografia/tim 70/timmaia.html'],
  ['Tim Maia', '../biografia/tim 70/timmaia.html'],
  ['Tim', '../biografia/tim 70/timmaia.html'],

  ['gal costa', '../biografia/gal 70/gal.html'],
  ['gal', '../biografia/gal 70/gal.html'],
  ['Gal Costa', '../biografia/gal 70/gal.html'],
  ['Gal', '../biografia/gal 70/gal.html'],

  ['raul seixas', '../biografia/raul 70/raul.html'],
  ['raul', '../biografia/raul 70/raul.html'],
  ['Raul Seixas', '../biografia/raul 70/raul.html'],
  ['Raul', '../biografia/raul 70/raul.html'],

  ['cazuza', '../biografia/cazuza 80/cazuza.html'],
  ['Cazuza', '../biografia/cazuza 80/cazuza.html'],

  ['rita lee', '../biografia/rita 80/rita.html'],
  ['rita', '../biografia/rita 80/rita.html'],
  ['Rita Lee', '../biografia/rita 80/rita.html'],
  ['Rita', '../biografia/rita 80/rita.html'],

  ['roberto carlos', '../biografia/roberto 80/roberto.html'],
  ['roberto', '../biografia/roberto 80/roberto.html'],
  ['Roberto Carlos', '../biografia/roberto 80/roberto.html'],
  ['Roberto', '../biografia/roberto 80/roberto.html'],

  ['skank', '../biografia/skank 90/skank.html'],
  ['Skank', '../biografia/skank 90/skank.html'],

  ['mamonas assassinas', '../biografia/mamonas 90/mamonas.html'],
  ['mamonas', '../biografia/mamonas 90/mamonas.html'],
  ['Mamonas Assassinas', '../biografia/mamonas 90/mamonas.html'],
  ['Mamonas', '../biografia/mamonas 90/mamonas.html'],

  ['é o tchan', '../biografia/tchan 90/tchan.html'],
  ['tchan', '../biografia/tchan 90/tchan.html'],
  ['É o Tchan', '../biografia/tchan 90/tchan.html'],
  ['Tchan', '../biografia/tchan 90/tchan.html'],

  ['seu jorge', '../biografia/seujorge 20/seujorge.html'],
  ['seu', '../biografia/seujorge 20/seujorge.html'],
  ['Seu Jorge', '../biografia/seujorge 20/seujorge.html'],
  ['Seu', '../biografia/seujorge 20/seujorge.html'],

  ['ivete sangalo', '../biografia/ivete 20/ivete.html'],
  ['ivete', '../biografia/ivete 20/ivete.html'],
  ['Ivete Sangalo', '../biografia/ivete 20/ivete.html'],
  ['Ivete', '../biografia/ivete 20/ivete.html'],

  ['tribalistas', '../biografia/tribalista 20/tribalista.html'],
  ['Tribalistas', '../biografia/tribalista 20/tribalista.html']
]);

// Função para realizar a pesquisa
function performSearch() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  
  if (searchMap.has(query)) {
    // Redirecionar para a página correspondente
    window.location.href = searchMap.get(query);
  } else {
    alert('Página não encontrada para a pesquisa: ' + query);
  }
}



// Função para inicializar eventos
function initializeSearchEvents() {
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('search-input');

  // Verificar se os elementos existem antes de adicionar eventos
  if (searchContainer && searchInput) {
    // Abrir barra ao passar o mouse
    searchContainer.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer); // Cancela o temporizador, se existir
      searchContainer.classList.add('active'); // Adiciona a classe que mantém a barra aberta
    });

    // Fechar barra após um pequeno atraso ao sair com o mouse
    searchContainer.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        if (!searchInput.matches(':focus')) { // Fecha apenas se o campo não estiver focado
          searchContainer.classList.remove('active');
        }
      }, 1000); // Atraso de 300ms (pode ajustar conforme necessário)
    });

    // Manter a barra aberta ao focar no campo
    searchInput.addEventListener('focus', () => {
      searchContainer.classList.add('active');
      clearTimeout(closeTimer); // Evita fechar ao focar
    });

    // Fechar barra ao desfocar o campo, se o mouse não estiver sobre o container
    searchInput.addEventListener('blur', () => {
      if (!searchContainer.matches(':hover')) {
        searchContainer.classList.remove('active');
      }
    });

    // Executar a pesquisa ao pressionar Enter
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        performSearch();
        event.preventDefault(); // Evita o envio de formulário se estiver dentro de um formulário
      }
    });
  }
}

// Inicializar os eventos após carregar a página
initializeSearchEvents();


// Inicializar eventos ao carregar a página
document.addEventListener('DOMContentLoaded', initializeSearchEvents);


// Seleciona a barra de navegação
const navbar = document.querySelector('.navbar');

// Função para adicionar/remover a classe
function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', handleScroll);


document.addEventListener("DOMContentLoaded", () => {
  const increaseFontButton = document.getElementById("increase-font");
  const decreaseFontButton = document.getElementById("decrease-font");
  const rootElement = document.documentElement; // Alvo: elemento root (html)
  let currentFontSize = parseFloat(window.getComputedStyle(rootElement).fontSize);
  const maxFontSize = 28; // Tamanho máximo da fonte em pixels
  const minFontSize = 18; // Tamanho mínimo da fonte em pixels

  // Aumenta o tamanho da fonte
  increaseFontButton.addEventListener("click", () => {
      currentFontSize += 2; // Incrementa em 2px
      if (currentFontSize > maxFontSize) {
        currentFontSize = maxFontSize; // Garante que não ultrapasse o limite
    }
      rootElement.style.fontSize = `${currentFontSize}px`;
  });

  // Diminui o tamanho da fonte
  decreaseFontButton.addEventListener("click", () => {
      if (currentFontSize > 18) { // Limita o tamanho mínimo da fonte
          currentFontSize -= 2;
          rootElement.style.fontSize = `${currentFontSize}px`;
      }
  });
});
