let numeroSecrerto = gerarNumeroAleatori();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian portuguese female' , {rate:1.2});
 }
function mensagemInicial(){
   
   exibirTextoNaTela('h1','Jogo do numero secreto');
   exibirTextoNaTela('p','Escolha um numero entre 1 e 10');
 
}
mensagemInicial();

 function verificarChute() {
   let chute = document.querySelector('input').value;
   
   if (chute == numeroSecrerto) {
      exibirTextoNaTela ('h1', 'Acertou !');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativa = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativa);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
      if(chute > numeroSecrerto){
         exibirTextoNaTela('p', 'O numero secreto é menor');
      } else{
         exibirTextoNaTela('p','O numero secreto é maior')
      }
      tentativas++;
      limparCampo();
   }

 }
   function gerarNumeroAleatori() {
      return parseInt(Math.random() * 10 + 1);
   } 
   function limparCampo() {
      chute = document.querySelector('input');
      chute.value='';
      
   }  
   function reiniciarJogo() {
      numeroSecrerto = gerarNumeroAleatori();
      limparCampo();
      tentativas = 1;
      mensagemInicial();
      document.getElementById('reiniciar').setAttribute('disabled' , true);
      
   }
