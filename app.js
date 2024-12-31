const btnMsgEl = document.querySelector('#btnMsg');

const messageInEl = document.querySelector('#messageIn');

const messageOutEl = document.querySelector('#messageOut');

btnMsgEl.addEventListener('click', sendMsg);

function sendMsg() {
    
    let content = messageInEl.value;
    // console.log(content);
    if (content === '') {
        alert("please enter valid text")
    } else {
        messageOutEl.innerHTML = content;
        messageInEl.value = '';
    }
    
}