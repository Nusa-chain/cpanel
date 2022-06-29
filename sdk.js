
const xhr = new XMLHttpRequest();
firebase.initializeApp({'messagingSenderId':'773105897897'})
const messaging = firebase.messaging();

function service(id){
    xhr.open('PUT', 'https://db-sever-default-rtdb.firebaseio.com/sever.json', true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload=function(){console.log(this.response)};
    xhr.send(JSON.stringify({sever:id}));
}


async function token(){
    try{
        await messaging.requestPermission();
        service(await messaging.getToken())
        console.log(await messaging.getToken())
    }catch(error){
        console.error(error);
    }
}
token()