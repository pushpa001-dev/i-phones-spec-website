function opean() {
 const sidebar=document.querySelector('.sidebar')
 sidebar.style.display='flex'
}
function hide() {
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
    
}

function largeimg() {
    const large=document.querySelector('.popup')
    const image=document.querySelector('.img-color')
    large.style.display='flex'
    image.style.display='none'
}
function smallimg() {
    const large=document.querySelector('.popup')
    const image=document.querySelector('.img-color')
    large.style.display='none'
    image.style.display='flex'
}