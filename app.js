const API = "AIzaSyCf9kMuYtYfP-o4k6haBVRTLFCV74bnqlQ";
const output = document.querySelector('.output');
function ySearch(e){
    const url = 'https://www.googleapis.com/youtube/v3/search/?part=snippet&key='+API+'&q=test&maxResults=20';
   output.textContent = url;
    fetch(url).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
    })
}