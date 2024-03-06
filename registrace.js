function signUp() {
  event.preventDefault()

  let userName = document.querySelector('.part-2-username input').value
  let email = document.querySelector('.part-3-email input').value
  let password = document.querySelector('.part-4-password input').value
  let checkPass = document.querySelector('.part-5-password-confirm input').value

  if (!userName || !email || !password || !checkPass) {
    alert('Vyplňte prosím všechna pole.')
    return
  }

  let user = {
    userName: userName,
    email: email,
    password: password,
    checkPass: checkPass
  }

  if (password === checkPass) {
    let json = JSON.stringify(user)
    localStorage.setItem(email, json)
    alert('Účet vytvořen')
  } else {
    alert('Hesla se neshodují')
  }
}