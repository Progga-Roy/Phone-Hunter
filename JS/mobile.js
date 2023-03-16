const loadPhone = async(searchText)=>{
const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
const res = await fetch(url)
const data = await res.json()
displayLoadPhone(data.data)
}


const displayLoadPhone =phones=>{
    const mobileContainer = document.getElementById('mobile-container');
         mobileContainer.innerText ='';
    phones.forEach(phone => {
        // console.log(phone);
        const createDiv = document.createElement('div')
        createDiv.classList.add('col')
        createDiv.innerHTML =`
        <div class="card p-4 shadow">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
        </div>
      </div>
        `
        mobileContainer.appendChild(createDiv);
    });

}

document.getElementById('search-btn').addEventListener('click',function(){
const searchField = document.getElementById('search-field').value;
loadPhone(searchField)

})
loadPhone();