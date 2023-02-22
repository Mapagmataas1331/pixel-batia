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
    for (var j = 0; j <= CANVAS_WIGHT / PIXEL_SIZE; j++) {
        p = document.createElement("div");
        p.style.top = i * 10 + "px";
        p.style.left = j * 10 + "px";
        p.classList.add('pixel');
        p.id = i + "_" + j;
        canvas.appendChild(p);
    }
}