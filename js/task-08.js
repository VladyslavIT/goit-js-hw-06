const formEl = document.querySelector('.login-form');

const submitForm = (event) => {
 event.preventDefault()

 const formElements = event.currentTarget.elements;
 
 const email = formElements.email.value;
 const password = formElements.password.value;

 const objectValue = {
    email,
    password
   }  

    if (!email || !password) {
        alert('Все поля должны быть заполнены')
     } else {
        console.log(objectValue);
        formEl.reset();
     }
 
}

formEl.addEventListener('submit', submitForm);
