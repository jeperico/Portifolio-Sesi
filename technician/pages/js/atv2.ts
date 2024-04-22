const spentValue: HTMLInputElement | null = document.querySelector('#spent-value');
const lucreValue: HTMLInputElement | null = document.querySelector('#lucre-value');
const spent = document.querySelector('#spent');
const lucre = document.querySelector('#lucre');
let spentMonth: number[] = [];
let lucreMonth: number[] = [];

const button = document.querySelector('#button');


let month: number = 2;

function getMonth(month: number) {
    if (lucre) lucre.innerHTML = `MÊS: ${month} [GANHO-BRUTO]`;
    if (spent) spent.innerHTML = `MÊS: ${month} [GASTO]`;
}

button?.addEventListener('click', () => {
    if (spentValue) spentMonth.push(parseFloat(spentValue.value));
    if (lucreValue) lucreMonth.push(parseFloat(lucreValue.value));
    if(month == 13) {report(); return}
    getMonth(month);
    month++;
});

function report() {
    const grossProfi: number = lucreMonth.reduce((accumulator, currentValue) => accumulator + currentValue)
    const anualSpent: number = spentMonth.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log("Ganho Bruto =>" + grossProfi);
    console.log("Ganho Anual =>" + anualSpent);
    console.log("Saldo Total =>" + (anualSpent - grossProfi));
    month = 1;
    spentMonth = [];
    lucreMonth = [];
}

getMonth(1);