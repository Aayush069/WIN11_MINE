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