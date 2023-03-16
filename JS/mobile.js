const loadPhone = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayLoadPhone(data.data, dataLimit)
}


const displayLoadPhone = (phones, dataLimit) => {
    const mobileContainer = document.getElementById('mobile-container');
    mobileContainer.innerText = '';
    // display 10 phone
    const showAll = document.getElementById('show-all');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }

    //  display not found massage
    const noPhone = document.getElementById('not-found')
    if (phones.length === 0) {
        noPhone.classList.remove('d-none')
    }
    else {
        noPhone.classList.add('d-none')
    }

    phones.forEach(phone => {
        // console.log(phone);

        const createDiv = document.createElement('div')
        createDiv.classList.add('col')
        createDiv.innerHTML = `
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
    toggleSpinner(false)
}

const processSearch = (dataLimit) => {
    toggleSpinner(true)
    const searchField = document.getElementById('search-field').value;
    loadPhone(searchField, dataLimit)
}
document.getElementById('search-btn').addEventListener('click', function () {
    processSearch(10);

})
const toggleSpinner = isLoading => {
    const spinningSection = document.getElementById('loader');
    if (isLoading) {
        spinningSection.classList.remove('d-none')
    }
    else {
        spinningSection.classList.add('d-none')
    }
}
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()

})
// loadPhone();