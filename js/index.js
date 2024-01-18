const form = document.querySelector('.main__register--form')
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


form.addEventListener('submit', function(e) {
  e.preventDefault()
  const dataArr = [...new FormData(form)]
  const data = Object.fromEntries(dataArr)
  
  
  Object.entries(data).forEach(([key, value]) => {
    if(value === '') {
      form.querySelector(`.${key}_error`).classList.remove('hidden')
      form.querySelector(`.${key}_message`).classList.remove('hidden')
      form.querySelector(`.${key}_input`).style.border = '1px solid red'
    } else if (value !== '') {
      form.querySelector(`.${key}_error`).classList.add('hidden')
      form.querySelector(`.${key}_message`).classList.add('hidden')
      form.querySelector(`.${key}_input`).style.border = '1px solid rgba(0, 0, 0, 0.242)'
    }
  })
  if(!validEmail.test(data.email)) {
    form.querySelector(`.email_error`).classList.remove('hidden')
    form.querySelector(`.email_message`).classList.remove('hidden')
    form.querySelector(`.email_input`).style.border = '1px solid red'
  }
})