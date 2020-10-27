let atas = document.getElementById("atas");
let kanan = document.getElementById("kanan");
let tengah = document.getElementById("tengah");
let bawah = document.getElementById("bawah");
let kiri = document.getElementById("kiri");
let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    atas.style.top = value * 0.2 + 'px';
    kanan.style.right = -value * 0.12 + 'px';
    tengah.style.top = value * 0.05 + 'px';
    bawah.style.top = value * 0.15 + 'px';
    kiri.style.left = value * -0.1 + 'px';
    })
