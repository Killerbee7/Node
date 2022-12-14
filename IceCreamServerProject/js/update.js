'use strict';

(function(){

    let iceCreamList;
    let resultarea;

    document.addEventListener('DOMContentLoaded', init);

    async function init(){
        iceCreamList = document.getElementById('iceCreamlist');
        resultarea = document.getElementById('resultarea');

        try{
            const data = await fetch('/all');
            const flavors = await data.json();
            populateIcecreamList(flavors);
        }
        catch(err){
            showErrorMessage(err.message);
        }
    }

    function populateIcecreamList(gueryResult){
        for(const flavor of gueryResult){
            const option = document.createElement('option');
            option.value=flavor;
            option.textContent=flavor;
            iceCreamList.appendChild(option);
        }
        iceCreamList.addEventListener('change', choose);
        iceCreamList.value='';
    }

    async function choose(){
        const iceCreamFlavor=iceCreamList.value;
        if(iceCreamFlavor.length>0){
            try{
                const data = await fetch(`/icecreams/${iceCreamFlavor}`);
                const result= await data.json();
                updateResult(result);
            }
            catch(err){
                showErrorMessage(err.message);
            }
        }
        else{
            clearResultarea()
        }
    }

    function updateResult(data){
        if(!data) {
            showErrorMessage('Programmin error! sorry');
        }
        else if(data.message){
            showErrorMessage(data.message)
        }
        else if(data.name && data.name.length===0){
            clearResultarea()
        }
        else{
            let htmlString=`
            <div>
                <p id="name">${data.name}</p>
                <p id="price">${data.price} €</p>
            </div>`;
            if(data.image && data.image.length>0){
                htmlString+=`<img src="/images/${data.image}" />`;
            }
            resultarea.innerHTML=htmlString;
        }
    }

    function clearResultarea(){
        resultarea.innerHTML='';
    }

    function showErrorMessage(message){
        resultarea.innerHTML =`
        <div class="error">
        <h2>error</h2>
        <p>${message}</p>
        </div>`;
    }

})();