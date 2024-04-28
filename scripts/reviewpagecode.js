function setArea() {
    let img = document.querySelector('img');
    let title = document.querySelector('h2');
    let desc = document.querySelector('p');
    if (sessionStorage.getItem('reviewLoad') != "" && sessionStorage.getItem('reviewLoad') != "") {
        let obj = JSON.parse(sessionStorage.getItem('reviewLoad'));
        img.src = obj.image;
        title.textContent = obj.title;
        desc.textContent = obj.description;
    }
}

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
                sessionStorage.setItem('reviewLoad', JSON.stringify(parsedResult));
                setArea();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
});
