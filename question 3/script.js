
    // Function to fetch data from the API
    function fetchData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log(error));
    }

    // Function to display the fetched data
    function displayData(data) {
      const container = document.getElementById('data-container');
      container.innerHTML = ''; // Clear previous content

      // Loop through each data item and create HTML elements
      data.forEach(item => {
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const body = document.createElement('p');

        // Set the content
        title.textContent = item.title;
        body.textContent = item.body;

        // Append the elements to the container
        div.appendChild(title);
        div.appendChild(body);
        container.appendChild(div);
      });
    }

    // Function to display the skeleton loader
    function displaySkeletonLoader() {
      const container = document.getElementById('data-container');
      container.innerHTML = ''; // Clear previous content

      // Create skeleton loader elements
      for (let i = 0; i < 5; i++) {
        const skeletonDiv = document.createElement('div');
        skeletonDiv.classList.add('skeleton', 'skeleton-loader');
        container.appendChild(skeletonDiv);
      }
    }

    // Fetch data and display the skeleton loader initially
    displaySkeletonLoader();
    fetchData();
