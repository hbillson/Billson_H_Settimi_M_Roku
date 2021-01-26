
function startSpin(event) {
    event.target.classList.add("fa-spin");
}

function stopSpin(event) {
    debugger;
    event.target.classList.remove("fa-spin");
}


function startFloat(event) {
    //event.target.classList.add("faa-float");
    event.target.classList.add("animated");

}

function stopFloat(event) {
    //event.target.classList.remove("faa-float");
    event.target.classList.remove("animated");
}

export { startSpin } 
export { stopSpin }
export { startFloat } 
export { stopFloat } 