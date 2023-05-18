var title = document.querySelector("h1");
if (title !== null) {
    title.innerText = 'Hello World!';
}

var moreBtn = document.querySelector(".more-btn");
var desc = document.querySelector('.page-desc');
var isClosed = true;
moreBtn.addEventListener('click', function () {
    if (isClosed) {
        moreBtn.innerText = 'read less';
        desc.classList.add('full');
        isClosed = false;
    } else {
        moreBtn.innerText = 'read more';
        desc.classList.remove('full');
        isClosed = true;
    }
})