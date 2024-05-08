const urlSCB = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/FordonTrafik";


//Här hämtar vi data om hur många personer i alla län mellan 2012-2022 som åkte personbil
const querySCB = {
    "query": [
      {
        "code": "Region",
        "selection": {
          "filter": "item",
          "values": [
            "00"
          ]
        }
      },
      {
        "code": "Fordonsslag",
        "selection": {
          "filter": "item",
          "values": [
            "10"
          ]
        }
      },
      {
        "code": "Tid",
        "selection": {
          "filter": "item",
          "values": [
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022"
          ]
        }
      }
    ],
    "response": {
      "format": "JSON"
    }
  }

  function printSCBChart(dataSCB){
    console.log(dataSCB)
    const years = dataSCB.data;
    const labels = years.map((year) => year.key[2]);
    console.log(labels);  
    const data = years.map((year) => year.values[0]);
    console.log(data);  
    console.log(years);


  const datasets = [
    {
      label: "Antal personbilar i alla län i Sverige mellan år 2012-2022",
      data,
      fill: false,
      borderWidth: 2,
      borderColor: "#40A2E3",
      backgroundColor: "#e8eef0",
      hoverBorderWidth: 4,
      tension: 0.5
      
    }];


  new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {labels, datasets}

  });
}

  const request = new Request (urlSCB, {
    method: "POST",
    body: JSON.stringify(querySCB)
  });

  fetch (request)
  .then((response) => response.json())
  .then(printSCBChart);



//Hämtar data på hur många som åkte personbil i alla län år 2022 och 2012
const url2022 = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/FordonTrafik";

const query2022 = {
  "query": [
    {
      "code": "Region",
      "selection": {
        "filter": "item",
        "values": [
          "00"
        ]
      }
    },
    {
      "code": "Fordonsslag",
      "selection": {
        "filter": "item",
        "values": [
          "10"
        ]
      }
    },
    {
      "code": "Tid",
      "selection": {
        "filter": "item",
        "values": [
          "2012",
          "2022"
        ]
      }
    }
  ],
  "response": {
    "format": "JSON"
  }
}

  function printSCBChart2(dataSCB2022){
    const years = dataSCB2022.data;
    const labels = years.map((year) => year.key[2]);
    console.log(labels);  
    const data = years.map((year) => year.values[0]);
    console.log(data);  

    const datasets = [
      {
        label: "Antal personbilar i alla län i Sverige år 2012 och 2022",
        data,
        fill: false,
        borderWidth: 1,
        borderColor: ["#40A2E3", "#67E59A"],
        backgroundColor: ["#e8eef0", "#A2E4BD"],
        hoverBorderWidth: 4,
        tension: 0.5,
        barThickness: 50,
        
        
      }];

      new Chart(document.getElementById("myChart2"), {
        type: "bar",
        data: {labels, datasets}
    
      });
    }



  const request2022 = new Request (urlSCB, {
    method: "POST",
    body: JSON.stringify(query2022)
  });

  fetch (request2022)
  .then((response) => response.json())
  .then(printSCBChart2);





//Hämtar data på kolioxid för personbil mellan åren 2012 -2022

const urlkol = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/MI/MI0107/MI0107InTranspNN";

const querykol = {
  "query": [
    {
      "code": "Vaxthusgaser",
      "selection": {
        "filter": "item",
        "values": [
          "CO2-ekv."
        ]
      }
    },
    {
      "code": "Transportslag",
      "selection": {
        "filter": "item",
        "values": [
          "8.5.1"
        ]
      }
    },
    {
      "code": "Bransleslag",
      "selection": {
        "filter": "item",
        "values": [
          "0"
        ]
      }
    },
    {
      "code": "Tid",
      "selection": {
        "filter": "item",
        "values": [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022"
        ]
      }
    }
  ],
  "response": {
    "format": "JSON"
  }
}
 
  function printSCBChart3(dataSCBkol){
    console.log(dataSCBkol)
    const years = dataSCBkol.data;
    const labels = years.map((year) => year.key[3]);
    console.log(labels);  
    const data = years.map((year) => year.values[0]);
    console.log(data);  
    console.log(years);
    

    const datasets = [
      {
        label: "Totala mängden växthusgas för personbil mellan åren 2012-2022",
        data,
        fill: false,
        borderWidth: 2,
        borderColor: ["#40A2E3", "#67E59A"],
        backgroundColor: "#e8eef0",
        hoverBorderWidth: 4,
        tension: 0.5,
        radius: 5
        
      }];
  
  
    new Chart(document.getElementById("myChart3"), {
      type: "bubble",
      data: {labels, datasets}
  
    });
  }


const requestkol = new Request (urlkol, {
  method: "POST",
  body: JSON.stringify(querykol)
});

fetch (requestkol)
.then((response) => response.json())
.then(printSCBChart3);


const urlkol2 ="https://api.scb.se/OV0104/v1/doris/sv/ssd/START/MI/MI0107/MI0107InTranspNN";

const querykol2 = {
  "query": [
    {
      "code": "Vaxthusgaser",
      "selection": {
        "filter": "item",
        "values": [
          "CO2-ekv."
        ]
      }
    },
    {
      "code": "Transportslag",
      "selection": {
        "filter": "item",
        "values": [
          "8.5.1"
        ]
      }
    },
    {
      "code": "Bransleslag",
      "selection": {
        "filter": "item",
        "values": [
          "0"
        ]
      }
    },
    {
      "code": "Tid",
      "selection": {
        "filter": "item",
        "values": [
          "2012",
          "2022"
        ]
      }
    }
  ],
  "response": {
    "format": "JSON"
  }
}
function printSCBChart4(dataSCBkol2){
  console.log(dataSCBkol2)
  const years = dataSCBkol2.data;
  const labels = years.map((year) => year.key[3]);
  console.log(labels);  
  const data = years.map((year) => year.values[0]);
  console.log(data);  
  console.log(years);

const datasets = [
    {
      label: "Totala mängden växthusgas för personbil år 2012 och 2022",
      data,
      fill: false,
      borderWidth: 1,
      borderColor: ["#40A2E3", "#67E59A"],
      backgroundColor: ["#e8eef0", "#A2E4BD"],
      hoverBorderWidth: 4,
      tension: 0.5,
      barThickness: 50,
      
      
    }];

new Chart(document.getElementById("myChart4"), {
  type: "bar",
  data: {labels, datasets}
  
    });
  }


const requestkol2 = new Request (urlkol2, {
  method: "POST",
  body: JSON.stringify(querykol2)
});

fetch (requestkol2)
  .then((response) => response.json())
  .then(printSCBChart4);





       




  

