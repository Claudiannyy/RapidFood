let nomePrato;
let nomeBebida;
let nomeSobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;
let total;
function converterPreco(precoString) {
  let preco = precoString.replace("R$ ", "");
  preco = preco.replace(",", ".");
  preco = Number(preco) * 100;

  return preco;
}
function selecionarPrato(elemento) {
  const pratoEscolhido = document.querySelector(".comidas .selecionado");
  if (pratoEscolhido !== null) {
    pratoEscolhido.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");
  nomePrato = elemento.querySelector(".titulo").innerHTML;
  precoPrato = elemento.querySelector(".preco").innerHTML;
  precoPrato = converterPreco(precoPrato);
  fazerPedido();
}
function selecionarBebida(elemento) {
  bebidaSelecionada = elemento.innerHTML;
  const bebidaEscolhida = document.querySelector(".bebidas .selecionado");
  if (bebidaEscolhida !== null) {
    bebidaEscolhida.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");
  nomeBebida = elemento.querySelector(".titulo").innerHTML;
  precoBebida = elemento.querySelector(".preco").innerHTML;
  precoBebida = converterPreco(precoBebida);
  fazerPedido();
}
function selecionarSobremesa(elemento) {
  sobremesaSelecionada = elemento.innerHTML;
  const bebidaEscolhida = document.querySelector(".sobremesas .selecionado");
  if (bebidaEscolhida !== null) {
    bebidaEscolhida.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");
  nomeSobremesa = elemento.querySelector(".titulo").innerHTML;
  precoSobremesa = elemento.querySelector(".preco").innerHTML;
  precoSobremesa = converterPreco(precoSobremesa);
  fazerPedido();
}
function fazerPedido() {
  if (nomePrato !== undefined) {
    if (nomeBebida !== undefined) {
      if (nomeSobremesa !== undefined) {
        const botaoAvancar = document.querySelector(".concluir-selecionados");
        botaoAvancar.classList.add("ativar-botao");
        botaoAvancar.innerHTML = "Fazer o pedido";
      }
    }
  }
}
function avancarParaConfirmacao() {
  if (
    nomePrato !== undefined &&
    nomeBebida !== undefined &&
    nomeSobremesa !== undefined
  ) {
    const modal = document.querySelector(".modal");
    modal.querySelector(".prato .nome").innerHTML = nomePrato;
    modal.querySelector(".prato .preco").innerHTML = (precoPrato / 100).toFixed(
      2
    );

    modal.querySelector(".bebida .nome").innerHTML = nomeBebida;
    modal.querySelector(".bebida .preco").innerHTML = (
      precoBebida / 100
    ).toFixed(2);

    modal.querySelector(".sobremesa .nome").innerHTML = nomeSobremesa;
    modal.querySelector(".sobremesa .preco").innerHTML = (
      precoSobremesa / 100
    ).toFixed(2);

    total = precoPrato + precoBebida + precoSobremesa;
    modal.querySelector(".total .valor-total").innerHTML = `R$ ${(
      total / 100
    ).toFixed(2)}`;

    modal.classList.remove("escondido");
  }
}
function cancelar() {
  const modal = document.querySelector(".modal");
  modal.classList.add("escondido");
}
function enviarPedido() {
  let mensagem = ` Olá! Eu quero fazer o pedido de:
  - Prato: ${nomePrato}
  - Bebida: ${nomeBebida}
  - Sobremesa: ${nomeSobremesa}
  Total: R${(total / 100).toFixed(2)}`;
  mensagem = encodeURIComponent(mensagem);
  const numeroWhatsapp = `558888888888`;
  const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;
  window.open(linkWhatsapp);
}
