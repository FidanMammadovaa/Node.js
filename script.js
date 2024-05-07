let list = document.querySelector('#list');
let buttons = document.querySelectorAll('#filter button');
let value = "Baku";

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        value = event.target.textContent
        getFilteredList()
    });
});

const getFilteredList = async () => {
    console.log(value);

    let response = await fetch(`http://localhost:5000/apartments?city=${value}`);
    let data = await response.json();
    list.innerHTML = '';
    data.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<p>${element.name}</p><p>${element.price}</p><p>${element.rooms}</p><p>${element.city}</p>`;
        list.appendChild(li);
    });
};
