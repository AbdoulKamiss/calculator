  function emailValidation() {
    const form = document.getElementById('form');
        const element = document.createElement('td')
        const message = document.createTextNode("Eメールが一致しません")
        const tdd = document.getElementsByTagName('tbody')[0];
        const target = document.getElementsByTagName('tr')[3];
        element.appendChild(message);
        element.classList.add("alert");
        const target2 = document.getElementById('email_confirm');
        target2.addEventListener('input', e =>{
          e.preventDefault();
          if(form.email.value !== form.email_confirm.value){
            target2.classList.add("dof");
            tdd.insertBefore(element, target);
          } else {
            target2.classList.remove("dof");
            tdd.removeChild(element);
          }
        })
  };
  
  window.onload = emailValidation;  