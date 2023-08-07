function cupom(){
    alert("Você resgatou o cupom")
  }

  function faleConosco(){
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let mensagem = document.getElementById("mensagem").value;
    let verificacao
    verificacao= nome && sobrenome && email && telefone && mensagem
    verificacao==true

    if (verificacao==false){
      alert("Verifique se todos os campos estão preenchidos corretamente")
   } else {
          alert("Sua Mensagem foi enviada com sucesso! Obrigada!")
      
      } 
  }

  function login(){
    let loginEmail = document.getElementById("loginEmail").value;
    let loginEmail2 = document.getElementById("loginEmail2").value;
    let senha = document.getElementById("senha").value;
    let verificacao
    verificacao= loginEmail && loginEmail && senha
    verificacao==true
    
    if (verificacao==false){
      alert("Verifique se todos os campos estão preenchidos corretamente")
   }  else if (loginEmail==loginEmail2){
      alert("O login foi realizado")
   }else {
      alert("Seu email está incorreto")
  
  } 

  }
  