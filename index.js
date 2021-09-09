
function test(){
    fetch("./code.text").then(a=>a.text()).then((data)=>{
        data = data.toString();
        function initiateTyper(){
            let currentPos = 0;
            return function(){
                let code = document.getElementById('source');
                if(currentPos-3<data.length){
                    code.innerHTML = data.substring(0,currentPos+3).replace(/[\u00A0-\u9999<>\&]/gim, function(a) {
                        return "&#" + a.charCodeAt(0) + ";"
                    });
                    currentPos +=3;
                } else{
                    code.innerHTML = data.substring(0);
                }
            }
        }
        let initTyper = initiateTyper();
        setInterval(initTyper,500);
    })
}
test();
setInterval(()=>{
    let cursor = document.getElementById('cursor');
    cursor.style.color = 'transparent';
},500);
setInterval(()=>{
    let cursor = document.getElementById('cursor');
    cursor.style.color = 'inherit';
},1000);
let str = '1\n11\n111';
document.getElementById('source').innerHTML = str;