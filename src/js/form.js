

const form = document.querySelector(".contact-form")

function saveUserData(event) {
  event.preventDefault()
  console.log(event)
  const formData = new FormData(event.srcElement)
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")

  const userData = { name, email, phone }
  localStorage.setItem(email, JSON.stringify(userData))
}


form.addEventListener("submit", saveUserData)