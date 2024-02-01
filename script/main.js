window.addEventListener('scroll', function() {
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 0);
})

let menubar = document.getElementById('menuBar');
let navlist = document.querySelector('.navlist')

menubar.addEventListener('click', function(){
    navlist.classList.toggle('active')
})

window.onscroll = () => {
    navlist.classList.remove('active');
}

document.getElementById('searchBtn').addEventListener('click', function(){
    const search = document.querySelector('.search');
    if(search.style.display === 'none') {
        search.style.display = 'block'
    }
    else {
        search.style.display = 'none'
    }
})