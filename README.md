## Presentation - Case Study

<h1>Djob App</h1>

<p>For this project I had to fetch an API and display the data.</p>

<p> 🔺 If you need to use the repository you have to do some command to set up the project !</p>

<p> 📁 Clone the repository: "git clone git@github.com:Dezau1995/djob-app.git"</p>

<p> 🖍️ Do the following command to access the folder of the project: "cd djob-app" </p>

<p> 📌 Don't forget to do "npm install"</p>

<p> 📍 And do "npm run dev" to start the project.</p>

<h2>Instruction</h2>

<p>I had to create a react application that displays these informations, based on the following apis. Here the link : <a href="https://jsonplaceholder.typicode.com/" target="_blank">https://jsonplaceholder.typicode.com/</a></p>

<p>For the project, the main fetched data are managed in the Router.jsx file</p>

<p>For the details of the fetched data, they are managed on each page. I used them to get some specified data, for example to navigate to each page.</p>

<h3>User list page:</h3>
<p>A table listing users with the following columns</p>

<p>In the folder UserList</p>
<p>Here I fetched and filter the data to get the number of todos and the number of albums from each users.</p>
<p>I had to map the users data to display their details</p>
<p>On the users name I created a handleClick function to navigate to the user profile page.</p>

<ul>
<li>Username: clickable brings up the user file</li>
<li>Email</li>
<li>Website: clickable opens in another tab/windows</li>
<li>Name of the compagny</li>
<li>The number of todos of the user</li>
<li>Number of user's albums</li>
</ul>

<h3>User profile page:</h3>
<p>A presentation of user data</p>

<p>In the folder UserProfile</p>

<ul>
<li>Name</li>
<li>Username</li>
<li>Email</li>
<li>Name of the compagny</li>
<li>The list of the user's albums: each album is clickable and leads to the album page</li>
<li>A link takes you back to the user list</li>
</ul>

<h3>Presentation of a photo album page:</h3>
<p>The album page features:</p>

<p>In the folder AlbumPage</p>

<ul>
<li>Album title</li>
<li>The thumbs of the photos contained in the album</li>
<li>A link takes you back to the user's file.</li>
</ul>

<p>I had some issues to display the album's photos, because the api doesn't return them all . Sometimes the photos appear and sometimes they don't.</p>
