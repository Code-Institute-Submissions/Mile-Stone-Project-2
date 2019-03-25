
# Mile Stone  Project 2.
## Data dash Board.
### "Scarbrough Taps beer stats and facts."

<a href="top"></a>

*Links to both the live website and GitHub repository.*
- <a href="https://twdstudent.github.io/Mile-Stone-Project-2/">Link to live website.</a>
- <a href="https://github.com/twdstudent/Mile-Stone-Project-2">Link to GitHub Repository.</a>

#### The Brief:
Build a data dashboard that visualizes a dataset of your choice
Your data can be stored locally (e.g., in a js file) or sourced from an API
Visualise your data using D3.js and dc.js

#### Wire Frames:
Wire frames are in the folder name "wire-frames", located within the assets directory.

### Frame Works Used:
*jQuery* was used, I downloaded jQuery 3.2.1 via the command line and saved said file in
assets/js/jquery-3.2.1.js. Used very little of jQuery in this project, in fact was only used
in the *brewery-directory.html* for the drop boxes to which contained the brewery information.
reason for doing this was to make this page more viually pleasing, only displaying the title of 
the brewery.

*Bootstrap* mainly used for the grid system and the navbar layout, in the spirit of responsive 
design the navbar collapses into the "burger icon" when on smaller devices such as phones and tablets.
Bootstrap connected using their cdn (both css and JavaScript.) and is linked at the top of every page.
Version 3.3.7 was used.

*d3.js*, a JavaScript library for manipulating documents based on data (D3 = Data Driven Documents).

*cross-filter.js* was used as it enables the charts to be interactive and interdependent on the same 
dataset.
So if a user clicked on a particular chart in the dashboard, the other charts, which are bound 
to the same body of data, can react to that click.
This also applies to the selection boxes at the top of the page, you can filter all 3 of the slection boxes 
and the charts will render data applicable to the users selection.

*dc.js (Dimensional Charting)* library was used as it provides prebuilt charts types for D3. As you'll see in 
my site I used bar charts and a pie chart.

*D3, cross-filter and DC are connected using their cdn and have to be linked in a particular order.*
*First script is D3, second script, Crossfilter and third DC.* 
*This is because DC depends on Crossfilter and they both depend on D3*

*queue* was used as im binding to a external data source ("project-two-data.csv", located in the "data" directory.).
This is usefull as the dash board wont render until the data is availbale and
allows you to defer callng a function until the data is availbale.

### JavaScript:
*js* folder is located withing the assets folder, in there you have to jQuery dowload,
"graph-scripts-1.js" (this is where the code for the charts is) and scripts.js (where the 
code for the random fact generator and jQuery code for the drop down boxes is located).
In the fact generator the facts them selves ar assigned to a variable and the 

function beerFact() {
		var randomBeerFact = Math.floor(Math.random() * (beerfact.length - 1));
		document.getElementById('fact-here').innerHTML = beerfact[randomBeerFact];
	}

is called.

### CSS:
Located in *assets/css/style.css*, miner work was done here, mainly used css to change pre-existing styles built in
Bootstrap and D3. Media quieries located at the bottom of the file added again in the spirit of responsive
design.

### The Data:
So the first real hurdle I faced was actually getting the data!
My orginal plan (as you'll see from my wire frames) was to use sales of beer through out Europe, how ever,
getting said data quite litterally would have cost me a small fortune so I had to make a slight change.
Now its based on sales data form the pub I work at in Leeds (UK) called "The Scarbrough Hotel".
The data was pulled together via an excel spreadsheet and then converted to a csv file to which was then loaded
up to cloud 9.
<a href="#top">Back to Top</a>

### GitHub:
This project is backed up to GitHub, *links are at the top of this file*.
The github repo was created via the command line, starting with a *git init*,
then on git hub creating a new repository and then using the command line to push the 
proejct through. The command used was;
	 *$ git remote add origin https://github.com/twdstudent/Mile-Stone-Project-2.git*
In total there has been 17 commits. (not including the final commit before I submit.).
The commits are as follows;
1) initial commit.
2) finalised nav bar and uploaded data for dash board.
3) uploaded data.
4) added coding for first graph.
5) more work on graphs.
6) working on JS. 
7) latest version for tutorial.
8) uploaded new data and render graphs with success.
9) added pie chart.
10) got select brewery graph working and added to brewery directory.
11) adding random fact generator.
12) added drop down boxes for directory using jquery.
13) more work on css for directory page.
14) more work on directory and media quieries.
15) added elastic attribute to bar graphs.
16) tidying up alignment of graphs.
17) more tweeks with css for selection box alignment.

<a href="#top">Back to Top</a>