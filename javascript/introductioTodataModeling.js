document.getElementById("submit").onclick = function(){

if(document.getElementById('question1-C').checked) {
    document.getElementById("correctOption").textContent = "Parabéns, essa era a opção correta!"
  }
  else  document.getElementById("correctOption").textContent = "Boa tentativa mas essa era a opção correta!"
}