const API = "AIzaSyCf9kMuYtYfP-o4k6haBVRTLFCV74bnqlQ";
const output = document.querySelector('.output');
const searchTerm = document.querySelector('input');
const btn = document.querySelector('button');

searchTerm.setAttribute('value', "test");
btn.addEventListener('click', ySearch);

function ySearch() {
    let search = encodeURIComponent(searchTerm.value);
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key=' + API + '&q=' + search + 't&maxResults=20';
    output.textContent = url;
    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log( data);
        showData(data.items);
    })
}



function showData(data) {
    console.log(data);
    console.log(data.length);
    data.forEach(function (video) {
        console.log(video);
        let div = document.createElement('div');
        div.classList.add('box');
        let temp = document.createTextNode(video.snippet.description);
        div.appendChild(temp);
        let span = document.createElement('span');
        span.innerHTML = '<a href="http://www.youtube.com/watch?v=' + video.id.videoId + '" target="_blank">' + video.snippet.title + '</a>';
        div.appendChild(span);
        output.appendChild(div);
    })
}