const errorMessage = document.getElementById('error-message')
const error_2 = document.getElementById('error_2')
const error_3 = document.getElementById('error_3')
const form = document.getElementById('myForm')
const comment_div = document.getElementById('comment_div')
var currentGrade = ''
var comment = document.getElementById('comment')
var commentValue = ''
const send = document.getElementById('send')

let checked = document.querySelectorAll('input[type=checkbox]')

checked.forEach(function (item) {
    item.checked === false
    item.addEventListener('click', function () {
        error_2.classList.add('hidden')
    })
})

form.onsubmit = function (e) {
    // console.log(comment.value.length)
    // e.preventDefault()
    if (currentGrade === '') {
        console.log(currentGrade)
        errorMessage.classList.remove('hidden')
        e.preventDefault()
    }
    if (currentGrade !== '' && comment.value.length === 0) {
        error_3.classList.remove("hidden")
        e.preventDefault()
    }

    let checked = document.querySelectorAll('input[type=checkbox]:checked')
    if (checked.length === 0) {
        error_2.classList.remove('hidden')
        e.preventDefault()
    }
}



function handleStar(event) {
    const label1 = document.getElementById('star1label')
    const label2 = document.getElementById('star2label')
    const label3 = document.getElementById('star3label')
    const label4 = document.getElementById('star4label')
    const label5 = document.getElementById('star5label')
    const question1 = document.getElementById('question1')
    const question2 = document.getElementById('question2')
    const question3 = document.getElementById('question3')
    const errorMessage = document.getElementById('error-message')
    comment_div.classList.remove('hidden')
    send.classList.remove('hidden')


    currentGrade = event.target.id
    errorMessage.classList.add('hidden')


    label1.style.color = '#E5E7EA'
    label2.style.color = '#E5E7EA'
    label3.style.color = '#E5E7EA'
    label4.style.color = '#E5E7EA'
    label5.style.color = '#E5E7EA'

    if (event.target.id === 'star5') {
        label5.style.color = '#E40038'
        question1.classList.remove('hidden')
        question2.classList.add('hidden')
        question3.classList.add('hidden')
    }

    if (event.target.id === 'star4') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        question1.classList.remove('hidden')
        question2.classList.add('hidden')
        question3.classList.add('hidden')
    }

    if (event.target.id === 'star3') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        label3.style.color = '#E40038'
        question1.classList.remove('hidden')
        question2.classList.add('hidden')
        question3.classList.add('hidden')
    }

    if (event.target.id === 'star2') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        label3.style.color = '#E40038'
        label2.style.color = '#E40038'
        question1.classList.add('hidden')
        question3.classList.add('hidden')
        question2.classList.remove('hidden')
    }

    if (event.target.id === 'star1') {
        label5.style.color = '#E40038'
        label4.style.color = '#E40038'
        label3.style.color = '#E40038'
        label2.style.color = '#E40038'
        label1.style.color = '#E40038'
        question1.classList.add('hidden')
        question2.classList.add('hidden')
        question3.classList.remove('hidden')
    }
}


function handleComment(e) {
    commentValue = e.target.value
    error_3.classList.add("hidden")
}

function auto_grow(element) {
    element.style.height = "42px";
    element.style.height = (element.scrollHeight)+"px";
}