/*
quando clicar no pokémon da listagem temos que esoconder o cartao do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1 - listagem
2 - cartão do pokémon

precisamos cirar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clic feito pelo usuário na listagem de pokémons

- remover a classe aberto só do c artão que está aberto
- ao cllicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
- remover a classe ativo que  marca o pokémon selecionado
-adicionar a classe atico no item da lista selicionado
*/

// precisamos cirar duas variáveis no JS pra trabalhar com os elementos
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clic feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () => {
        //- remover a classe aberto só do c artão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //- ao cllicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //- remover a classe ativo que  marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //-adicionar a classe atico no item da lista selicionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
        
    })
})