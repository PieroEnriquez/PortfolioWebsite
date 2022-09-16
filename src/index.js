const formName = document.getElementById('name')
const formEmail = document.getElementById('email')
const formMessage = document.getElementById('message')
const formBtn = document.getElementById('submit')

formBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    if (input.value == '') { return }
    const res = await fetch('http://localhost:5000/', {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            parcel: input.value
        })
    })
    res()
})

