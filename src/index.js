import "./main.scss";
import JobsApi from './service/JobsApi.services';

/*
const url = 'https://raw.githubusercontent.com/ahmedachora10/web-scraping/main/data/keywords.json';
const ctx = document.querySelector('#keywords-chart').getContext('2d');

const chart = (ctx, data) => {
    const content = {
        labels: data.keywords,
        datasets: [{
            label: 'Famous KeyWords',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data.numbers
        }]
    };

    const myBarChart = new Chart(ctx, {
        type: 'bar',
        data: content,
        options: {}
    });
}

const jobs = new JobsApi(url);

jobs.get().then(res => chart(ctx, res));

jobs.specialKeywords();
*/