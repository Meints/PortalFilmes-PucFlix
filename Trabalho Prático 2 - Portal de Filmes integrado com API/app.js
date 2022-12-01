const API_KEY = "14a8cfac1db5524c7acc952895612cc8";
function pesquisa() {
    localStorage.setItem('pesquisa',document.getElementById('txtPesquisa').value)
    window.location.href = 'pesquisa.html'
}

document.getElementById('btnPesquisa').addEventListener ('click', pesquisa)

function executaPesquisa() {
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`)
    xhr.send ()


    let xhs = new XMLHttpRequest ();
    xhs.onload = emDestaque;
    xhs.open ('GET', `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
    xhs.send ()
}
executaPesquisa();

function exibeNoticias() {
    let texto = ''
    let dados = JSON.parse(this.responseText)
    let carousel1 = dados.results[0]
    texto = texto + `<div class="carousel-item active">
        <div class="row" style="margin-bottom: 35px;">
            <div class="col-sm-12 col-12 col-md-12 col-lg-6" style="min-height: 294px;">
                <img class="imagemCarousel" src="https://image.tmdb.org/t/p/original/${carousel1.backdrop_path}" alt="">
            </div>
            <div class="col-xs-12 col-12 col-lg-6 col-md-12">
                <p1 height="100% "></p1>

                <div class="row ">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1 class="titulo_filme">${carousel1.title}</h1>
                    </div>
                </div>
                    <div class="row detalhes_filme">
                
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <b>Sinopse:</b> ${carousel1.overview}
                            </div>

                <div class="row ">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Linguagem original:</b> ${carousel1.popularity}
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Popularidade:</b> ${carousel1.popularity}
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Estreia:</b> ${carousel1.release_date}
                    </div>
                </div>

                <div class="col-12">
                    <b>Avaliação:</b> ★ ${carousel1.vote_average}
                </div>

                <div class="col-12">
                    <button onclick="clickFilme(this.id)" id=" ${carousel1.id}">Saiba Mais..</button>
                </div>

            </div>
        </div>
    </div>
</div>`  

    for (let i = 1; i < 5; i++) {
        let filme = dados.results[i];
        texto = texto + `<div class="carousel-item">
        <div class="row" style="margin-bottom: 35px;">
            <div class="col-sm-12 col-12 col-md-12 col-lg-6" style="min-height: 294px;">
                <img class="imagemCarousel" src="https://image.tmdb.org/t/p/original/${filme.backdrop_path}" alt="">
            </div>
            <div class="col-xs-12 col-12 col-lg-6 col-md-12">
                <p1 height="100% "></p1>

                <div class="row ">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h1 class="titulo_filme">${filme.title}</h1>
                    </div>
                </div>
                    <div class="row detalhes_filme">
                
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <b>Sinopse:</b> ${filme.overview}
                            </div>

                <div class="row ">
                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Linguagem original:</b> ${filme.original_language}
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Popularidade:</b> ${filme.popularity}
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Estreia:</b> ${filme.release_date}
                    </div>
                </div>

                <div class="col-12">
                    <b>Avaliação:</b> ★ ${filme.vote_average}
                </div>

                <div class="col-12">
                    <button onclick="clickFilme(this.id)" id=${filme.id}>Saiba Mais..</button>
                </div>

            </div>
        </div>
    </div>
</div>`  
    }
    let tela = document.getElementById('carousel')
    tela.innerHTML = texto;
}
exibeNoticias();



function clickFilme(idClicado) {
    let filmeId = document.getElementById(idClicado)
    filmeId = filmeId.getAttribute('id')
    localStorage.setItem('IdFilmeClicado', filmeId)
    window.location.href = 'detalhes.html'
}






function emDestaque() {
    let texto = ''
    let dadosDoDestaque = JSON.parse(this.responseText)
    console.log(dadosDoDestaque)
    let card1 = document.getElementById('card1')
    let card2 = document.getElementById('card2')
    let card3 = document.getElementById('card3')
    let card4 = document.getElementById('card4')
    let nomeFilme1 = document.getElementById('nomeFilme1')
    let nomeFilme2 = document.getElementById('nomeFilme2')
    let nomeFilme3 = document.getElementById('nomeFilme3')
    let nomeFilme4 = document.getElementById('nomeFilme4')

  let dados = JSON.parse(this.responseText)
  for (let i = 6; i < 10; i++) {
    let destaques = dadosDoDestaque.results[i]
    if (i == 6) {
      card1.setAttribute(
        'src',
        `https://image.tmdb.org/t/p/original/${destaques.poster_path}`

      )
      card1.setAttribute('id', destaques.id)
      nomeFilme1.innerHTML = `<b>${destaques.title}</b>`
    }
    if (i == 7) {
      card2.setAttribute(
        'src',
        `https://image.tmdb.org/t/p/original/${destaques.poster_path}`
      )
      card2.setAttribute('id', destaques.id)
      nomeFilme2.innerHTML = `<b>${destaques.title}</b>`
    }
    if (i == 8) {
      card3.setAttribute(
        'src',
        `https://image.tmdb.org/t/p/original/${destaques.poster_path}`
      )
      card3.setAttribute('id', destaques.id)
      nomeFilme3.innerHTML = `<b>${destaques.title}</b>`
    }
    if (i == 9) {
      card4.setAttribute(
        'src',
        `https://image.tmdb.org/t/p/original/${destaques.poster_path}`
      )
      card4.setAttribute('id', destaques.id)
      nomeFilme4.innerHTML = `<b>${destaques.title}</b>`
    }
  }
    }
