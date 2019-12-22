/*
1, find all images
2. replace all of their src field by my best picture
*/

let imgs = document.getElementsByTagName('img');
for (elt of imgs) {
    let url = chrome.extension.getURL("theBest.jpg");
    console.log(url);
    elt.src = url;
}