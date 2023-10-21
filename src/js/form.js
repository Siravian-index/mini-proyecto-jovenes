

const form = document.querySelector(".contact-form")

function saveUserData(event) {
  event.preventDefault()
  console.log(event)
  const formData = new FormData(event.srcElement)
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")

  if (name && email && phone) {
    const userData = { name, email, phone }
    console.log(userData)
    const str = JSON.stringify(userData)
    console.log(str)
    localStorage.setItem(email, str)

    redirectTo("./login.html")
  }
}

function redirectTo(path) {
  const a = document.createElement("a")
  a.href = path
  a.click()
}



form.addEventListener("submit", saveUserData)