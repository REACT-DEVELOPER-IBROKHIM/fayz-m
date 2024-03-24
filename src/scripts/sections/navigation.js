const navigation = document.querySelector("#navigation");

document.addEventListener("scroll", (e) => {
    if(window.scrollY > 45){
        navigation.classList.add("pinned-navbar");
    }else{
        navigation.classList.remove("pinned-navbar");
    }
})