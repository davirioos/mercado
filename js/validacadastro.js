function Cadastro(){
  this.formulario = document.querySelector('.formulario');
  this.evento();
}

Cadastro.prototype.evento = function(){
    this.formulario.addEventListener('submit', e =>{
    this.validando(e);
    })
}

Cadastro.prototype.validando = function(e){
  e.preventDefault();

  const cadastrando = this.textovazio();
  const senhadavalida = this.senhavalidando();

  if(cadastrando && senhadavalida){
    alert('Cadastro Enviado')
    this.formulario.submit();
  }
}

Cadastro.prototype.textovazio = function(){
  let valid = true

  for(let errorText of this.formulario.querySelectorAll('.error-text')) {
    errorText.remove();
  };
  for(let campo of this.formulario.querySelectorAll('.validar')){
    const label = campo.previousElementSibling.innerText;
  
    if(!campo.value){
      this.criarerror(campo,`Campo "${label}" não esta preenchido`)
      valid = false
    };
  }
  return valid;  
}

Cadastro.prototype.senhavalidando = function(){
  let valid = true;

  this.senha = document.querySelector('.senha');
  this.repetirSenha = document.querySelector('.repetir-senha');

  if(this.senha.value !== this.repetirSenha.value) {
    valid = false;
    console.log('Campos senha e repetir senha precisar ser iguais.')
    this.criarerror(this.senha, 'Campos senha e repetir senha precisar ser iguais.');
    this.criarerror(this.repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
  }
  if(!this.senha.value.match(/[0-9]/)){
    this.criarerror(this.senha, 'Senha Precisar Ter Numeros');
    valid = false;
  }
  if(!this.senha.value.match(/[A-Z]/)){
    this.criarerror(this.senha, 'Senha Precisar Ter Letra Maiuscula');
    valid = false;
  }
  if(!this.senha.value.match(/[a-z]/)){
    this.criarerror(this.senha, 'Senha Precisar Ter Letra menusculas');
    valid = false;
  }
  if(!this.senha.value.match(/[!|@|#|$|%|^|&|*|(|)|-|_]/)){
    this.criarerror(this.senha, 'Senha Precisar Ter Caracteres Especiais !|@|#|$|%|^|&|*|(|)|-|_');
    valid = false;
  }
  if(this.senha.value.length < 8){
    this.criarerror(this.senha, 'Precisa Ter Mais que 8 Caracteres');
    valid = false;
  }
  return valid
};


Cadastro.prototype.criarerror = function(campo, msg){
  const div = document.createElement('div');
  div.innerHTML = msg;
  div.classList.add('error-text');
  campo.insertAdjacentElement('afterend', div);
};





new Cadastro();

/**
 * 2 - senha tem que ser igual a outra 
 * 3 - a senha tem quer contem numeros
 * 4 - a senhta tem que contem letra maiusculas 
 * 5 - a senha tem que contem caracteres especiais
 */