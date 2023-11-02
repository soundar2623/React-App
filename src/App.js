
import React from 'react';
import './components/A.css';
import './components/Search.js';
function App() { 
	return ( 
		<div> 
      <header className="header">
        <p className="text-header">
          THE MIDNIGHT LIBRARY
        </p>
		</header>
		<body className='bo'>
			<nav class="navbar background"> 
				<ul class="nav-list"> 
					<div class="logo"> 
					</div> 
					<li><a href="#courses">Courses</a></li> 
					<li><a href="#tutorials">Tutorials</a></li> 
					<li><a href="#jobs">Jobs</a></li> 
					<li><a href='#student'>Student</a></li> 
				</ul> 
				<script />

        
        
				<div class="rightNav"> 
					<input type="text" name="search" id="search" />
				</div> 
			</nav> 
			
			
				
			
			<section class="section"> 
				<div class="box-main"> 
					<div class="firstHalf"> 
						<h1 class="text-big"> 
							
						</h1> 
						<p class="text-small"> 
							
						</p> 
					</div> 
				</div> 
			</section> 
			<section class="section"> 
				<div class="box-main"> 
					<div class="secondHalf"> 
						<h1 class="text-big" id="program"> 
							JavaScript Tutorial 
						</h1> 
						<p class="text-small"> 
							 JavaScript is the world most popular 
							lightweight, interpreted compiled 
							programming language.  
              It is also 
							known as scripting language for
							web pages. 
               It is well-known for
							the development of web page many 
							non-browser environments also use 
							it. . 
						</p> 
					</div> 
				</div> 
			</section> 
			<section class="section"> 
				<div class="box-main"> 
					<div class="secondHalf"> 
						<h1 class="text-big" id="program"> 
							Java Programming Language 
						</h1> 
						<p class="text-small"> 
							When compared with C++, Java codes 
							are generally more maintainable 
							because Java does not allow many 
							things which may lead to 
							bad/inefficient programming if used 
							incorrectly. For example, 
							non-primitives are always references 
							in Java.
						</p>
					</div> 
				</div> 
			</section> 
			<section class="section"> 
				<div class="box-main"> 
					<div class="secondHalf"> 
						<h1 class="text-big" id="program"> 
							What is Machine Learning? 
						</h1> 
						<p class="text-small"> 
							Machine Learning is the field of study 
							that gives computers the capability to 
							learn without being explicitly 
							programmed. ML is one of the most exciting 
							technologies that one would have ever 
							come across. The ability 
							to learn. Machine learning is actively 
							being used today, perhaps in many more 
							places than one would expect. 
						</p> 
					</div> 
				</div> 
        
			</section> 
			</body>
      
			<footer className="footer"> 
				<p className="text-footer"> 
        ANY TIME LEARNING
				</p> 
			</footer> 
		</div> 
	) 
} 

export default App ;



