const holder = document.getElementById('holder');
const header = document.querySelector('h1');

const imageNames = ['Captura', 'Pareto Visualizer', 'Sistema420'];
const links = ['https://qa1-captura.local', 'https://qa1-pareto.local', 'https://sys420.local'];

const images = [];


async function main() {
    imageNames.map((imageName, index) => {
        images[index] = {};
        const newImage = new Image();
        newImage.src = `./assets/${imageName}.webp`;
        images[index].image = newImage;
        images[index].link = links[index];
    });
    images.forEach(image => {
        createPanel(image, 'https://google.com');
    })
    startClock();
}

function createPanel(image) {
    const newPanel = document.createElement('a');
    newPanel.className = 'app-panel';
    newPanel.href = image.link;

    const newImage = document.createElement('img');
    newImage.src = image.image.src;
    newImage.style.width = `${window.innerWidth / 3 - 30}px`;

    newPanel.appendChild(newImage);
    holder.appendChild(newPanel);
}
function startClock() {
    header.innerText += ` - ${(new Date().toLocaleString())}`;
    setInterval(() => {
        header.innerText = `Coto Technology - ${new Date().toLocaleString()}`
    }, 1000);
}

main();