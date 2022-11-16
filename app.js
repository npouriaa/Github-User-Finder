//Variables
const txtSearch = document.querySelector(".txtSearch"),
  Searchbtn = document.querySelector(".search-btn"),
  userCon = document.querySelector('.user-con');


//EventListeners
Searchbtn.addEventListener("click", ShowInfo);


//Functions
function ShowInfo() {
  let client_id = "Iv1.c615fc4f7bb3a11f";
  let client_secret = "c1df4995be5c4890e0fde3eadbf2bb62c77b8c16";

  fetch(`https://api.github.com/users/${txtSearch.value}?client_id=${client_id}&client_secret=${client_secret}`)
    .then((res) => res.json())
    .then((json) => Getdata(json));
}


function Getdata(data){
    let info = `
    <div class="user-info">
        <div class="user-header">
            <div class="userimage">
                <img src="${data.avatar_url}" alt="">
            </div>
            <div class="username">
                <h2 class="username-value">${data.login}</h2>
                <p class="join-date">Member since : <span class="join-since">${data.created_at.split('T')[0]}</span></p>
            </div>
        </div>
        <div class="user-body">
            <div class="section">
                <p>username : <span class="value uname-value">${data.login}</span></p>
                <p>Name : <span class="value name-value"> ${data.name}</span></p>
            </div>
            <div class="section">
                <p>company : <span class="value com-value"> ${data.company}</span></p>
                <p>location : <span class="value loc-value"> ${data.location}</span></p>
            </div>
            <div class="section">
                <p>email : <span class="value email-value"> ${data.email}</span></p>
                <p>bio : <span class="value bio-value"> ${data.bio}</span></p>
            </div>
            <div class="section">
                <p>public repositories : <span class="value repos-value"> ${data.public_repos}</span></p>
                <p>public gists : <span class="value gists-value"> ${data.public_gists}</span></p>
            </div>
            <div class="section">
                <p>followers : <span class="value followers-value"> ${data.followers}</span></p>
                <p>following : <span class="value following-value"> ${data.following}</span></p>
            </div>
        </div>
    </div>
    `;
    userCon.innerHTML = info
}
