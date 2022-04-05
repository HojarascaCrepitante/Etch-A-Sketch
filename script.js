const container = document.getElementById('container')
const button = document.createElement('button')
button.addEventListener('click', clearGrid)
button.textContent = 'Clear Grid';
container.appendChild(button)
const rowAndColumns = document.createElement('div');
rowAndColumns.classList.add('rowAndColumns');
container.appendChild(rowAndColumns)
    function makeGrid(){
        for(let i = 0; i < 256; i++){
            let divsRowAndColumns = document.createElement('div');
            divsRowAndColumns.classList.add('rowAndColumnsDivs')
            divsRowAndColumns.addEventListener('mouseenter',paintItBlack)
            rowAndColumns.appendChild(divsRowAndColumns);
        }
    
    }makeGrid()

    function paintItBlack(e){
        e.target.classList.add('active')
    }
    function clearGrid(){
        let everyDivInsideGrid = document.querySelectorAll('.active')
        for(let n = 0; n < everyDivInsideGrid.length; n++){
            everyDivInsideGrid[n].classList.remove('active')
        }
    }