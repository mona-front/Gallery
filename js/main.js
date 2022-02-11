
// modal items
const bgblack=document.querySelector(".bgblack")
const closemodal=document.querySelector(".closeModal")
const modalcontainer=document.querySelector(".modalContainer")
const photo=document.querySelector(".photo")
// event Load page

 
// }
// modal
// show modal
photo.onclick=function(){
        bgblack.style.display="block"
        modalcontainer.style.display="block"
}
// close modal
closemodal.onclick=function(){
  
    modalcontainer.style.display="none"
    bgblack.style.display="none"
    
}



