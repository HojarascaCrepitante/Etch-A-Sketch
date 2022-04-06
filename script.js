const header = document.getElementById('header');
    const newGridButton30x30 = document.createElement('button');
        newGridButton30x30.textContent = '30x30';
        newGridButton30x30.addEventListener('click', makeNewGrid30x30);
        header.appendChild(newGridButton30x30);
    const newGridButton40x40 = document.createElement('button');
        newGridButton40x40.textContent = '40x40';
        newGridButton40x40.addEventListener('click', makeNewGrid40x40);
        header.appendChild(newGridButton40x40);
    const button16x16 = document.createElement('button');
        button16x16.addEventListener('click', makeGrid);
        button16x16.textContent = '16x16';
        header.appendChild(button16x16)
    const button = document.createElement('button');
        button.addEventListener('click', clearGrid);
        button.textContent = 'Clear Grid';
        header.appendChild(button)
const grid = document.getElementById('grid')
    const rowAndColumns = document.createElement('div');
        rowAndColumns.classList.add('rowAndColumns');
        grid.appendChild(rowAndColumns);
    
    function makeGrid(){
        deleteGrid()
        for(let i = 0; i < 256; i++){
            let divsRowAndColumns = document.createElement('div');
            divsRowAndColumns.classList.add('rowAndColumnsDivs')
            divsRowAndColumns.addEventListener('mouseenter',paintItBlack)
            rowAndColumns.appendChild(divsRowAndColumns);
        }
        rowAndColumns.style = 'grid-template-rows: repeat(16,1fr)';
        rowAndColumns.style = 'grid-template-columns: repeat(16,1fr)';
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
    function makeNewGrid30x30(){
        
        deleteGrid()
        for (let y = 0; y < 900 ; y++){
            let newGrid = document.createElement('div');
            newGrid.classList.add('rowAndColumnsDivs30x30');
            newGrid.addEventListener('mouseenter', paintItBlack);
            rowAndColumns.appendChild(newGrid);
            
        }
            rowAndColumns.style =`grid-template-rows:repeat(30, 1fr)`
            rowAndColumns.style =`grid-template-columns: repeat(30, 1fr)`
    }
    function makeNewGrid40x40(){
        deleteGrid()
        for (let e = 0; e < 1600; e++){
            let newGrid40x40 = document.createElement('div');
            newGrid40x40.classList.add('rowAndColumnsDivs40x40');
            newGrid40x40.addEventListener('mouseenter', paintItBlack);
            rowAndColumns.appendChild(newGrid40x40)
        }
        rowAndColumns.style =`grid-template-rows:repeat(40, 1fr)`
        rowAndColumns.style =`grid-template-columns: repeat(40, 1fr)`
    }
            
    function deleteGrid(){
        let oldGrid = document.querySelectorAll('.rowAndColumnsDivs');
        let oldGrid30x30 = document.querySelectorAll('.rowAndColumnsDivs30x30');
        let oldGrid40x40 = document.querySelectorAll('.rowAndColumnsDivs40x40');
        for (let x = 0; x < oldGrid.length; x++){
                oldGrid[x].remove();
        }
        for (let w = 0; w < oldGrid30x30.length;w++){
            oldGrid30x30[w].remove()
        }
        for (let u = 0; u < oldGrid40x40.length; u++){
            oldGrid40x40[u].remove()
        }
    }
