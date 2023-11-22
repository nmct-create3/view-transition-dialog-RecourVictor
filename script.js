const showDialog = function(){
    document.getElementById("showModalDialog").addEventListener("click", function(){
        // document.getElementById("modalDialog").showModal();

        document.startViewTransition(() => {
            document.getElementById("modalDialog").showModal();
        });    
    })
}

const closeDialog = function(){
    document.getElementById("closeModalDialog").addEventListener("click", function(){
        // document.getElementById("modalDialog").close();

        document.startViewTransition(() => {
            document.getElementById("modalDialog").close();
        });    
    })
}

const init = function(){
    showDialog();
    closeDialog();
}

document.addEventListener('DOMContentLoaded',init);