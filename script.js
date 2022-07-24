const srChats = new Chart(document.getElementById('srChats'), {
    type: 'pie',
    data: {
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ]
        }]
    }
})

const ssChats = new Chart(document.getElementById('ssChats'), {
    type: 'pie',
    data: {
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ]
        }]
    }
})

const urChats = new Chart(document.getElementById('urChats'), {
    type: 'pie',
    data: {
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ]
        }]
    }
})

const usChats = new Chart(document.getElementById('usChats'), {
    type: 'pie',
    data: {
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)'
            ]
        }]
    }
})

function processJSON() {
    var file = document.getElementById('file').files[0]
    var reader = new FileReader()
    reader.addEventListener('load', (event) => {
        updateCharts(reader.result, srChats, 'Received Saved Chat History', 'From')
        updateCharts(reader.result, ssChats, 'Sent Saved Chat History', 'To')
        updateCharts(reader.result, urChats, 'Received Unsaved Chat History', 'From')
        updateCharts(reader.result, usChats, 'Sent Unsaved Chat History', 'To')
    })
    reader.readAsText(file)
}

function updateCharts(json, chart, dataTopKey, dataKey) {
    // parse and filter
    var parsed = JSON.parse(json)[dataTopKey]

    // gather data
    var data = {}
    for (var i = 0; i < parsed.length; i++) {
        if (!data[parsed[i][dataKey]]) {
            data[parsed[i][dataKey]] = 1
        } else {
            data[parsed[i][dataKey]]++
        }
    }

    // sort and display
    var sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a])
    var sortedValues = sortedKeys.map(key => data[key])
    console.log(sortedKeys)
    chart.data.labels = sortedKeys
    chart.data.datasets[0].data = sortedValues
    chart.update()
}

