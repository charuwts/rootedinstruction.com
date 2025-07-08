// # Smooth scrollIntoView
// Function to handle scrolling to an element
function scrollToElement(elementId) {
  const element = document.querySelector(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

// Handle click events on anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    scrollToElement(targetId)
  })
})

// Check URL fragment on page load
document.addEventListener('DOMContentLoaded', function () {
  const urlFragment = window.location.hash
  if (urlFragment) {
    scrollToElement(urlFragment)
  }
})

// Handle URL changes (for browser history API usage)
window.addEventListener('hashchange', function () {
  const urlFragment = window.location.hash
  if (urlFragment) {
    scrollToElement(urlFragment)
  }
})
function setupDialogButtons() {
  const buttons = document.getElementsByClassName('dialog-trigger')

  Array.from(buttons).forEach(button => {
    const buttonId = button.id
    if (!buttonId) {
      console.warn('Button lacks id attribute')
      return
    }

    // Construct dialog ID by prefixing the button ID
    const dialogId = `dialog_${buttonId}`

    // Look for dialog with prefixed id
    const dialog = document.getElementById(dialogId)

    if (!dialog || !(dialog.tagName.toLowerCase() === 'dialog')) {
      console.warn(`No dialog found with id "${dialogId}"`)
      return
    }

    button.addEventListener('click', () => {
      dialog.showModal()
    })
    const closeButton = dialog.querySelector('.close-dialog')
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        dialog.close()
      })
    }
  })
}
setupDialogButtons()
