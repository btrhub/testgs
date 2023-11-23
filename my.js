function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbwazXlrhZjaulEvqyxDiSHnhyTJD0TiB3zOGOmBwQKQMcy-pzmWa8d9S_jFaJVI9Nhg/exec";
    fetch(url)
        .then(d=>d.json())
        .then(d=>{document.getElementById("app").textContent = d[0].status;});

    console.log("click")    
}

document.getElementById("btn").addEventListener("click",testGS)