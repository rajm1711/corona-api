let index = 0;
const fetchData = () => {
    
    fetch('https://data.covid19india.org/data.json')
    .then(response => response.json())
    .then( data => {
        data.statewise.forEach(state => {
            index++;
            console.log(state);
            let corona = document.getElementById('corona');

            corona.innerHTML += `<tr>
                <td>${index}</td>
                <td class="fw-bold text-start">${state.state}</td>
                <td>${state.active}</td>
                <td>${state.lastupdatedtime}</td>
                <td>${state.confirmed}</td>
                <td>${state.deaths}</td>
            </tr>` 
            

        });
    })
    .catch(error => {
        console.error('Error fetching Corona data',error);
    });
}

fetchData();




