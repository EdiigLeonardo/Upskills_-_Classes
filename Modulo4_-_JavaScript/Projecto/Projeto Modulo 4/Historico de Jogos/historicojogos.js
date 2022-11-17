let historicos = [
    {nomePlayer1: "Fernando"},
    {data: "2020-12-23"},
    {jogo: "memória"},
    {vencedor: ""},
    {nomePlayer2: ""},
    {tempo: "3:25"},
]

// localStorage.setItem("dados_de_jogo", JSON.stringify(person))
localStorage.setItem("dados_de_jogo", JSON.stringify(historicos));
storeJson = JSON.parse(localStorage.getItem("dados_de_jogo"));
// newStore = {...storeJson}
console.log(storeJson);