const holder = document.getElementById('holder');

async function main() {
    const data = await (await fetch('https://api.adviceslip.com/advice')).json();
    placeOnDiv()
    const activity = (await fetchBored()).activity;
    holder.innerHTML += `<br>${activity}`;
}
async function fetchBored() {
    const res = await fetch('/api/connection');
    const data = await res.json();
    return data;
}
function placeOnDiv(text) {
    const newDiv = document.createElement('div');
    newDiv.className = 'api-panel';
    newDiv.innerText = text;
    holder.appendChild(newDiv);
}

main();