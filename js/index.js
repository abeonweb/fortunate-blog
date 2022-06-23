
const container = document.querySelector(".post-container")
const postBtn = document.querySelector(".post-btn")
const formContainer = document.querySelector(".form-container")
const main = document.querySelector(".post-container")
let isVisible = false

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data =>{
        data = data.slice(0,3)
        let postHtml=""

        for(index=data.length-1;index >=0 ;index--){
            postHtml +=`
                <div class="post">
                    <h2 class="post-title">${data[index].title}</h2>
                    <p class="post-body">${data[index].body}</p>
                </div>
            `
        }

        container.innerHTML = postHtml
    })

postBtn.addEventListener("click", function(){
    if(!isVisible){
        formContainer.style.transform = "translateY(0)"
        main.style.transform = "translateY(0)"
        isVisible=true
    }else{
        formContainer.style.transform = "translateY(-300px)"
        main.style.transform = "translateY(-300px)"
        isVisible=false
    }
})
