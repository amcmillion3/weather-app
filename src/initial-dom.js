const initialDomLoad = () => {
    const body = document.getElementById('content');

    const createHeader = (() => {
        const element = document.createElement('header');
        element.id = 'header';
        element.textContent = 'Weather App!'
        body.appendChild(element);
    })();

    const display = (() => {
        const element = document.createElement('div');
        element.id = 'weather-display';
        body.appendChild(element);
    })();

    const createSearchForm = (() => {
        const element = document.createElement('form');
        element.id = 'search-form';
        body.appendChild(element);
    })();

    const searchForm = document.getElementById('search-form');

    const searchFormElements = (() => {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'search-input';
        input.name = 'search-form-input';
        input.placeholder = 'Please enter a city!';
        searchForm.appendChild(input);

        const searchButton = document.createElement('button');
        searchButton.id = 'search-button';
        searchButton.type = 'submit';
        searchButton.textContent = 'Search';
        searchForm.appendChild(searchButton);
    })();
};

export {initialDomLoad};