 const showList = async() => {
    await fetch("data.json")
    .then((response) => response.json())
    .then((data) =>{
        createList(data)
    });
 };

 showList();

 function createList(data){
    const mainUl=document.getElementById("ol")
    let component =""
   for(let i = 0 ; i< data.length ; i ++ ){
      component += `<div class="profile">
      <img src="${data[i].fotoselfie}" alt="">
      <div class="bio"><p>Nama</p><p>: ${data[i].nama}</p></div>
      <div class="bio"><p>Nim</p><p>: ${data[i].nim}</p></div>
      <div class="bio"><p>Alamat</p><p>: ${data[i].alamat}</p></div>
      <div class="bio"><p>TTL</p><p>: ${data[i].ttl}</p></div>
      <div class="bio"><p>No</p><p>: ${data[i].no}</p></div>
  </div>`  
   }

   mainUl.innerHTML = component
 }