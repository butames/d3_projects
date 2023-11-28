//Define Data We Want

const data = [

    {
        name: "Simon",
        score: 80
    },
    {
        name: "Abena",
        score: 90
    },
    {
        name: "Amy",
        score: 60
    },
    {
        name: "Komla",
        score: 40
    },
    {
        name: "Adoma",
        score: 89
    },
    {
        name: "Philip",
        score: 79
    },
    {
        name: "Maa-Abena",
        score: 47
    }
];

//Create SVG element that holds the chart

const width = 800;
const height = 400;
const margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
};

const svg = d3.select('#d3cont')
    .append('svg')
    .attr('height', height - margin.top - margin.bottom)
    .attr('width', width - margin.left - margin.right)
    .attr('viewBox', [0, 0, width, height]);

//Define Scale for X and Y axes

const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0, 1);

const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top]);

svg
    .append("g")
    .attr("fill", "royalblue")
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.score, b.score)))
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", (d) => y(d.score))
    .attr("height", d => y(0) - y(d.score))
    .attr("width", x.bandwidth()/1.05);

function xAxis(g){
    g.call(d3.axisBottom(x).tickFormat(i => data[i].name));
}

function yAxis(g){
}

//Draw the Bars in the Chart
svg.append("g").call(xAxis);
svg.node();
