document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('captcha');
  

  // Make a request to the login endpoint using Axios
  axios.get('http://195.154.196.255/capgrid', {
    headers: {
      Authorization: 'Bearer 123',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      // Handle the response from the server
      if (response.status === 200) {
        // Update the content of the "content" div with the fetched data
        contentDiv.innerHTML = response.data;
      } else {
        throw new Error('Failed to fetch data');
      }
    })
    
});