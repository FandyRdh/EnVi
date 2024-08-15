// Fungsi untuk membuat elemen box
function createBox() {
    // Buat elemen div dengan kelas 'box' dan background image
    const boxDiv = document.createElement('div');
    boxDiv.className = 'box';
    boxDiv.style.backgroundImage = 'url(/assets/img/Photo-Background.png)';
    
    // Buat elemen div dengan kelas 'text-1'
    const text1Div = document.createElement('div');
    text1Div.className = 'text-1';
    
    // Buat elemen div dengan kelas 'rank'
    const rankDiv = document.createElement('div');
    rankDiv.className = 'rank';
    rankDiv.textContent = 'Part I';
    
    // Buat elemen div dengan kelas 'name'
    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = 'Marc Márquez Alentà';
    
    // Susun elemen-elemen
    text1Div.appendChild(rankDiv);
    text1Div.appendChild(nameDiv);
    boxDiv.appendChild(text1Div);
    
    return boxDiv;
}

// Tambahkan 6 elemen box ke dalam container di HTML
const container = document.getElementById('main');
for (let i = 0; i < 18; i++) {
    const box = createBox();
    container.appendChild(box);
}


