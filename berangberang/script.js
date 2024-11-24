const tanah = document.querySelectorAll('.tanah');
const berangberang = document.querySelectorAll('.berangberang');
const papanSkor = document.querySelector('.papan-skor');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if  (tRandom == tanahSebelumnya) {
        randomTanah(tanah);
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomWaktu(min, max) {
    return Math.round(Math.random() * (max-min) +min);
}

function munculkanBerangberang() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomWaktu(300, 1000);
    tRandom.classList.add('muncul');
  
    setTimeout(() => {
       tRandom.classList.remove('muncul');
       if (!selesai) {
        munculkanBerangberang();
       }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanBerangberang();
    setTimeout(() => {
      selesai = true;
    },10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  papanSkor.textContent = skor;
}

berangberang.forEach(b => {
    b.addEventListener('click', pukul)
}); 







