function setArea() {
    let img = document.querySelector('img');
    let title = document.querySelector('h2');
    let desc = document.querySelector('#desc');
    let rate = document.querySelector('#rating');
    if (sessionStorage.getItem('reviewLoad') != null && sessionStorage.getItem('reviewLoad') != "") {
        let obj = JSON.parse(sessionStorage.getItem('reviewLoad'));
        if (obj.image) {
            img.src = obj.image;
        }
        if (obj.title) {
            title.textContent = obj.title;
        }
        if (obj.description) {
            desc.textContent = obj.description;
        }
        if (obj.rating) {
            rate.textContent = obj.rating;
        }
    }
}

document.querySelector('#rating').addEventListener('keydown', (event) => {
    const digitRegex = /[0-9]/;
    if (event.key != 'Backspace' && event.key != 'ArrowLeft' && event.key != 'ArrowRight') {
        if (!digitRegex.test(event.key)) {
            event.preventDefault();
        }
    }
});

document.querySelector('#rating').addEventListener('input', (event) => {
    let value = parseInt(event.target.innerText);
    if (value > 10) {
        event.target.innerText = 10;
    }
});

document.querySelector('#edit').addEventListener('click', (event) => {
    event.target.classList.toggle('hidden');
    document.querySelector('#save').classList.toggle('hidden');

    document.querySelector('h2').setAttribute('contenteditable', true);
    document.querySelector('#rating').setAttribute('contenteditable', true);
    document.querySelector('#desc').setAttribute('contenteditable', true);

    document.querySelector('h2').style.backgroundColor = 'rgba(255, 255, 255, 0.393)';
    document.querySelector('#rating').style.backgroundColor = 'rgba(255, 255, 255, 0.393)';
    document.querySelector('#desc').style.backgroundColor = 'rgba(255, 255, 255, 0.393)';
});

document.querySelector('#save').addEventListener('click', (event) => {
    let img = document.querySelector('img');
    let title = document.querySelector('h2');
    let desc = document.querySelector('#desc');
    let rate = document.querySelector('#rating');


    let obj = JSON.parse(sessionStorage.getItem('reviewLoad'));
    let arrayD = JSON.parse(localStorage.getItem("reviews"));
    arrayRet = arrayD.filter((item) => JSON.stringify(item) != JSON.stringify(obj));

    obj.image = img.src;
    obj.title = title.textContent;
    console.log(title.textContent);
    console.log(obj.title);
    obj.description = desc.textContent;
    obj.rating = rate.textContent;

    arrayRet.push(obj);

    sessionStorage.setItem('reviewLoad', JSON.stringify(obj));
    localStorage.setItem("reviews", JSON.stringify(arrayRet));

    document.querySelector('h2').style.backgroundColor = 'transparent';
    document.querySelector('#rating').style.backgroundColor = 'transparent';
    document.querySelector('#desc').style.backgroundColor = 'transparent';
    event.target.classList.toggle('hidden');
    document.querySelector('#edit').classList.toggle('hidden');
});

window.addEventListener('load', () => {
    setArea();
    document.querySelector('#hide').classList.toggle('hidden');
    document.querySelector('#left').classList.toggle('hidden');
    document.querySelector('#right').classList.toggle('hidden');
});

document.getElementById('export').addEventListener('click', () => {
    let state = JSON.parse(sessionStorage.getItem('reviewLoad'));
    let aString = JSON.stringify(state);
    const encode = encodeURIComponent(aString);
    const urlString = 'data:application/json;charset=utf-8,' + encode;
    let link = document.createElement('a');
    link.href = urlString;
    link.download = 'review.json';
    link.textContent = 'download';

    link.click();
});

document.getElementById('import').addEventListener('click', () => {
    document.getElementById('file-input').click();
});

document.getElementById('file-input').addEventListener('change', (event) => {

    const imported = document.getElementById('file-input');
    if (imported.files.length == 1) {
        let array = imported.files;
        const reader = new FileReader();
        reader.readAsText(array[0]);
        reader.addEventListener('load', (ev) => {
            let res = ev.target.result;
            try {
                console.log(res);
                const decodedResult = decodeURIComponent(res);
                const parsedResult = JSON.parse(res);
                if (parsedResult.title === undefined) {
                    throw new Error();
                }
                if (parsedResult.image === undefined) {
                    throw new Error();
                }
                if (parsedResult.description === undefined) {
                    throw new Error();
                }
                if (!Array.isArray(parsedResult)) {
                    sessionStorage.setItem('reviewLoad', JSON.stringify(parsedResult));
                    setArea();
                }
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    imported.value = '';
});
