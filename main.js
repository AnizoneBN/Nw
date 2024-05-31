// Fetch the news data from the JSON file
fetch('/news.json')
    .then(response => response.json())
    .then(data => displayNews(data));

// Function to display news items
function displayNews(newsItems) {
    const newsContainer = document.getElementById('news-container');
    newsItems.forEach(item => {
        const newsElement = document.createElement('div');
        newsElement.className = 'news-item';

        const titleElement = document.createElement('h2');
        titleElement.className = 'news-title';
        titleElement.textContent = item.title;

        const dateElement = document.createElement('p');
        dateElement.className = 'news-date';
        dateElement.textContent = new Date(item.date).toLocaleDateString();

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'news-description';
        descriptionElement.textContent = item.description;

        newsElement.appendChild(titleElement);
        newsElement.appendChild(dateElement);
        newsElement.appendChild(descriptionElement);
        newsContainer.appendChild(newsElement);
    });
}