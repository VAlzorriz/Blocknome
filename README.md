# Blocknome

Develop from September 2019 to January 2020 in Milan, Italy.

## About:

Blocknome is a web interface design to allow the researches of the Genomic Research Team at the Politecnico di Milano to create GMQL queries without having any previous knowledge or experience with SQL, databases, or programming in general. Using the Blocknome interface the user can create GMQL queries by choosing and connecting blocks, allowing them to create complex queries easily and without any prior knowledge. The user can choose from a selection of predefine blocks to create a query:
- Dataset: to select the dataset from which to get the data for the query.
- Filter: the main building block of a query use to set up conditions and operations.
- Field / Value: to define query conditions having a specific Value the selected Field.
- Is / Higher than / Smaller than: the different operations available for a condition.
- And / Or: to define multiple conditions inside a query.
- Cover / Map: to define Cover and Map operations to the output of a query.
- Avg / Min / Max / As: the different operations available for the Map operation.
- Save: to define the URL to save the query.
The Blocknome interface is also designed to be as easy to use as possible for the user, using a color combination to deference the different blocks and give tips on how you can connect each block with others. The interface also has a window at the bottom to present hints and tutorial animations to help the user create queries. In case something is wrong with the query, the interface also gives feedback through error messages to help the user fix it.

## Team:

This project was developed by two other engineers, one designer and my self during the first semester of my year studing in the Politecnico di Milano.

## Development:

To design the Blocknome interface, first, the team had multiple meetings with a representative from the Genomic Research Team to have a clear vision of what the client wanted and what were their needs. Once the team agreed with the Genomic Research Team in a final design and a set of specification for the project the team started the development. First, the team had to choose a framework to work with, in this case the team choose Rete.js to create the blocks and the block workspace of the interface, using the feedback from the Genomic Research Team. Once the blocks were finish, we started to implement the logic on to them and create the method to generate the final queries based on the blocks and, its connections, that were placed in the workspace. Finally, we created and implemented the animations and tutorials that gives feedback to the user on how to use the interface.

## Languages and tools:

During the development of this project the following lenguages and tools were used:

- <img alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" /> HTML
- <img alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" /> CSS
- <img alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" /> JavaScript
- <img alt="Bootstrap" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png" /> Bootstrap
- <img alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" /> Node.js
- <img alt="Rete.js" width="26px" src="https://avatars1.githubusercontent.com/u/39779957?s=400&v=4" /> Rete.js


## Images of the proyect:

Main interface:

<img alt="Main Interface" width="650" src="/img/BlocknomeInterface.png"/>