// from data.js
let tableData = data;

// console.log(tableData)

// Create references
let tablebody = d3.select("tbody");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Input data into HTML
let addData = (dataInput) => {
    dataInput.forEach(sighting => {
        let row = tablebody.append("tr");
        columns.forEach(column => row.append("td").text(sighting[column])
        )
    });
}

addData(tableData);

// Create filter for data