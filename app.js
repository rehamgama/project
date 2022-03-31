let clickFlow = () => {
    if (document.getElementById('task0') && document.querySelector('#task0  .height-20')) {

        if (document.querySelector('#task0 .height-20 + span').innerText > 1) {

            document.querySelector('#task0 .height-20 a').click()
            
        } else {

            document.querySelector('#task0 a.cursor').click()
            setTimeout(() => {
                clickFlow()
            }, 1000);
        }
    } else {

        if (document.querySelector('#task1 .height-20 + span').innerText > 1) {

            document.querySelector('#task1 .height-20 a').click()
        } else {

            document.querySelector('#task1 a.cursor').click()
            setTimeout(() => {
                clickFlow()
            }, 1000);
        }
    }
}

chrome.runtime.onMessage.addListener(reciveAction)
function reciveAction(action){
    if(action === 'clickFollow'){
        if(document.querySelector('a.cursor img[alt="Click On The Button To Confirm Interaction!"]')){
            document.querySelector('a.cursor img[alt="Click On The Button To Confirm Interaction!"]').click()
            setTimeout(() => {
                clickFlow()
            }, 1000);
        }else{
            clickFlow()

        }
    }
}
// chrome.browserAction.onClick.addListener(alert('hola'))
    // document.querySelector('a.cursor img[alt="Click On The Button To Confirm Interaction!"]').addEventListener('click',clickFlow)