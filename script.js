const container = document.getElementById('container')
const rowAndColumns = document.createElement('div');
rowAndColumns.classList.add('rowAndColumns');
container.appendChild(rowAndColumns)
    function makeGrid(){
        for(let i = 0; i <= 256; i++){
            let divsRowAndColumns = document.createElement('div');
            divsRowAndColumns.classList.add('rowAndColumns')
            divsRowAndColumns.textContent = i;
            rowAndColumns.appendChild(divsRowAndColumns);
        }
    }makeGrid()