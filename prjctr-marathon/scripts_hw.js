var title = document.querySelector("h1");
if (title !== null) {
    title.innerText = 'Hello World!';
}

var moreBtn = document.querySelector(".more-btn");
var desc = document.querySelector('.page-desc');
var isClosed = true;
moreBtn.addEventListener('click', function () {
    if (isClosed) {
        this.innerText = 'read less';
        desc.classList.add('full');
        isClosed = false;
    } else {
        this.innerText = 'read more';
        desc.classList.remove('full');
        isClosed = true;
    }
});

/// Homework template

var buyBtn = document.querySelectorAll(".catalog-item-btn");
buyBtn.forEach(function (el) {
    el.addEventListener('click', function () {
        // hw task 4
        
    });
});