const formBtn = document.querySelector('button')

formBtn.addEventListener('click', e => {
    e.preventDefault
})


// formBtn.addEventListener('click', async () => {

//     const formName = document.getElementById('name')
//     const formEmail = document.getElementById('email')
//     const formMessage = document.getElementById('message')
//     console.log(formName)

//     if (input.value == '') return
//     const res = await fetch('http://localhost:5000/', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: `{
//             "name": ${formName},
//             "email": ${formEmail},
//             "message": ${formMessage}
//         }`
//     })

//     console.log(res)
//     return res.json()
// })

