let windowsicon=document.getElementsByClassName('windowsicon')[0]
let startmenu=document.getElementsByClassName('startmenu')[0]

windowsicon.addEventListener('click',()=>{
    if (startmenu.style.bottom == '50px'){
        startmenu.style.bottom = '-655px'
    }
    else{
        startmenu.style.bottom  = '50px'
        searchmenu.style.bottom='-655px'
        newsbar.style.bottom = '-825px'
        
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
        newsbar.style.bottom = '-825px'
    }
})



let newsicon=document.getElementsByClassName('newsicon')[0]
let newsbar=document.getElementsByClassName('newsbar')[0]

newsicon.addEventListener('click',()=>{
    if (newsbar.style.bottom == '40px'){
        newsbar.style.bottom = '-825px'
        
    }
    else{
        newsbar.style.bottom  = '40px'
        searchmenu.style.bottom='-655px'
        startmenu.style.bottom='-655px'
        
    }
})



let libicon=document.getElementsByClassName('libicon')[0]
let libbar=document.getElementsByClassName('libbar')[0]

libicon.addEventListener('click',()=>{
    if (libbar.style.bottom == '150px'){
        libbar.style.bottom = '-655px'
    
        
    }
    else{
        libbar.style.bottom  = '150px'
        newsbar.style.bottom  = '-825'
        searchmenu.style.bottom='-655px'
        startmenu.style.bottom='-655px'    
    }
})

let chromeicon=document.getElementsByClassName('chromeicon')[0]
let chromebar=document.getElementsByClassName('chromebar')[0]

chromeicon.addEventListener('dblclick',()=>{
    if (chromebar.style.left == '150px'){
        chromebar.style.left = '-1600px'
    
        
    }
    else{
        chromebar.style.left  = '150px'
    }
})

