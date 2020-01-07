# burger

<h2>Project Name</h2>

King Burger

<h2>Concept</h2>

Burger — also known as King Burger — is a node.js application that utilizes express, express-handlebars and MySQL to produce a menu of burgers via user input

<h2>Project Overview</h2>

Using node.js, express, express-handlebars and MySQL, as well as ORM (object-relational mapping), King Burger will produce a menu of burgers via user input.

<h2>Process</h2>

When a user enters input into the text box and clicks submits, the information will be pushed through a series of methods to create an enter in MySQL. Please note that only the user input is needed to create the MySQL entry, as the there is default values. Then, using express-handlebars, the user's input is displayed on the front-end with a button that says "Let's Eat!" in the current orders section. If the user clicks the button, another series of methods will be triggered that converts the entry in MySQL "eaten" boolean column, which default value is false (0), to true (1). On the front end, the MySQL entry is then move from current orders to past orders (with a new button that gives the user a chance to reorder the same burger).

Please note that I also added modals for entertainment purpose for when a user submits their input. A series of three different memes will be displayed which featured Bon Qui Qui from the MadTV Skit King Burger. 

To ensure that no MySQL entry is left blank, I added validation to ensure that the user enters something into text box.

<h2>URL</h2>

http://bit.ly/2sGJGg9
