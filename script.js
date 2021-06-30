let windowsicon=document.getElementsByClassName('windowsicon')[0]
let startmenu=document.getElementsByClassName('startmenu')[0]

windowsicon.addEventListener('click',()=>{
    if (startmenu.style.bottom == '50px'){
        startmenu.style.bottom = '-655px'
    }
    else{
        startmenu.style.bottom  = '50px'
        searchmenu.style.bottom='-655px'
        
    }
})



let searchicon=document.getElementsByClassName('searchicon')[0]
let searchmenu=document.getElementsByClassName('searchmenu')[0]

searchicon.addEventListener('click',()=>{
    if (searchmenu.style.bottom == '50px'){
        searchmenu.style.bottom = '-655px'
        
    }
    else{
        searchmenu.style.bottom  = '50px'
        startmenu.style.bottom='-655px'
    }
})