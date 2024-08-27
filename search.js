document.addEventListener('DOMContentLoaded', function() {
    // Load JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const searchInput = document.getElementById('searchInput');
            const results = document.getElementById('results');

            // Filter and display results
            searchInput.addEventListener('input', function() {
                const query = searchInput.value.toLowerCase();
                results.innerHTML = '';

                const filteredData = data.filter(item => {
                    return item.name.toLowerCase().includes(query) ||
                           item.description.toLowerCase().includes(query) ||
                           item.category.toLowerCase().includes(query);
                });

                filteredData.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `${item.name}: ${item.description} (${item.category})`;
                    results.appendChild(li);
                });

                if (filteredData.length === 0) {
                    results.innerHTML = '<li>No results found</li>';
                }
            });
        });
});

