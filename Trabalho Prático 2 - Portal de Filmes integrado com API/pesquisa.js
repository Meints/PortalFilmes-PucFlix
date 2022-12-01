const API_KEY = "14a8cfac1db5524c7acc952895612cc8";
let pesquisa1 = localStorage.getItem('pesquisa')



function executaPesquisa() {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${pesquisa1}&page=1`)
    xhr.send ()
}
executaPesquisa();

function exibeNoticias() {
    document.getElementById('pesquisaName').innerText = pesquisa1.toUpperCase();
    let texto = ''
    let dados = JSON.parse(this.responseText)
    console.log(dados)
    for (let i = 0; i < dados.results.length; i++) {
        let filme = dados.results[i];
        texto = texto + `<div class="row" id="infoMovie">
        <div class="col-lg-2 col-md-4 col-sm-6">
          <img class="image" src="https://image.tmdb.org/t/p/original/${filme.poster_path}" alt="" />
        </div>
        <div class="col-lg-10 col-md-8 col-sm-6">
          <p class="textMovie"><strong>Nome: </strong> ${filme.title}</p>
          <p class="textMovie"><strong>Descrição: </strong>${filme.overview}</p>
          <p class="textMovie"><strong>Lançamento: </strong>${filme.release_date}</p>
          <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank" id="${filme.id}"><p class="textMovie link-ligth">Saiba mais</p></a>
        </div>
      </div>`
    }
    let tela = document.getElementById('infoMovie')
    tela.innerHTML = texto;
}
exibeNoticias();