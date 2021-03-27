// from data.js
let tableData = data;

// console.log(tableData)

// Create references
const tbody = d3.select("tbody");
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Input data into HTML
let addData = (dataInput) => {
    dataInput.forEach(sighting => {
        let row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(sighting[column])
        )
    });
}

addData(tableData);

// Create filter for data
let button = d3.select("#filter-btn"); {
button.on("click", function() {
    console.log("button was clicked");

    tbody.html("");

    // prevents default behavior
    d3.event.preventDefault();

    let inputDate = d3.select("#datetime");
    let inputCity = d3.select("#city");
    let inputState = d3.select("#state");
    let inputCountry = d3.select("#country");
    let inputShape = d3.select("#shape");

    const inputVals = {
        datetime: inputDate.property('value').trim(),
        city: inputCity.property('value').trim(),
        state: inputState.property('value').trim(),
        counrty: inputCountry.property('value').trim(),
        shape: inputShape.property('value').trim(),
    };

    const selectedCols = [];

    if (inputDate.property('value').trim() !== '') {
        selectedCols.push('datetime')
    }

    if (inputCity.property('value').trim() !== '') {
        selectedCols.push('city')
    }

    if (inputState.property('value').trim() !== '') {
        selectedCols.push('state')
    }

    if (inputCountry.property('value').trim() !== '') {
        selectedCols.push('country')
    }

    if (inputShape.property('value').trim() !== '') {
        selectedCols.push('shape')
    }
    
    let filteredData = tableData;
    
    selectedCols.forEach((column) => {
        // filter here
        filteredData = filteredData.filter(dataInput => dataInput[column] === inputVals[column]);

    })
    console.log(filteredData)

   addData(filteredData);

        }
    )
}