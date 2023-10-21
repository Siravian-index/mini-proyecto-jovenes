

const loginForm = document.querySelector("#login-form")


function verifyUser(event) {
  event.preventDefault()
  console.log(event)
  const formData = new FormData(event.srcElement)
  const email = formData.get("email")
  const phone = formData.get("phone")

  if (email && phone) {
    const userData = localStorage.getItem(email)
    // verificar si esta registrado
    if (!userData) {
      console.log("no hay datos")
      return
    }
    const data = JSON.parse(userData)

    const sameEmail = email === data.email
    const samePhone = phone === data.phone
    // verificar misma informacion
    if (sameEmail && samePhone) {
      console.log("correcto")
      const loggedUser = { ...data, login: true }
      localStorage.setItem(email, JSON.stringify(loggedUser))
      redirectTo('./index.html')
    } else {
      // informacion errada
      console.log("Datos incorrectos")
    }
  }
}


function redirectTo(path) {
  const a = document.createElement("a")
  a.href = path
  a.click()
}

loginForm.addEventListener("submit", verifyUser)
