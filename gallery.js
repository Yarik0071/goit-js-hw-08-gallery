import galleryItems from './gallery-items.js'

const galleryList = document.querySelector(".js-gallery")
const modal = document.querySelector(".js-lightbox")
const modalImage = document.querySelector(".lightbox__image")
const closeBtn = document.querySelector('button[data-action="close-lightbox"]')
const closeClick = document.querySelector(".lightbox__content")


galleryItems.forEach(imgObj => {
  const listItem = `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${imgObj.original}"
    >
      <img
        class="gallery__image"
        src="${imgObj.preview}"
        data-source="${imgObj.original}"
        alt="${imgObj.description}"/>
    </a>
  </li>
  `
  galleryList.insertAdjacentHTML("beforeend", listItem)
})

galleryList.addEventListener("click", openModal)

function openModal(e) {
  if (e.currentTarget === e.target) {
    return;
  }
  event.preventDefault()
    modal.classList.add("is-open")
  let specialImage = e.target
  const totalLink = specialImage.dataset.source;
  modalImage.setAttribute("src", totalLink)
}

closeBtn.addEventListener("click", closeModal)
closeClick.addEventListener("click",closeModalII) 

function closeModal(e) {
  modal.classList.remove("is-open")
  modalImage.removeAttribute("src")
}

function closeModalII(e){
  if(e.currentTarget === e.target){
    closeModal()
  } else {
    return;
  }
}