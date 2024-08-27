document.addEventListener('DOMContentLoaded', function() {
    // Load JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const searchInput = document.getElementById('searchInput');
            const results = document.getElementById('results');
            const database = document.getElementById('database');

            // Function to display the entire database
            function displayDatabase() {
                database.innerHTML = ''; // Clear the database display
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `${item.name}: ${item.description} (${item.category})`;
                    database.appendChild(li);
                });
            }

            // Display the entire database on page load
            displayDatabase();

            // Filter and display search results
            searchInput.addEventListener('input', function() {
                const query = searchInput.value.toLowerCase();
                results.innerHTML = ''; // Clear the search results

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
