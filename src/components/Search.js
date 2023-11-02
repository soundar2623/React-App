import React from 'react'
import { Link } from 'react-router-dom';
import './components/A.css';
function components(){
	return(
		<div class="rightNav"> 

			<Link to="https://freecomputerbooks.com/top-java-books.html"></Link>
			<button onClick="welcome()">Search</button> 

		</div>
	)

}

export default components;

