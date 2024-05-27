// Knapp som tar användaren tillbaka till toppen
let mybutton = document.getElementById("btn-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//Graf - Här hämtar vi data över antalet personbilar i alla län mellan år 2012-2022 

const urlSCB = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/FordonTrafik";


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
      label: "",
      data,
      fill: false,
      borderWidth: 2,
      borderColor: "#40A2E3",
      backgroundColor: "#e8eef0",
      hoverBorderWidth: 4,
      tension: 0.5,
      barThickness: 20,
     
   }];


  new Chart(document.getElementById("myChart"), {
    type: "bar",
    data: {labels, datasets},
    options: {
      plugins: {
        legend: {
            display: false,
          
        }
      },
      scales: {
        y: {
            beginAtZero: true,
            min: 4000000,
            max: 5000000
        }
    }
    }
  });
}

  const request = new Request (urlSCB, {
    method: "POST",
    body: JSON.stringify(querySCB)
  });

  fetch (request)
  .then((response) => response.json())
  .then(printSCBChart);





//Graf- Hämtar data på mängden kolioxid för personbil mellan åren 2012 -2022

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
 
  function printSCBChart2(dataSCBkol){
    console.log(dataSCBkol)
    const years = dataSCBkol.data;
    const labels = years.map((year) => year.key[3]);
    console.log(labels);  
    const data = years.map((year) => year.values[0]);
    console.log(data);  
    console.log(years);
    

    const datasets = [
      {
        label: "",
        data,
        fill: false,
        borderWidth: 2,
        borderColor: ["#7cc18f"],
        backgroundColor: ["#e8eef0"],
        hoverBorderWidth: 4,
        tension: 0.5,
        radius: 5
      }
    
     

    ];
  
  
    new Chart(document.getElementById("myChart2"), {
      type: "bubble",
      data: {labels, datasets},
      options: {
        plugins: {
          legend: {
              display: false,
            
          }
        }
      }
    });
  }


const requestkol = new Request (urlkol, {
  method: "POST",
  body: JSON.stringify(querykol)
});

fetch (requestkol)
.then((response) => response.json())
.then(printSCBChart2);




