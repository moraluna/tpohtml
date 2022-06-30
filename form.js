window.addEventListener('load', ()=>{
const form = document.getElementById('formulario')
const name = document.getElementById('name')
const email = document.getElementById('email')
const pass = document.getElementById('pass')

form.addEventListener('submit', (e) =>{
 e.preventDefault()
 validaCampos()

})

const validaCampos = ()=> {
 const nameValor = name.value.trim()
 const emailValor = email.value.trim()
 const passValor = pass.value.trim();
 

 //nombre

  if(!nameValor){
      console.log('Empty.')
      validaFalla(name, 'Field empty.')
  }else{
      validaOk(name)
  }


  //email

  if(!emailValor){
      validaFalla(email, 'Field Empty.')
  }else if(!validaEmail(emailValor)) {
      validaFalla(email, 'Email not valid.')
  }else {
      validaOk(email)
  }

 if(!passValor){
     validaFalla(pass, 'Field empty.')
 } else if (passValor.length < 8){
  validaFalla(pass,'Must be at least 8 characters long.')
 }else{
     validaOk(pass)
 }

}

const validaFalla = (input, msj) => {
    const formControl = input.parentElement
   const aviso = formControl.querySelector('p')
   aviso.innerText = msj

   formControl.className = 'form-control falla'
  }

  const validaOk = (input, msj) => {
      const formControl = input.parentElement
      formControl.className = 'form-control ok'
  }
 
   const validaEmail = (email) => {
       return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }

})