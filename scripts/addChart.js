; (function () {
  let chart;

  const last30Days = new Date();
  last30Days.setDate(last30Days.getDate() - 30);
  let currentDate = new Date();

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  const validateDates = () => {
    const toDate = new Date(document.querySelector("input[id='toDate']").valueAsDate);
    const fromDate = new Date(document.querySelector("input[id='fromDate']").valueAsDate);
    const currentDate = new Date();
    if (toDate > currentDate) {
      document.querySelector("input[id='toDate']").valueAsDate = currentDate
    } else if (fromDate > currentDate) {
      document.querySelector("input[id='fromDate']").valueAsDate = new Date(toDate.setMonth(toDate.getMonth() - 1))
    } else if (toDate < fromDate) {
      document.querySelector("input[id='toDate']").valueAsDate = new Date(fromDate.setMonth(fromDate.getMonth() + 1))
    }

  }

  const fetchData = async (startTime, endTime) => {
    const currentUrl = window.location.href.match(/:\/\/([^?]*)/).pop();
    const id = currentUrl.split('/')[3];
    // const dataURL = `http://localhost:5000/timeseries/getProductInfo`;
    const dataURL = `https://licenses.sceptermarketing.com/timeseries/getProductInfo`;
    const response = await fetch(dataURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        startTime,
        endTime
      })
    })
    const records = await response.json();
    return records;
  }

  // const addToCart = async (body) => {
  //   const response =
  //     await fetch({
  //       method: 'post',
  //       url: 'https://www.walmart.com/api/v3/cart/:CRT/items',
  //       headers: {
  //         "authority": "www.walmart.com",
  //         "accept": "application/json",
  //         "content-type": "application/json",
  //         "origin": window.location.href,
  //         "sec-fetch-site": "same-origin",
  //         "sec-fetch-mode": "cors",
  //         "sec-fetch-dest": "empty",
  //         "referer": window.location.href,
  //         "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
  //         "cookie": document.cookie
  //       },
  //       data: {
  //         body
  //       }
  //     })
  //   return response;
  // }

  //code just for testing have to remove after adding orignal data
  // const seriesTestData = [
  //   [1629682184000, 99],
  //   [1629766243000, 99],
  //   [1629905084000, 96],
  //   [1629913910000, 96],
  //   [1629926432000, 99],
  //   [1629937297000, 99],
  //   [1629987740000, 94],
  //   [1630023680000, 94]]

  const setChart = () => {
    return Highcharts.stockChart('container', {

      chart: {
        renderTo: 'container',
        type: 'spline'
      },

      xAxis: {
        minRange: 3600 * 1000
      },

      yAxis: {
        title: {
          text: '$ Price'
        }
      },

      rangeSelector: {
        buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
        }, {
          type: 'day',
          count: 1,
          text: '1d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'year',
          count: 1,
          text: '1y'
        }, {
          type: 'all',
          text: 'All'
        }],
        inputEnabled: false,
        selected: 4 // all
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },

      exporting: {
        enabled: false
      },

      plotOptions: {
        area: {
          lineWidth: 1,
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: true,
                radius: 5
              }
            }
          },
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          }
        },
        series: {
          label: {
            formatter: () => {
              return Highcharts.dateFormat('%Y/%m/%d', this.value);
            }
          },
        },
        dataGrouping: {
          enabled: false
        }
      },
      navigator: {
        enabled: false
      },

      series: [{
        name: 'Price',
        type: "line",
        data: []
      },
      {
        name: 'Walmart',
        type: "area",
        lineColor: 'blue',
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, 'rgba(2,0,0,0)']
          ]
        },
        data: []
      },
      {
        name: '3rdPartyFBM',
        type: "line",
        data: [],
        color: 'green',
        visible: false
      },
      {
        name: '3rdPartyWFS',
        type: "line",
        data: [],
        color: 'red',
        visible: false
      },

      ],

      credits: {
        enabled: false,
        href: 'www.sceptermarketing.com'
      },

      tooltip: {
        pointFormat: '{series.name}: <b>{point.y:.2f}</b><br/>',
      },

      responsive: {
        rules: [{
          condition: {
            maxWidth: 1000
          },
          chartOptions: {
            legend: {
              enabled: true,
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }

    });

  }

  const setChartData = (data, type) => {
    if (data.length > 0) {

      if (type == 'walmartPrice') chart.series[1].setData(data);
      else if (type == 'thirdPartyFBM') chart.series[2].setData(data);
      else if (type == 'thirdPartyWFS') chart.series[3].setData(data);
      else chart.series[0].setData(data);
      chart.hideLoading();
    } else {
      chart.series[0].setData([]);
      chart.showLoading('No data found!')
    }
    chart.redraw();
  }

  const openTab = (evt, dataName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dataName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const addChartNode = async () => {
    // VIEWER AREA
    const extensionDiv = document.createElement('div');
    extensionDiv.id = 'extensionDiv';
    const tabDiv = document.createElement('div');
    tabDiv.id = 'tabDiv';
    tabDiv.className = 'tab';
    tabDiv.innerHTML = `<button class="tablinks" value="priceHistory">Price History</button>
  <button class="tablinks" value="wfs">WFS</button>
`

    extensionDiv.append(tabDiv);
    const brandNode = document.querySelector("div[class='flex flex-row items-center justify-center']");
    const figure = document.createElement('figure');
    figure.id = 'extensionChart';
    figure.className = "highcharts-figure";
    figure.innerHTML = `
  <input type="date" id="fromDate" style="font-size: small";> ->
  <input type="date" id="toDate" style="font-size: small">
  <button id='filter' style="font-size: small">Filter Now</button>
  <div id="container"></div>
  `

    const priceHistory = document.createElement('div');
    priceHistory.className = 'tabcontent';
    priceHistory.id = 'priceHistory';
    extensionDiv.append(priceHistory);

    const offers = document.createElement('div');
    offers.className = 'tabcontent';
    offers.id = 'offers';
    offers.innerHTML = `<table>
  <tr>
    <th>No.</th>
    <th>Price</th>
    <th>Stock</th>
    <th>Max Order Limit</th>
  </tr>
  </table>`
    extensionDiv.append(offers);

    const wfs = document.createElement('div');
    wfs.className = 'tabcontent';
    wfs.id = 'wfs';
    wfs.innerHTML = `<div class="tab-content">
  <div style="line-height: 1.75em;">
      <p style="margin-top: 0;"> <a href="https://chrome.google.com/webstore/detail/walmart-wfs-profit-calcul/boecmgggeigllcdocgioijmleimjbfkg" target="_blank" title="" rel="noopener">Walmart WFS Calculator</a> - Calculating Walmart Fulfilment Fee on the go to make product research faster and easier. </p>
  </div>`

    extensionDiv.append(wfs);

    priceHistory.append(figure);
    insertAfter(brandNode, extensionDiv);

    // CHART CREATION 
    chart = setChart();

    document.querySelector("input[id='fromDate']").valueAsDate = last30Days;
    document.querySelector("input[id='toDate']").valueAsDate = currentDate;

    //FETCHING AND SETTING DATA
    const seriesData = await fetchData(last30Days, currentDate);
    const price = await setData(seriesData, 'price');
    setChartData(price, 'price');
    const thirdPartyFBM = await setData(seriesData, 'thirdPartyFBM');
    setChartData(thirdPartyFBM, 'thirdPartyFBM');
    const thirdPartyWFS = await setData(seriesData, 'thirdPartyWFS');
    setChartData(thirdPartyWFS, 'thirdPartyWFS');
    const walmartPrice = await setData(seriesData, 'walmartPrice');
    setChartData(walmartPrice, 'walmartPrice');


    //SETTING EVENT LISTENERS
    document.querySelector("button[id='filter']").addEventListener('click', async () => {
      const startTime = document.querySelector("input[id='fromDate']").valueAsDate.getTime();
      const endTime = document.querySelector("input[id='toDate']").valueAsDate.getTime();
      const seriesData = await fetchData(startTime, endTime);

      const price = await setData(seriesData, 'price');
      setChartData(price, 'price');
      const thirdPartyFBM = await setData(seriesData, 'thirdPartyFBM');
      setChartData(thirdPartyFBM, 'thirdPartyFBM');
      const thirdPartyWFS = await setData(seriesData, 'thirdPartyWFS');
      setChartData(thirdPartyWFS, 'thirdPartyWFS');
      const walmartPrice = await setData(seriesData, 'walmartPrice');
      setChartData(walmartPrice, 'walmartPrice');
    })

    document.querySelector("button[value='priceHistory']").addEventListener('click', async (e) => {
      openTab(e, e.target.value);
    })

    document.querySelector("button[value='wfs']").addEventListener('click', async (e) => {
      openTab(e, e.target.value);
    })

    // document.querySelector("button[value='offers']").addEventListener('click', async (e) => {
    //   openTab(e, e.target.value);
    // })

    document.querySelector("input[id='toDate']").addEventListener('change', async (e) => {
      await validateDates();
    }, false)

    document.querySelector("input[id='fromDate']").addEventListener('change', async () => {
      await validateDates();
    }, false)

    document.querySelector("button[value='priceHistory']").click();

  };

  const addDemoChartNode = async () => {
    // VIEWER AREA
    const extensionDiv = document.createElement('div');
    extensionDiv.id = 'extensionDiv';
    const message = document.createElement('span');
    message.className = "text";
    message.innerHTML = `Want access to historical data? Click <a href="https://www.wmsellertools.com/home16086390592251616502129581" target="_blank"> here </a> to upgrade your license`

    extensionDiv.append(message);
    const brandNode = document.querySelector("div[class='flex flex-row items-center justify-center']");
    const figure = document.createElement('figure');
    figure.id = 'extensionChart';
    figure.className = "highcharts-figure blur";
    figure.innerHTML = `
  <input disabled=true type="date" id="fromDate" style="font-size: small";> ->
  <input disabled=true type="date" id="toDate" style="font-size: small">
  <button disabled=true id='filter' style="font-size: small">Filter Now</button>
  <div disabled=true className="blur" id="container"></div>
  `

    const priceHistory = document.createElement('div');
    priceHistory.id = 'priceHistory';
    extensionDiv.append(priceHistory);

    priceHistory.append(figure);
    insertAfter(brandNode, extensionDiv);

    // CHART CREATION 
    chart = setChart();
    const price = [
      [1629682184000, 99],
      [1629766243000, 99],
      [1629905084000, 96],
      [1629913910000, 96],
      [1629926432000, 99],
      [1629937297000, 99],
      [1629987740000, 94],
      [1630023680000, 94]]
    setChartData(price, 'price');

    const walmartPrice = [
      [1629682184000, 60],
      [1629766243000, 64],
      [1629905084000, 62],
      [1629913910000, 0],
      [1629926432000, 63],
      [1629937297000, 63],
      [1629987740000, 68],
      [1630023680000, 68]]
    setChartData(walmartPrice, 'walmartPrice');
  };

  const setData = (data, type) => {
    const records = [];
    if (type == 'walmartPrice') {
      data.forEach(element => {
        records.push([new Date(element.time).getTime(), element.walmartPrice]);
      });
    } else if (type == 'thirdPartyFBM') {
      data.forEach(element => {
        records.push([new Date(element.time).getTime(), element.thirdPartyFBM]);
      });
    } else if (type == 'thirdPartyWFS') {
      data.forEach(element => {
        records.push([new Date(element.time).getTime(), element.thirdPartyWFS]);
      });
    } else {
      data.forEach(element => {
        records.push([new Date(element.time).getTime(), element.price]);
      });
    }
    return records;
  }

  chrome.storage.local.get(['settingsData'], CS => {
    if (CS.settingsData.viewChart) {
      const currentUrl = window.location.href.match(/:\/\/([^?]*)/).pop();
      window.activeUrl = currentUrl;
      const extensionChart = document.querySelector('div[id="extensionDiv"]');
      if (extensionChart) {
        extensionChart.remove();
      }
      if (!document.querySelector(`div[id="extensionDiv"]`) && currentUrl.includes("ip/")) {
        const interval = setInterval(() => {
          if (document.querySelector("div[class='flex flex-row items-center justify-center']")) {
            clearInterval(interval);
            addChartNode();
          }
        }, 100);
      }
    } else addDemoChartNode();
  })
})();