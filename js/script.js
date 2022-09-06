function kirimPesan() {
  
  const name = document.getElementById("name").value 
  const email = document.getElementById("email").value
  const subject = document.getElementById("subject").value
  const message = document.getElementById("message").value

  if(name == "") {
    alert("Nama wajib diisi!")
  } else if(email == "") {
    alert("Email wajib diisi!")
  } else if(subject == "") {
    alert("Subject wajib diisi!")
  } else if(message == "") {
    alert("Pesan wajib diisi!")
  } else {
    console.log(name)
    console.log(email)
    console.log(subject)
    console.log(message)

    const emailReciever = "ngetikkoding@gmail.com"

    const a = document.createElement('a')
    const br = document.createElement('br')

    a.href=`mailto:${emailReciever}?subject=${subject}&body=${message}`
    a.click()

    const dataPemesan = {
      name, 
      email,
      subject,
      message
    }

    console.log(dataPemesan) 
  }
}