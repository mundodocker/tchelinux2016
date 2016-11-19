/* globals XMLHttpRequest */
var hideMessage = function hideMessage () {
  document.getElementById('message').classList.add('is-hidden-mobile', 'is-hidden-tablet')
}

var showMessage = function showMessage () {
  document.getElementById('message').classList.remove('is-hidden-mobile', 'is-hidden-tablet')
}

var toggleLoading = function toggleLoading (message) {
  document.getElementById('submit-button').classList.toggle('is-loading')
}

var showResults = function showResults (message) {
  document.getElementById('message').querySelector('h2 b').innerText = message
}

document.getElementById('math-form').addEventListener('submit', function submitEvent (e) {
  e.preventDefault()
})

document.getElementById('math-form').addEventListener('keyup', function keyUpEvent (e) {
  e.preventDefault()

  if (e.which !== 13) {
    return
  }

  document.getElementById('submit-button').click()
})

document.getElementById('submit-button').addEventListener('click', function submitButtonEvent (e) {
  e.preventDefault()

  var selectElement = document.getElementById('operation')

  var operation = selectElement.options[selectElement.selectedIndex].value
  var firstElement = document.getElementById('first')
  var secondElement = document.getElementById('second')

  if (!firstElement.checkValidity() || !secondElement.checkValidity()) {
    return
  }

  var defaultMessageValue = ''

  hideMessage()
  showResults(defaultMessageValue)
  toggleLoading()

  var url = '/math' + '?operation=' + operation + '&first=' + firstElement.value + '&second=' + secondElement.value

  var request = new XMLHttpRequest()

  request.onreadystatechange = function xhrReadyStateChange () {
    if (request.readyState === XMLHttpRequest.DONE) {
      toggleLoading()
      showMessage()
      showResults(request.responseText)
    }
  }

  request.open('GET', url, true)
  request.send()
})
