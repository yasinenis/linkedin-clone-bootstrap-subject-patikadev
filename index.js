/*
const searchIconDOM = document.querySelector(".search-icon")
const searchInputDOM = document.getElementById("#searchId")

searchIconDOM.addEventListener("click", function() {
    searchInputDOM.focus()
});

*/

const messageBoxDOM = document.querySelector(".message-box");
messageBoxDOM.addEventListener("click", upMessageBox)

function upMessageBox() {
    const messageListDOM = document.querySelector(".message-list");

    if (messageListDOM.innerHTML.trim()) {
        messageListDOM.classList.toggle("my-border")

        messageListDOM.innerHTML = ` `

    }
    else {
        messageListDOM.classList.toggle("my-border")

        messageListDOM.innerHTML = `
        <div class="d-flex align-items-center">
                <img class="msg-pp rounded-circle point-it" src="https://media.licdn.com/dms/image/v2/D4D03AQFx-jdkOYeaxA/profile-displayphoto-shrink_200_200/B4DZTxh9yFG4AY-/0/1739219000972?e=1758153600&v=beta&t=v3R99s_uZGPZ0DreSJ1u2FBzvZW7q_2N5Bf1HqjLT6M" alt="">
                <span class="ms-2 point-it">Yasin Eniş </span>
                <div class="ms-auto"> 
                    <span class="point-it" style="color: blueviolet;"> +1 okunmamış mesaj</span>
                </div>
            </div>
        `

    }
}