// your code here
let form = document.getElementById('myForm');
let h3 = document.getElementById('url');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let input1 = document.getElementById('name').value.trim();
	let input2 = document.getElementById('year').value.trim();
	
	const baseURL = 'https://localhost:8080/';
	const query = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
	h3.textContent = baseURL + query; 
	
});