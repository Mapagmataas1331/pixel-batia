const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, get, update, child } = require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyCrwzRK740-pz8Zfz9YjNm_o37AGOVV8HM",
    authDomain: "novocointgbotdb.firebaseapp.com",
    databaseURL: "https://novocointgbotdb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "novocointgbotdb",
    storageBucket: "novocointgbotdb.appspot.com",
    messagingSenderId: "653792840850",
    appId: "1:653792840850:web:4a47e06582cc4a70bcea4b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const CANVAS_WIGHT = 1600;
const CANVAS_HEIGHT = 900;
const PIXEL_SIZE = 10;

const root = document.querySelector(':root');
root.style.setProperty('--CANVAS_WIGHT', CANVAS_WIGHT + "px");
root.style.setProperty('--CANVAS_HEIGHT', CANVAS_HEIGHT + "px");
root.style.setProperty('--PIXEL_SIZE', PIXEL_SIZE + "px");

const canvas = document.getElementById("canvas");

for (var i = 0; i < CANVAS_HEIGHT / PIXEL_SIZE; i++) {
    var l = document.createElement("div");
    l.classList.add('line');
    canvas.appendChild(l);
    for (var j = 0; j < CANVAS_WIGHT / PIXEL_SIZE; j++) {
        var p = document.createElement("div");
        p.classList.add('pixel');
        p.id = i + "_" + j;
        p.setAttribute("onclick", "ap(this.id)");
        l.appendChild(p);
    }
}

function aboutpixel(id) {
    alert(id);
}
window.ap = aboutpixel;

fun1();
async function fun1() {
for (var i = 0; i < CANVAS_HEIGHT / PIXEL_SIZE; i++) {
    for (var j = 0; j < CANVAS_WIGHT / PIXEL_SIZE; j++) {
        var p = document.getElementById(i + "_" + j);
        if ((i+1)%2 == 0) {
            if ((j+1) % 2 == 0) {
                p.style.backgroundColor = "#f2f2f2"
            } else {
                p.style.backgroundColor = "#a6a6a6"
            }
        } else {
            if ((j+1) % 2 == 0) {
                p.style.backgroundColor = "#a6a6a6"
            } else {
                p.style.backgroundColor = "#f2f2f2"
            }
        }
    }
    await sleep(10);
}}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// var zoom = 100;
// canvas.onwheel = function _image__onwheel( e ) {
//     e.preventDefault();
//     if (e.deltaY < 0) {
//         zoom += 10;
//         document.body.style.zoom = zoom + "%";
//     } else {
//         zoom -= 10;
//         document.body.style.zoom = zoom + "%";
//     };
// };