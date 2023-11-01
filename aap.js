const mainBtn = document.querySelector('#pop-btn');
const modal = document.querySelector('.modal-container');
const closeBtn = document.querySelector('#close-btn');

mainBtn.addEventListener('click', function(){

    modal.style.display = "block";
    mainBtn.disabled = true;
});

closeBtn.addEventListener('click', function(){

    modal.style.display = "none";
    mainBtn.disabled = false;
});
