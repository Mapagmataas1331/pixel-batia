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

const canvas = document.getElementById("canvas");

canvas.style.width = CANVAS_WIGHT + "px";
canvas.style.height = CANVAS_HEIGHT + "px";

for (var i = 0; i < CANVAS_HEIGHT / PIXEL_SIZE; i++) {
    for (var j = 0; j <= CANVAS_WIGHT / PIXEL_SIZE; j++) {
        hhh
    }
}