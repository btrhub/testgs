function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbwazXlrhZjaulEvqyxDiSHnhyTJD0TiB3zOGOmBwQKQMcy-pzmWa8d9S_jFaJVI9Nhg/exec";
    fetch(url)
        .then(d=>d.json())
        .then(d=>{document.getElementById("app").textContent = d[0].status;});

    console.log("click")    
}

function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbwazXlrhZjaulEvqyxDiSHnhyTJD0TiB3zOGOmBwQKQMcy-pzmWa8d9S_jFaJVI9Nhg/exec";
    fetch(url, {
        method:'POST',
        mode:'no-cors',
        cache:'no-cache',
        credentials:'omit',
        headers:{
            'Content-Type':'application/json'
        },
        redirect:'follow',
        body:JSON.stringify({name:'Olivia'})
    } )

    console.log("click")    
} 
document.getElementById("btn").addEventListener("click",testGS)
document.getElementById("btn2").addEventListener("click",addGS)
