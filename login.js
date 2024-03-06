function login() {
  event.preventDefault()

  let enteredEmail = document.querySelector('.email').value
  let enteredPassword = document.querySelector('.password').value

  if (!enteredEmail || !enteredPassword) {
    alert('Vyplňte prosím všechna pole.')
    return
  }

  let storedUser = JSON.parse(localStorage.getItem(enteredEmail))

  if (storedUser && enteredEmail === storedUser.email && enteredPassword === storedUser.password) {
    alert('Vítejte.')
  } else {
    alert('Chybný email nebo heslo.')
  }
}