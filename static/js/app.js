// from data.js
var tableData = data;

// get handle for table body
var tbody = d3.select("tbody");

function definetable(d){
    d.forEach(function(getdata){
        var row = tbody.append("tr");
    
        Object.entries(getdata).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        });
    }); 
};
// refresh, get all
definetable(tableData)

// handle for filter button
var button = d3.select("#filter-btn");

function clickbutton(){
    // clear existing table
    tbody.html("");
    var date = d3.select("#datetime").property("value")
    var city = d3.select("#city").property("value")

    var filterdate = tableData.filter(function(eachdate){
        return eachdate.datetime == date && eachdate.city ==city  
    });


    definetable(filterdate)

};
// register handler
button.on("click", clickbutton);