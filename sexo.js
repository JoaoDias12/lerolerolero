document.addEventListener('DOMContentLoaded', () => {})

const btnAss = document.getElementById('btnAss')
const btnTits = document.getElementById('btnTits')

const btnTits2 = document.getElementById('btnTits2')
const btnTits3 = document.getElementById('btnTits3')
const btnTits4 = document.getElementById('btnTits4')
const btnTits5 = document.getElementById('btnTits5')
const btnTits6 = document.getElementById('btnTits6')
const btnTits7 = document.getElementById('btnTits7')
const btnTits8 = document.getElementById('btnTits8')
const btnTits9 = document.getElementById('btnTits9')
const btnTits10 = document.getElementById('btnTits10')

btnAss.addEventListener('click', e => {
  e.preventDefault()

  const box = document.getElementById('box').classList.remove('hidden')
})

btnTits.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits2.classList.remove('hidden')

  setTimeout(() => {
    btnTits.classList.add('hidden')
  }, 1)
})

btnTits2.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits3.classList.remove('hidden')

  setTimeout(() => {
    btnTits2.classList.add('hidden')
  }, 1)
})

btnTits3.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits4.classList.remove('hidden')

  setTimeout(() => {
    btnTits3.classList.add('hidden')
  }, 1)
})

btnTits4.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits5.classList.remove('hidden')

  setTimeout(() => {
    btnTits4.classList.add('hidden')
  }, 1)
})

btnTits5.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits6.classList.remove('hidden')

  setTimeout(() => {
    btnTits5.classList.add('hidden')
  }, 1)
})

btnTits6.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits7.classList.remove('hidden')

  setTimeout(() => {
    btnTits6.classList.add('hidden')
  }, 1)
})

btnTits7.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits8.classList.remove('hidden')

  setTimeout(() => {
    btnTits7.classList.add('hidden')
  }, 1)
})

btnTits8.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits9.classList.remove('hidden')

  setTimeout(() => {
    btnTits8.classList.add('hidden')
  }, 1)
})

btnTits9.addEventListener('mouseover', e => {
  e.preventDefault()

  btnTits10.classList.remove('hidden')

  setTimeout(() => {
    btnTits9.classList.add('hidden')
  }, 1)
})

btnTits10.addEventListener('mouseover', e => {
  e.preventDefault()

  document.getElementById('h4').innerHTML = 'Sim'
})

btnTits10.addEventListener('click', e => {
  e.preventDefault()

  const box = document.getElementById('box').classList.remove('hidden')

  setTimeout(() => {
    btnTits10.classList.add('hidden')
  }, 1)
})
