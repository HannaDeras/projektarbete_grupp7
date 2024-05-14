const urlSCB = "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/FordonTrafik";


// Knapp som tar användaren tillbaka till toppen
let mybutton = document.getElementById("myBtn");

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
      label: "Antal personbilar",
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
        label: "Antal personbilar",
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
        label: "Totala mängden växthusgas",
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
      label: "Totala mängden växthusgas",
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


//test med två dataset

const urlSCB5 = 'https://api.scb.se/OV0104/v1/doris/sv/ssd/START/TK/TK1001/TK1001A/FordonTrafik';

const querySCB5 = {
  "query": [
    {
      "code": "Region",
      "selection": {
        "filter": "item",
        "values": [
          "01",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
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

function printSCBChart5(dataSCB5) {
  //kontrollera datasetet
  console.log(dataSCB5);

  //hämta alla labels - enligt scb:s format (som inte ännu passar oss)
 const labelsRaw = dataSCB5.data.map((data) => data.key[2]);
  console.log(labelsRaw);
  //hämta alla värden - enligt scb:s format (som inte ännu passar oss)
  const valuesRaw = dataSCB5.data.map((data) => data.values[0]);
  console.log(valuesRaw);
  //göra alla labels unika
  const labels = [...new Set(labelsRaw)];
  console.log(labels);
  //dela värdena så att hälften hör till Borlänge och resten till Falun.
  const dataStockholm = valuesRaw.splice(0, labels.length);
  const dataDalarna = valuesRaw.splice(0, labels.length);
  const dataKalmar = valuesRaw.splice(0, labels.length);
  const dataVästraGötaland = valuesRaw.splice(0, labels.length);
  const dataVästerbotten = valuesRaw.splice(0, labels.length);
  const dataNorrbotten = valuesRaw;

  console.log('Stockholms Län: ', dataStockholm, 'Dalarnas Län', dataDalarna, "Kalmar Län", dataKalmar,"Västra Götaland Län", dataVästraGötaland, "Västerbottens Län", dataVästerbotten, "Norrbottens Län", dataNorrbotten);

  //1 dataset per linje eller stapel per datapunkt vid x axeln.
  const datasets = [
    {
      label: 'Stockholms Län ',
      data: dataStockholm,
      fill: false,
      borderWidth: 2,
      hoverBorderWidth: 4,
      tension: 0.5
    },
    {
      label: 'Dalarnas Län',
      data: dataDalarna,
      fill: false,
      borderWidth: 2,
      hoverBorderWidth: 4,
      tension: 0.5,
    },
    {
      label: 'Kalmar Län ',
      data: dataKalmar,
      fill: false,
      borderWidth: 2,
      hoverBorderWidth: 4,
      tension: 0.5
    },

    {
      label: 'Västra götalands Län',
      data: dataVästraGötaland,
      fill: false,
      borderWidth: 2,
      hoverBorderWidth: 4,
      tension: 0.5
    },
    {
      label: 'Västerbottens Län ',
      data: dataVästerbotten,
      fill: false,
      borderWidth: 2,
      hoverBorderWidth: 4,
      tension: 0.5
    },
    {
      label: 'Norrbottens Län ',
      data: dataNorrbotten,
      fill: false,
      borderWidth: 2,
      hoverBorderWidth: 4,
      tension: 0.5
    }

  ];

  new Chart(document.getElementById('myChart5'), {
    type: 'bar',
    data: { labels, datasets }
  });
}

const request5 = new Request(urlSCB5, {
  method: 'POST',
  body: JSON.stringify(querySCB5)
});

fetch(request5)
  .then((response) => response.json())
  .then(printSCBChart5);


