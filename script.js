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
    const years = dataSCB.data;
    const labels = years.map((year) => year.key[1]);
    console.log(labels);  
    const data = years.map((year) => year.values[0]);
    console.log(data);  

  

  const datasets = [
    {
      label: "Antal personbilar i alla län i Sverige mellan år 2012-2022",
      data,
      fill: false,
      borderWidth: 2,
      borderColor: "hsla(250, 100%, 30%, 1)",
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



//Hämtar data på hur många som åkte personbil i alla län år 2022
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
            "2022"
          ]
        }
      }
    ],
    "response": {
      "format": "JSON"
    }
  };

  function printSCBChart2(dataSCB2022){
    const years = dataSCB2022.data;
    const labels = years.map((year) => year.key[1]);
    console.log(labels);  
    const data = years.map((year) => year.values[0]);
    console.log(data);  

    const datasets = [
      {
        label: "Antal personbilar i alla län i Sverige år 2022",
        data,
        fill: false,
        borderWidth: 2,
        borderColor: "hsla(250, 100%, 30%, 1)",
        hoverBorderWidth: 4,
        tension: 0.5
        
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


//Hämtar data på hur många som åkte personbil i alla län år 2012

const url2012= "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/FordonTrafik";

const query2012 = {
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
            "2012"
          ]
        }
      }
    ],
    "response": {
      "format": "JSON"
    }
  }

  const request2012 = new Request (urlSCB, {
    method: "POST",
    body: JSON.stringify(query2012)
  });

  fetch (request2012)
  .then((response) => response.json())
  .then((persdata2) => {
    console.log(persdata2);

}); 


//Hämtar data på kolioxid för personbil mellan åren 2012 -2022

const urlkol = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/MI/MI0107/MI0107InTranspNN";

const querykol = {
    "query": [
        {
          code: "Vaxthusgaser",
          selection: {
            filter: "item",
            values: [
              "CO2-ekv."
            ]
          }
        },
        {
          code: "Transportslag",
          selection: {
            filter: "item",
            values: [
              "8.5.1"
            ]
          }
        },
        {
          code: "Bransleslag",
          selection: {
            filter: "item",
            values: [
              "1",
              "3",
              "4",
              "5",
              "6"
            ]
          }
        },
        {
          code: "Tid",
          selection: {
            filter: "item",
            values: [
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
  


const requestkol = new Request (urlkol, {
  method: "POST",
  body: JSON.stringify(querykol)
});

fetch (requestkol)
.then((response) => response.json())
.then((koldata) => {
  console.log(koldata);

});




