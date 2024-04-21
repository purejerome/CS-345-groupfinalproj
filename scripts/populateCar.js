let basedAniURL = 'https://myanimelist.net/anime/';
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=15&fields=synopsis,main_picture,alternative_titles');
const options = {
    method: 'GET',
    headers:
    {
        'Content-Type': 'application/json',
        'X-MAL-CLIENT-ID': '7dfb575e5eebac0552e87c246b978c15'
    }
}
let count = 0;
const animeAPI = fetch(url, options);
animeAPI.then(response => response.json())
    .then(anime => {
        console.log(anime);
        for (let x of anime.data) {
            let container = document.querySelector('#temp').content.cloneNode(true);
            let div = container.querySelector('.contentHolder');
            let img = div.querySelector('img');
            let h3 = div.querySelector('h3');
            img.src = x.node.main_picture.medium;
            h3.textContent = x.node.alternative_titles.en;
            if (count < 5) {
                let insert = document.querySelector('#a1');
                insert.appendChild(div);
            }
            else if (count < 10) {
                let insert = document.querySelector('#a2');
                insert.appendChild(div);
            }
            else {
                let insert = document.querySelector('#a3');
                insert.appendChild(div);
            }
            count++;
        }

    })
    .catch(console.error);
