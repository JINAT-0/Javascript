function a(){
    const aa=document.createElement('li')
     const bb=document.getElementById('tasklist')
     bb.appendChild(aa)
     aa.textContent=document.getElementById('textTask').value
     document.getElementById('textTask').value=""
     d(aa)

}
function d(aa){
    const cc=document.createElement('button')
    cc.textContent='delete'
    aa.appendChild(cc)
    cc.onclick=function(){
        aa.remove()
    } 
}