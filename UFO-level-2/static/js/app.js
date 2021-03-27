// from data.js
let tableData = data;

// console.log(tableData)

// Create references
const tbody = d3.select("tbody");
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Input data into html
let addData = (dataInput) => {
    dataInput.forEach(sighting => {
        let row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(sighting[column])
        )
    });
}

//print (add) table to html
addData(tableData);



// Create filter for data
let button = d3.select("#filter-btn"); {
button.on("click", function() {
    console.log("button was clicked");

    // clear out table
    tbody.html("");

    // prevent default behavior
    d3.event.preventDefault();

    // 
    let inputDate = d3.select("#datetime");
    let inputCity = d3.select("#city");
    let inputState = d3.select("#state");
    let inputCountry = d3.select("#country");
    let inputShape = d3.select("#shape");

    // collect filtered data from input fields
    const inputValues = {
        datetime: inputDate.property('value').trim(),
        city: inputCity.property('value').trim(),
        state: inputState.property('value').trim(),
        counrty: inputCountry.property('value').trim(),
        shape: inputShape.property('value').trim(),
    };

    // create new array for data that matches filtered results
    const selectedColumns = [];

    // push filtered data to new array
    if (inputDate.property('value').trim() !== '') {
        selectedColumns.push('datetime')
    }

    if (inputCity.property('value').trim() !== '') {
        selectedColumns.push('city')
    }

    if (inputState.property('value').trim() !== '') {
        selectedColumns.push('state')
    }

    if (inputCountry.property('value').trim() !== '') {
        selectedColumns.push('country')
    }

    if (inputShape.property('value').trim() !== '') {
        selectedColumns.push('shape')
    }
    
    let filteredData = tableData;
    
    selectedColumns.forEach((column) => {
        // filter selected data
        filteredData = filteredData.filter(dataInput => dataInput[column] === inputValues[column]);

    })
    // console.log(filteredData)

    // print out selected data to html
    addData(filteredData);

        }
    )
}