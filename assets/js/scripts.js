	//below is code for random fact generator.
	var beerfact = []
	beerfact[0] = "beer makes me happy";
	beerfact[1] = "beer makes me wee a lot";
	beerfact[2] = "beer makes gives me a hangover";
	beerfact[3] = "beer is made with water hops barley and yeast";
	beerfact[4] = "hops are closely related to weed";
	beerfact[5] = "Beer is by far the most popular alcoholic drink in the world. In 2016, people consumed nearly 50 billion gallons of beer worldwide.";
	beerfact[6] = "Beer is as old as human history. Beer brewing and drinking predate written language.";
	beerfact[7] = "In 2017, the average U.S. citizen over 21 consumed 26.9 gallons of beer. However, the United States doesn't even make the top 10 in terms of overall beer drinking";
	beerfact[8] = "The Czech Republic consumes the most beer per capita of any country in the world, and China consumes the most overall";
	beerfact[9] = "The earliest evidence of beer making was found in western Iran, dating back to 3,500 BC.";
	beerfact[10] = "In 1983, there were 49 licensed breweries in the United States; by the end of 2017, there were 8,863.";
	beerfact[11] = "Ancient Sumerians made beer from bread and malt.";
	beerfact[12] = "As of 2017, California had by far the most breweries in the United States, with 1,106. Washington is a distant second with 499";
	beerfact[13] = "Far from being frowned on as a dangerous recreational drink, beer in the Middle Ages was a necessary part of people's diets.";
	beerfact[14] = "Though there are hundreds of styles of beer, they all fall into two basic categories: lagers and ales. They are differentiated according to how yeast ferments during the brewing process.";
	beerfact[15] = "An ancient Egyptian document lists 17 distinct types of beer, with names like 'joy-bringer' and 'heavenly'.";
	beerfact[16] = "In surveys and polls over the past two decades, American drinkers consistently choose beer as their favorite alcoholic beverage.";
	beerfact[17] = "In ancient Mesopotamia, beer was associated with religion and ritual and was believed to have magical powers.";
	beerfact[18] = "A government-funded organization in Amsterdam, the Rainbow Group, hires alcoholics to clean litter from city streets and pays them with beer.";
	beerfact[19] = "In 2001, some Belgian elementary schools began serving low-alcohol beer to schoolchildren at lunch as a healthier alternative to soda";
	beerfact[20] = "In 1963, Heineken developed beer bottles that could double as glass bricks to build houses. The goal was to eliminate waste and provide a cheap building material for low-income areas.";
	beerfact[22] = "McDonald's offers beer on its menu in many countries, including France, Germany, Portugal, and South Korea.";
	beerfact[23] = "In Medieval Europe, Catholic monks would often undergo 'beer fasts' during the forty days of Lent. They ate no food, getting calories only from beer, which they called 'liquid bread.'";
	beerfact[24] = "Brewing has been entirely transformed from the Middle Ages to the present. Where brewing was once done largely in homes and monasteries as a natural communal effort, it is now done by corporations with scientific oversight.";
	beerfact[25] = "French scientist Louis Pasteur wrote a book on the 'diseases' of beer and the causes of its spoilage.";
	beerfact[26] = "Aristotle claimed that drinkers of wine and other intoxicants fall in random directions, but beer drinkers always fall on their back.";
	beerfact[27] = "The Mesopotamian gods were said to have their own special brewers.";
	beerfact[28] = "Ninkasi was the Mesopotamian goddess of beer and was said to have taught the craft of brewing to human beings. Tenenet was the Egyptian goddess of beer as well as childbirth.";
	beerfact[29] = "Beer was so important in ancient Mesopotamia that there are legal strictures regarding its sale in the Code of Hammurabi.";
	beerfact[30] = "Ancient Egypt relied heavily on beer since it provided necessary vitamins and was generally cleaner and safer to drink than water from the Nile.";
	beerfact[31] = "Though more beer is brewed today than during the Middle Ages, average Europeans in Medieval times drank far more.";
	beerfact[32] = "Brewers began adding hops to beer in the 9th century AD. Today, nearly all beer is brewed with hops, which adds a zesty, bitter flavor to beer and acts as a preservative.";

	function beerFact() {
		var randomBeerFact = Math.floor(Math.random() * (beerfact.length));
		document.getElementById('fact-here').innerHTML = beerfact[randomBeerFact];
	}

	//below code for drop boxes for directory

	$(document).ready(function() {
            $('#brewery-info .head').click(function(e) {
                e.preventDefault();
                $(this).closest('li').find('.content').not(':animated').slideToggle();
            });
        });