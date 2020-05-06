const API = "AIzaSyCxS649H5_JQHeL74otGnrh72edKmXD1ms";
const output = document.querySelector('.output');
const searchTerm = document.querySelector('input');
const btn = document.querySelector('button');

searchTerm.setAttribute('value', 'web development');
btn.addEventListener('click', ySearch);
document.addEventListener('keypress', ySearch);

function ySearch() {
    output.innerHTML = "";
    let search = encodeURIComponent(searchTerm.value);
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=' + API + '&q=' + search + '&maxResults=20';
    console.log(url);
    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        return data.items.map(function (x) {
            return {
                title: x.snippet.title,
                des: x.snippet.description,
                img: x.snippet.thumbnails.default.url,
                id: x.id.videoId,
                x: x
            }
        })
    }).then(function (arr) {
        showData(arr);
    }).catch(function (error) {
        console.log(error);
    })
}


function showData(data) {
    data.forEach(function (video) {
        let div = document.createElement('div');
        div.classList.add('box');
        let thumb = document.createElement('div');
        thumb.classList.add('thumbnail');
        thumb.style.backgroundImage = `url(${video.img})`;
        thumb.style.backgroundSize = "100% 100%";

        div.appendChild(thumb);
        let temp = document.createElement('span');
        temp.innerText = video.des;
        div.appendChild(temp);
        let span1 = document.createElement('span');
        span1.innerHTML = '<a href="http://www.youtube.com/watch?v=' + video.id + '" target="_blank">' + video.title + '</a>';
        div.appendChild(span1);
        output.appendChild(div);
    })
}