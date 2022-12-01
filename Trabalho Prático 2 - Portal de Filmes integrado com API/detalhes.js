const API_KEY = "14a8cfac1db5524c7acc952895612cc8";
let movieId = localStorage.getItem('IdFilmeClicado')

function executaDetalhes() {
    let xhr = new XMLHttpRequest ();
    xhr.onload = mostraDetalhes;
    xhr.open ('GET', `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
    xhr.send ()
}
executaDetalhes();

function mostraDetalhes() {
    let genero = ''
    let texto = ''
    let dados = JSON.parse(this.responseText)
    let filme = dados;
    for (let index = 0; index < filme.genres.length; index++) {
        genero += `<div class="col-4">
        ${filme.genres[index].name}</div>`
        
    }
    console.log(dados)
        texto = texto + `<div class="container">
        <div class="row" style="margin-bottom: 35px;">
            <div class="col-sm-12 col-12 col-md-12 col-lg-6">
                <img class="imagemDetalhes" src="https://image.tmdb.org/t/p/original/${filme.backdrop_path}" alt="">
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
                        <b>Linguagem original:</b> ${filme.popularity}
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Popularidade:</b> ${filme.popularity}
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <b>Estreia:</b> ${filme.release_date}
                    </div>
                </div>

                <div class="col-6">
                    <b>Avaliação:</b> ★ ${filme.vote_average}
                </div>
                <div class="col-6">
                    <b>Duração:</b> ${filme.runtime} minutos
                </div>
                ${genero}
            </div>
        </div>
    </div>
</div> `

let tela = document.getElementById('movieId')
    tela.innerHTML = texto;
}
mostraDetalhes();