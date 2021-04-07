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

// print data to html table
addData(tableData);

// Create filter for data
let button = d3.select("#filter-btn"); {
button.on("click", function() {
    // console.log("button was clicked");

    // clear out table to accept new filtered data
    tbody.html("");

    // prevents default behavior
    d3.event.preventDefault();

    let inputDate = d3.select("#datetime");

    // set filter for date input
    const filter = tableData.filter(dataInput => dataInput.datetime === inputDate.property("value").trim());

    // console.log(filter)

    // print new filtered data to html
    addData(filter);

        }
    )
}
