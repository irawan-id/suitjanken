const acakWarna = document.getElementById('acakWarna');
acakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

function getCompPick() {
    const comp = Math.round(Math.random() * 8);

    if (comp < 3) return 'gunting';
    if (comp >= 3 && comp < 6) return 'batu';
    return 'kertas';
}

function rules(comp, player) {
    if (comp == player) return 'SERI!';
    if (player == 'gunting') return comp == 'batu' ? 'KALAH!' : 'MENANG!';
    if (player == 'kertas') return comp == 'gunting' ? 'KALAH!' : 'MENANG!';
    if (player == 'batu') return comp == 'kertas' ? 'KALAH!' : 'MENANG!';
}

var menang = 0;
var kalah = 0;
var seri = 0;

function acak() {
    const imgComp = ['gunting', 'batu', 'kertas'];
    const waktuAwal = new Date().getTime();

    let a = 1;

    setInterval(function() {
        if (new Date().getTime() - waktuAwal > 1000) {
            clearInterval;
            return;
        }
        const acakImg = document.querySelector('.img-comp');
        acakImg.setAttribute('src', 'img/' + imgComp[a++] + '1.png');
        if (a == imgComp.length) a = 0;
    }, 100);
}

const player = document.querySelector('.player');
const pick = document.querySelectorAll('.player img');

pick.forEach(function(i) {
    i.addEventListener('click', function(e) {
        const pComp = getCompPick();
        const pPlayer = e.target.getAttribute('alt');

        hasil = rules(pComp, pPlayer);

        acak();

        const gambarComp = document.querySelector('.comp img');
        setTimeout(function() {
            gambarComp.setAttribute('src', 'img/' + pComp + '1.png');
            info.innerHTML = hasil;
            menangIn.innerHTML = 'Kamu ' + menang;
            kalahIn.innerHTML = kalah + ' Comp';
        }, 1000);

        const info = document.querySelector('.info');

        if (hasil == 'MENANG!') {
            menang += 1;
        } else if (hasil == 'SERI!') {
            seri += 1;
        } else {
            kalah += 1;
        }

        const menangIn = document.querySelector('.pscore h2');
        const kalahIn = document.querySelector('.cscore h2');
    });
});