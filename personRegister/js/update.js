'use strict';

(function(){
    let resultset;
    let resultsection;
    let keyInput;
    let searchValueInput;
    let messagearea;

    const showResultSection = ()=> resultsection.removeAttribute('class','hidden');
    const hideResultSection = ()=> resultsection.setAttribute('class','hidden');
    const showMessage = ()=> messagearea.removeAttribute('class','hidden');
    const hideMessage = ()=> messagearea.setAttribute('class','hidden');

    document.addEventListener('DOMContentLoaded',init);

    function init(){
        resultset = document.getElementById('resultset');
        resultsection = document.getElementById('resultsection');
        keyInput=document.getElementById('key');
        searchValueInput = document.getElementById('searchvalue');
        messagearea = document.getElementById('messagearea');

        document.getElementById('submit').addEventListener('click', submit);
        keyInput.addEventListener('focus',clear);
        keyInput.addEventListener('change', ()=>searchValueInput.focus());
        searchValueInput.addEventListener('change',submit);

        clear();
        keyInput.focus();

    }

    function clear(){
        keyInput.value='';
        searchValueInput.value='';
        hideMessage();
        hideResultSection();

    }

    async function submit(){
        const key = keyInput.value;
        const searchValue=searchValueInput.value;

        try{
            const uri = key ? `/persons/${key}?value=${searchValue}`:'/persons';
            const result = await fetch(uri);
            const personData = await result.json();
            updataPage(personData);
        }
        catch(err){
            showError(err.message);
        }
    }

    function showError(message){
        messagearea.innerHTML=`<p>${message}</p>`;
        hideResultSection();
        showMessage();
    }

    function updataPage(searchResult){
        if(searchResult.message){
            showError(searchResult.message);
        }
        else if(searchResult.length===0){
            showError('No person found');
        }
        else{
            let htmlString='';
            for(const person of searchResult){
                htmlString+=`<tr>
                <td>${person.firstname}</td>
                <td>${person.lastname}</td>
                <td>${person.age}</td>
                </tr>\n`
            }
            resultset.innerHTML=htmlString;
            showResultSection();
            hideMessage();
        }
    }

})();