(function() {	
	
	// Mark the page so that the script only runs once
	var title = document.querySelectorAll("body")[0];
	if (title.getAttribute("id") != "btes")
		title.setAttribute("id","btes");
	else
		return false;
	
	// Populate these arrays from a server later

	// All users with DefaultTrust depth 1
	var defaulttrust1 = [];

	// All users with DefaultTrust depth 2
	var defaulttrust2 = [];
	
	// All users with legacy scammer tags
	var scammertags = ["dank","Nefario","Clipse","cablepair","PatrickHarnett","shakaru","chungenhung","bitlotto","pirateat40","ianbakewell","BTC guy","Aahzman","amazingrando","kr4x","FooDSt4mP","hashking","limitless","vdragon","R-","nckrazze","demonofelru","saudibull","Andrew Bitcoiner","Sjalq","Bind","Hollie","cryptoxchange","killer2021","newdude","TizzyTazzy","Snapman","Joshster","joeyjmr8484","AlternativeCypt","SHlFT","Stefanie Andrea","DoubleIcaras","wildemagic","lolcat","constitution","NINJA--","snedie","bitdaytrade","bitscalper","mu50stang","yacoin","jetset220","Leon","kingkatari","MartinReynolds","slammed","Juneteenth","Jermainé","brunoshady","Breen2543","Zem","SynOps","carebear","iamtheone","RyanWebber","gurg2.o","Bush","wong RAP","bayer","Icy-","pippipcheerio","HonorMe","kujoking7","epiks","mining4fun11","penetration","Bitcraft","laydum","mexxer","bombshelterzero","cardinalG","furrycoat","Gluskab","ThyDude","Clarithium","Xanax","SouthernComfort","borito4","Black_Star","RustyRyan","btcmank","Zombie","Globes","sylkyx","kidage","john_nalpa","Amanda","lxFlasHxl","Anonymouss","tmac667","loadrs2009","dareq","rothglobal","quartz92","Alwaysmining","Si Robertson","on9isrock","AaronBreillat","unkn0wn12","FocusMedia","illWill","TheLastDovah","DiamondPlus","Exo","caradenada","Intueri","AndrewJ","Pearikay","darvil","mini_lol","bitcoinhero","JCbit","MaxPumper","LionHeart","Bitzing","OMGBobMarley","ex0420","thebitbabe","Jimmysmith","tachi641","anonameous","CouragedOne","madload",".ME","HaRRo","siesatsu","TORwallet","turquoise9955","BTC4PPGBP","PPoweredP","Ryuguy","ChickaDee",".","Bitexchange","DrZaius","AreYouCereal","firstlady0524","mixmastermine","Meddol","bcjunkie","Julia Sanders","NoValues","etsanchez","Dakster","arobinson","dayasinfo","Alexsandr","boogiedown","MiddleMan","rodneycubed","BitCoinBoom","MikeT","MouseTrap","Randy","CNClove","Gabriellz9","boatedaces","008","satosamoto","foofight","Kz3ro","InterCoin","wjohnnyw","PayPal","vincentio","TigerGuy007","Lieutenant Dan","Powercoiner","moneypak","FastCoin","Diamond","CeltixBos","Raeldi","Aldun","btclaw","BTCMover","MoneypakBuyer","endercoin","happyworld3000","sellbitcoins","partyjumpyup","Tucker","Riddleman","zionist shill","moomerycreamery","ndawg4554","nckfor","daywalker","Linux","min0r","btcace","Oracle24","AshShep","thegogos","Darknesss","SellBitcoinsTo","crzr","CrowdCrackingGroup","diegospensi7","Lavada","hilarioprnce7","errtest","trusturtechnolust","Lang","bitcento","kellyhuta64","lolbillfrist","pooraich","jimmi12","iamstimpy","uAbbieBartonq","azerty6757","Miss_Magenta","emoryyrer96","Bitcoinmaker","pandapeluche","matthewdowns1128A1F5","conradinoz76","bitboy999","rockstarshorty21","cspalmer2","chevo","headhunter","KatiHahnA","sarajasie0C2C","bryankfurw05","brigitte2378sack","xerces","edwinaphan7","MSTRKRFT","williamsnider72","Sandragutierre24Y","jeraldftizt65","joan48ellis","cocopuffs1003","colliefan1","DigiZ","TheRonPaulKid","stevguthie7","fiveletterword","Exclusive","lfelicols12t","SusanaMenor23","ymfeeling","Robert William Bonzi","balmut051","carsonchassy5","UnKnOwNiSh","BTCPlay","terrence","IllBill","milardistone41","Lubaday","krypton85","susanakaul","iPhone.5","leahsandes","MellisaAnn","westcoastconnect","jjfarren","GammaRayCoin","millermint","BitcoinSolutions","ElectricBTC","Maddhatter","ScoobieDoo","SwimsuitPaul","cbuchnner1","Hellaphunt","John (John K) IMPERSONATOR","thecanadian420","cotoro","Zyzz","Randal112","fake_gwillen","Robert Fienstien","mikel123","Skyliner","RushBit","mgmtlol","HiddenTesoro","Z3R00","BitcoinSmarket","Maldun","SpeedGold","ExclusiveBTC","Plateen","BitcoinDoubleSpender","Elderal"];
	
	// All users on the SMAS blacklist
	var smasblacklisted = [];
	
	// Load this from storage later
	var important_threads = ["1820695"];
	
	var header = document.getElementById("variousheadlinks");
	var displayname = document.getElementById("hellomember").getElementsByTagName("b")[0].innerHTML;
	
	var infinity = 10^9; // close enough really
	
	// Add a link to the header that shows the user's latest posts
	header.getElementsByClassName("middletext")[0].getElementsByTagName("br")[1].insertAdjacentHTML("afterend","<a href=\"https://bitcointalk.org/index.php?action=profile;sa=showPosts\">Show your latest posts.</a><br/>");
	
	// Adjust the text of the header links to be more consistent with each other
	header.getElementsByClassName("middletext")[0].querySelectorAll("a").forEach(function(headerlink) {
		if (headerlink.innerHTML == "Show unread posts since last visit.") {
			headerlink.innerHTML = "Show threads with unread posts.";
		}
		if (headerlink.innerHTML == "Patrol") {
			headerlink.innerHTML = "Show recent posts patrol.";
		}
		if (headerlink.innerHTML == "Watchlist") {
			headerlink.innerHTML = "Show updated threads on your watchlist.";
		}
	});
	
	// Insert a window on the side of the header so that the user knows BTES is installed
	header.insertAdjacentHTML("afterend","<td class=\"windowbg\" style=\"text-align: center;\">BTES&nbsp;1.0.0<hr/><small><a>Thread</a><br/><a href=\"https://bitcointalk.org/index.php?action=profile;sa=theme;btes\">Settings</a></small></td>");
	
	// Loop through sidebars of posts to apply changes to them
	document.querySelectorAll(".poster_info").forEach(function(sidebar) {
		var user = sidebar.getElementsByTagName("b")[0].getElementsByTagName("a")[0].innerHTML;
		
		// Check if the user is a newbie (not jr. member!)
		var rank = sidebar.getElementsByTagName("div")[0].innerHTML.substr(0,15)
		if (rank.includes("Brand") || rank.includes("Newbie")) {
			// Delete the newbie's one gold coin (they'll only have one if they are a newbie)
			sidebar.getElementsByTagName("img")[0].parentNode.removeChild(sidebar.getElementsByTagName("img")[0]);
			
			// Insert a silver coin as a replacement
			sidebar.getElementsByTagName("br")[0].insertAdjacentHTML("afterend", "<img src=\""+chrome.extension.getURL("images/newbie.png")+"\" alt=\"*\" border=\"0\">");
		}
		
		// For copper members, change the color of the coins to look like they're copper
		var rank = sidebar.getElementsByTagName("div")[0].innerHTML.substr(0,15)
		if (rank.includes("Copper")) {
			var icons = sidebar.getElementsByTagName("img");
			for (var i = 0; i < icons.length; i++)
				if (icons.item(i).getAttribute("alt") == "*")
					if (icons.item(i).getAttribute("src").endsWith("star.gif"))
						icons.item(i).setAttribute("src",chrome.extension.getURL("images/copper.png"));
					else
						icons.item(i).setAttribute("src",chrome.extension.getURL("images/copper5.png"));
		}
		
		// Check if we should apply a blacklist tag
		if (smasblacklisted.includes(user)) {
			// Add a label to the tag
			sidebar.getElementsByTagName("div")[0].insertAdjacentHTML("afterbegin", "SMAS Blacklisted<br/>");
			
			// Remove the coin pips underneath the blacklisted's name
			for (var attempt = 0; attempt < 3; attempt++) { // Make 3 attempts (not all the pips are deleted on the first try for full and hero members for some reason)
				var icons = sidebar.getElementsByTagName("img");
				for (var i = 0; i < icons.length; i++)
					if (icons.item(i).getAttribute("alt") == "*")
						icons.item(i).parentNode.removeChild(icons.item(i));
			}
			
			// Insert the blacklist tag image (the five black X's)
			for (var i = 0; i < 5; i++)
				sidebar.getElementsByTagName("br")[1].insertAdjacentHTML("afterend", "<img src=\""+chrome.extension.getURL("images/blacklist.gif")+"\" alt=\"X\" border=\"0\">");
		}
		
		// Otherwise, check if we should apply a legacy scammer tag
		else if (scammertags.includes(user)) {
			// Put in the old "SCAMMER" title where it used to be
			sidebar.getElementsByTagName("div")[0].insertAdjacentHTML("afterbegin", "SCAMMER<br/>");
			
			// Remove the coin pips underneath the scammer's name
			for (var attempt = 0; attempt < 3; attempt++) { // Make 3 attempts (not all the pips are deleted on the first try for full and hero members for some reason)
				var icons = sidebar.getElementsByTagName("img");
				for (var i = 0; i < icons.length; i++)
					if (icons.item(i).className != "avatar") // Don't remove the avatar!
						icons.item(i).parentNode.removeChild(icons.item(i));
			}
			
			// Insert the scammer tag image (the five red X's)
			for (var i = 0; i < 5; i++)
				sidebar.getElementsByTagName("br")[1].insertAdjacentHTML("afterend", "<img src=\""+chrome.extension.getURL("images/scammer.gif")+"\" alt=\"X\" border=\"0\">");
		}
		
		// Add a DefaultTrust badge to DT1/2 users, on boards where trust scores are visible
		var dt_depth = infinity;
		if (defaulttrust2.includes(user)) dt_depth = 2;
		if (defaulttrust1.includes(user)) dt_depth = 1;
		if (dt_depth < infinity) {
			// Find the only trustscore div in the sidebar, if it exists
			sidebar.querySelectorAll(".trustscore").forEach(function(a) {
				if (a.getAttribute("style") == "color:#DC143C") // Red trust?
					a.insertAdjacentHTML("afterend","<b style=\"color: #DC143C;\" title=\"This user is in DefaultTrust depth " + dt_depth + ", but their feedback is not trusted because of their poor trust score.\"> <image src=\""+chrome.extension.getURL("images/defaulttrustred.png")+"\" style=\"width: 16px; position: relative; top: 4px; margin-right: 2px;\"><s>DT" + dt_depth + "</s></b>");
				else
					a.insertAdjacentHTML("afterend","<b style=\"color: #008000;\"> <image src=\""+chrome.extension.getURL("images/defaulttrust.png")+"\" style=\"width: 16px; position: relative; top: 4px; margin-right: 2px;\">DT" + dt_depth + "</b>");
			});
		}
	});
	
	// Loop through the posts themselves to make corrections
	document.querySelectorAll(".post").forEach(function(post) {
		post.innerHTML = post.innerHTML
		// In numbered lists with right parentheses after the numbers, 8) gets interpreted as the "cool" smiley and breaks the list, an error which posters rarely correct
			.replace(/(?<=1\).*<br>2\).*<br>3\).*<br>4\).*<br>5\).*<br>6\).*<br>7\).*<br>)<img src="https:\/\/bitcointalk\.org\/Smileys\/default\/cool\.gif" alt="Cool" border="0">/, "8)")
		// In very long strings of question marks, where the number of question marks is not divisible by 3, you get an ugly combination of question marks and confused smileys, so just replace with all question marks
			.replace(/(?<=\?(<img src="https:\/\/bitcointalk\.org\/Smileys\/default\/huh\.gif" alt="Huh" border="0">)*)<img src="https:\/\/bitcointalk\.org\/Smileys\/default\/huh\.gif" alt="Huh" border="0">/, "???");
	});
	
	// Loop through quotes in posts to highlight the ones quoting the user
	document.querySelectorAll(".quoteheader").forEach(function(quoteheader) {
		if (quoteheader.innerHTML.includes("Quote from: " + displayname + " on")) {
			quoteheader.getElementsByTagName("a")[0].setAttribute("style", "color: orange;");
			quoteheader.nextSibling.setAttribute("style", "border: 1px solid #f1d2be; background-color: #f9eee6;");
		}
	});
		
	// Delete the button to insert a flash video from the post editor - the feature is completely disabled on BitcoinTalk and is therefore useless
	document.querySelectorAll("[onclick=\"surroundText('[flash=200,200]', '[/flash]', document.forms.postmodify.message); return false;\"]").forEach(function(btn) {
		btn.parentNode.removeChild(btn);
	});
	
	// Insert new smileys!!!
	document.querySelectorAll("[onclick=\"replaceText(' :\\\\'(', document.forms.postmodify.message); return false;\"]").forEach(function(btn) {
		btn.insertAdjacentHTML("afterend", "<a href=\"javascript:void(0);\" onclick=\"replaceText(' [img]https://i.krist.club/0UaJ.png[/img]', document.forms.postmodify.message); return false;\"><img style=\"margin-left: 8px;\" src=\"https://i.krist.club/0UaJ.png\" align=\"bottom\" alt=\"Defeated\" title=\"Defeated\"></a>");
	});
	
	// Select the text box for the post editor
	document.querySelectorAll(".editor").forEach(function(editor) {
		// Make a character counter above the textarea
		if (window.location.href.includes("forumProfile"))
			editor.insertAdjacentHTML("beforebegin","<div style=\"width: 600px; max-width: 600px;\">Size: <b id=\"btes_charcount\"></b> <span style=\"display: none;\" id=\"btes_warning\">(This signature is too large to be usable by anyone!)</span><br/>Minimum rank: <b id=\"btes_minrank\"></b></div>");
		else
			editor.insertAdjacentHTML("beforebegin","<div style=\"width: 600px; max-width: 600px;\">Character count: <b id=\"btes_charcount\"></b> <span style=\"display: none;\" id=\"btes_warning\">(This post has exceeded BitcoinTalk's post size limit of 64000 characters!)</span></div>");
		
		// Delete the newbie warning from a quote in a PM
		editor.value = editor.value.replace("[size=12pt][color=red]!!! WARNING: This user is a [i]newbie[/i]. If you are expecting a message from a more veteran member, then this is an [i]imposter[/i] !!![/color][/size]\n[hr]\n", "");
		
		// Update the counter every second
		window.setInterval(function(){
			var raw = document.querySelector(".editor").value;
			var content = raw;
			var type = window.location.href.includes("forumProfile") ? "sig" : "post";
			var max_length = type == "sig" ? 4000 : 64000; // The highest acceptable length of a post's raw bbcode
			var minrank = 0;
			
			// Don't count these characters as constructive
			content = content.replace(/\r?\n|\r/g,"");
			
			// Don't count quoted text as original content
			while ((content.indexOf("[quote") != -1))
				content = content.replace(/\[quote[^\]]*\]((?!\[[[\/]*quote).)*\[\/quote\]/g,"");
			
			// For the purposes of this counter, images shouldn't be considered to be text
			content = content.replace(/\[img[\s\S]*?\/img\]/gi, "");
			
			// Bitcoin symbols count as a single character
			content = content.split("[btc]").join("B");
			
			// Tags themselves shouldn't be considered to be content
			content = content.replace(/\[[\s\S]*?\]/gi, "");
			
			// Smileys are really just images
			content = content.replace(/(?<=^|\W)((:{1,2}|8|;)\)|[;:]D|\?{3}|:[oP]|:-[[X\\*]|(>?:|:')\()(?=$|\W)/g, "");
			
			var count = content.trim().length;
			
			switch (type) {
				case "post":
					// Achow's BitcoinTalk Account Price Estimator and many signature campaigns consider posts with fewer than 75 characters to be undesirable
					if (count < 75)
						document.getElementById("btes_charcount").setAttribute("style", "color: #DC143C;"); // red
					else if (count >= 100) // You should strive for 100+!
						document.getElementById("btes_charcount").setAttribute("style", "color: #008000;"); // green
					else
						document.getElementById("btes_charcount").setAttribute("style", "color: black;");
			
					// Display the number of characters that are original and "constructive"
					document.getElementById("btes_charcount").innerHTML = count;
				break;
				case "sig":
					// Calculate what minimum rank user can wear the signature
					if ((raw.length > 50) || (raw.match(/\[(url|table|center|font|pre|left|right|email|ftp|su[bp]|tt|list|code|quote|[bius]|hr)[\s\S]*?\]/gi)))
						minrank = 1;
					if (raw.length > 150)
						minrank = 2;
					if (raw.match(/\[color[\s\S]*?\]/gi))
						minrank = 3;
					if (raw.match(/\[size[\s\S]*?\]/gi))
						minrank = 4;
					if (raw.match(/\[glow[\s\S]*?\]/gi))
						minrank = 5;
					if (raw.match(/\[shadow[\s\S]*?\]/gi)) // not sure about this one
						minrank = 5;
					if (raw.match(/\[img[\s\S]*?\]/gi))
						minrank = 6;
					document.getElementById("btes_minrank").innerHTML = ("<img src=\"https://bitcointalk.org/Themes/custom1/images/star.gif\" alt=\"*\" border=\"0\">").repeat(minrank);
					if (minrank == 0)
						document.getElementById("btes_minrank").innerHTML = "<img src=\""+chrome.extension.getURL("images/newbie.png")+"\" alt=\"*\" border=\"0\">";
					if (minrank == 6)
						document.getElementById("btes_minrank").innerHTML = "<span style=\"color: red;\">Not usable as a signature</span>";
					document.getElementById("btes_charcount").innerHTML = raw.length;
				break;
			}
			// If the raw post length is greater than 64000 characters, it will be rejected by the forum software, so let the user know
			if (raw.length > max_length) {
				document.getElementById("btes_warning").setAttribute("style", "color: red;");
			} else {
				document.getElementById("btes_warning").setAttribute("style", "display: none;");
			}
		}, 1000);
	});
	
	// On the thread listing, highlight threads that have unread posts that the user distinguished as being important to them
	if (window.location.href.includes("?board=")) {
		document.querySelectorAll(".windowbg").forEach(function(potentialthreaddiv) {
			// Determine if this page is a list of a user's posts
			potentialthreaddiv.querySelectorAll("b").forEach(function(titlediv) {
				var threadlink = titlediv.getElementsByTagName("span")[0].getElementsByTagName("a")[0];
				var thread = threadlink.getAttribute("href").match(/[0-9]+/);
				if (important_threads.includes(thread)) {
					threadlink.innerHTML = thread;
					threadlink.setAttribute("style", "color: goldenrod;");
					potentialthreaddiv.setAttribute("style", "background-color: #F3F49C;");
					potentialthreaddiv.getElementsByTagName("small")[0].querySelectorAll("a").forEach(function(pagelink) {
						pagelink.setAttribute("style", "color: goldenrod;");
					});
					potentialthreaddiv.getElementsByClassName("newimg")[0].setAttribute("src", chrome.extension.getURL("images/newhl.png"));
				}
			});
		});
	}
	
	// On the showposts page, if a post has a code block with a very long unbroken line, the table of posts will be distorted and very hard to read.
	// This will fix that by limiting how wide code blocks can be drawn
	document.querySelectorAll(".titlebg").forEach(function(testForPostList) {
		// Determine if this page is a list of a user's posts
		if (testForPostList.getElementsByTagName("td")[0].innerHTML.includes("Show Posts")) {
			// Find all code blocks on the page
			document.querySelectorAll(".code").forEach(function(codeblock) {
				// and make them no wider than 800 pixels
				codeblock.setAttribute("style", "max-width: 800px;");
			});
		}
	});
	
	// On the profile page, we want to add a row to the table that displays how much activity a user needs to rank up again
	// We're going to look through all <td>s and detect if one of them is Activity
	document.querySelectorAll("td").forEach(function(td) {
		if (td.innerHTML == "<b>Activity:</b>") {
			var activity = parseInt(td.parentNode.getElementsByTagName("td")[1].innerHTML);
			
			if (activity < 480) {
				td.parentNode.insertAdjacentHTML("afterend","<tr><td><b>Next rank at:</b></td><td>"+(Math.pow(2,Math.max(0,Math.ceil(Math.log2((activity+1)/30))))*30)+"</td></tr>");
			}
			
			// Additionally, make a link here to a thread explaining what Activity even is
			td.getElementsByTagName("b")[0].innerHTML = "<a href=\"https://bitcointalk.org/index.php?topic=237597.0\">Activity</a>:";
		}
	});
	
	document.querySelectorAll(".maintab_active_back").forEach(function(maintab) {
		// Locate the MY MESSAGES tab
		var inboxlink = maintab.parentNode.getElementsByTagName("td")[8].getElementsByTagName("a")[0];
		// Check if there is any new mail
		if (inboxlink.innerHTML.includes("[")) {
			var messages = inboxlink.getElementsByTagName("strong")[0].innerHTML;
			if (!messages.includes("["))
				inboxlink.innerHTML = "MY MESSAGES <strong style='background: red; padding-right: 1px;'>["+messages+"]</strong>";
		}
	});
	
	// Are we on a trust summary page?
	try {
		if (document.getElementsByTagName("body")[0].getElementsByTagName("div")[1].getElementsByTagName("h3")[0].innerHTML.includes("Trust summary for")) {
			// Make the trust tables more compact and readable
			document.querySelectorAll("tbody").forEach(function(table) {
				if (table.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].innerHTML == "User") {
					var feedback = [];
					table.querySelectorAll("tr").forEach(function(row) {
						var col = 0;
						var username = "";
						row.querySelectorAll("td").forEach(function(cell) {
							col ++;
							if (cell.className != "catbg3") {
								var morecss = "";
								if (col == 1) {
									username = cell.getElementsByTagName("a")[0].innerHTML;
								}
								if (col == 3) {
									morecss = " text-align: right;";
									cell.innerHTML = cell.innerHTML + " BTC";
									if (cell.innerHTML == "0.00000000 BTC" || cell.innerHTML == " BTC") {
										cell.innerHTML = "<i style=\"color: gray;\">None</i>";
									}
								}
								if (col == 4)
									morecss = " text-align: center;";
								if (col != 5) {
									morecss = morecss + " white-space: nowrap;"; 
								} else {
									var key = username + ":" + cell.innerHTML.replace(/<!--[\s\S]*?-->/g,"").split(" ").join("");
									if (feedback.indexOf(key) > -1) {
										cell.innerHTML = "<i style=\"color: gray;\" title=\""+cell.innerHTML.replace(/<!--[\s\S]*?-->/g,"").split("<br>").join("").split("\"").join("''")+"\">Duplicate feedback hidden</i>";
									} else {
										feedback.push(key);
										var type = "<b style=\"color: blue;\">Comment</b> ";
										if (cell.getAttribute("style"))
											if (cell.getAttribute("style").includes("red")) {
												type = "<b style=\"color: red;\">Negative</b> ";
												morecss = morecss + " background: #ffcccc;";
											} else if (cell.getAttribute("style").includes("bold")) {
												type = "<b style=\"color: green;\">Positive</b> ";
												morecss = morecss + " background: #ccffcc;";
											}
										cell.innerHTML = type + cell.innerHTML;
										//cell.innerHTML = username;
									}
								}
								cell.setAttribute("style","padding-top: 1px; padding-bottom: 1px; vertical-align: top;" + morecss);
							}
						});
					});
				}
			});
		}
	} catch(err) {
		
	}
	
	var optionslink = "";
	document.querySelectorAll("a").forEach(function(lnk) {
		// Get the URL from this link to construct the options page URL
		if (lnk.innerHTML == "Look and Layout Preferences") {
			optionslink = lnk.getAttribute("href") + ";btes";
		}
		
		// Fix inconsistent punctuation of this one sidebar link
		if (lnk.innerHTML == "Ignore user options") {
			lnk.innerHTML = "Ignore User Options";
		}
		
		// Insert a new link to the options page
		if (optionslink.length > 0)
			if (lnk.innerHTML == "Ignore Boards Preferences")
				lnk.insertAdjacentHTML("afterend", "<br/><a href=\""+optionslink+"\" style=\"color: orange;\">BitcoinTalk Enhancement Suite Options</a>");
	});
	
	if (window.location.href.substr(-5,5) == ";btes") {
		document.title = "Profile - BitcoinTalk Enhancement Suite Options";
		
		document.querySelectorAll("#creator").forEach(function(settingspanel) {
			settingspanel.innerHTML = "<iframe src=\""+chrome.runtime.getURL("options/options.html")+"\" frameBorder=\"0\" width=\"100%\" style=\"min-height: 1000px;\"></iframe>";
		});
		
		document.querySelectorAll("a").forEach(function(lnk) {
			if (lnk.innerHTML == "Look and Layout Preferences") {
				lnk.setAttribute("style", "font-weight: normal !important;");
			}
		});
		
		document.querySelectorAll("a").forEach(function(lnk) {
			if (lnk.innerHTML == "BitcoinTalk Enhancement Suite Options") {
				lnk.setAttribute("style", "color: orange; font-weight: bold !important;");
			}
		});
	}
})();