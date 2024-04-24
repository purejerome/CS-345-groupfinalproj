window.addEventListener('load', () => {
    let img = document.querySelector('img');
    let title = document.querySelector('h2');
    let desc = document.querySelector('p');
    if (sessionStorage.getItem('reviewLoad') != "" && sessionStorage.getItem('reviewLoad') != "") {
        let obj = JSON.parse(sessionStorage.getItem('reviewLoad'));
        img.src = obj.image;
        title.textContent = obj.title;
        desc.textContent = obj.description;
    }
    document.querySelector('#hide').classList.toggle('hidden');
    document.querySelector('#left').classList.toggle('hidden');
    document.querySelector('#right').classList.toggle('hidden');
})
