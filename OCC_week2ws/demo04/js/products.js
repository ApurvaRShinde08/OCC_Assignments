const products=[
    {pid:1001,pname:"p1",price:30.00,url:'images/img01.jpg'},
    {pid:1002,pname:"p2",price:30.00,url:''},
    {pid:1003,pname:"p3",price:30.00,url:''}
]

const divHtml=document.getElementById("result");
const ul= document.createElement("ul");

for(let i in products){
    const li=document.createElement("li");
    li.innerHTML=products[i].pname;
    ul.appendChild(li);
}
divHtml.appendChild(ul);
const img=document.createElement('img');
img.src=products[0].url;
divHtml.appendChild(img);
// ul->li