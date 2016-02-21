// bio information

var bio = {
	"name" : "Yanzi Chrissie XIAO, PhD",
	"role" : "Environmental Scientist",
	"contacts": {
		"location": "Oscoda, Michigan",
		"github" : "chrissiexyz",
		"twitter" : "chrissiexiao"
	},
	"biopic" : "images/me.jpg",
	"welcome" : "Hi there! I am Yanzi and welcome to my resume page.",
	"skills" : ["Statistical Analysis", "Programming with Matlab, R and etc.", 
		"Problem-solving", "Teaching", "Chinese Translation"]
};

var name = bio.name;
var role = bio.role;
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

function appendToResume(what, how, where) {
    $(where).append( how.replace("%data%", what) );
}

//appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
//appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
//appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
//appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
//appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.biopic, HTMLbioPic, "#header");
appendToResume(bio.welcome, HTMLWelcomeMsg, "#header");


if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

var work = {
	"jobs" :[
	{
		"employer": "National Centre for Groundwater Research and Training, University of Queensland",
		"title": "PhD Researcher",
		"location": "Brisbane, Australia",
		"dates": "03/2011 – 10/2015",
		"description": "&nbsp Studied the interaction between groundwater and wetland ecosystems \
			<br> &nbsp Invented new experimental designs resulting in more accurate data recording, \
			a larger dataset for analysis and lower labor costs  \
			<br> &nbsp Performed database management, data analysis and visualization \
			(data enquiry and smoothing, K-means clustering, nonlinear regression, ANOVA, \
		 	time-series analysis, Monte Carlo, parameters optimization, random tree, etc.) \
			<br> &nbsp Built a 3D plant growth prediction model using C++ and L-system languages \
			<br> &nbsp Communicated my results at conferences in Brisbane, Sydney, Canberra and Adelaide \
			with publications in press"
	},
	{
		"employer": "Translation Express (Australia)",
		"title": "Translator and Interpreter (part-time)",
		"location": "Brisbane, Australia",
		"dates": "02/2012 - 02/2016",
		"description": "&nbsp Offered English-Chinese onsite interpreting services (10/2012 – 11/2014) \
			for training programs and translation services primarily in legal documents (07/2012 – current)\
			<br> &nbsp Assisted in company business operation at times" 
	},
	{
		"employer": "School of Chemical Engineering and School of Civil Engineering, \
			University of Queensland",
		"title": "Teaching Assistant (part-time)", 
		"location": "Brisbane, Australia",
		"dates": "07/2011 - 11/2014",
		"description": "&nbsp Guided over 400 students in improving their statistical analysis/math/software \
			(Excel toolkit, Matlab) skills through one-on-one or group counselling and teaching\
			<br> &nbsp Instructed and supervised group laboratory experiments"
	},
	{
		"employer": "University of Queensland (03/2011 – 08/2011) and \
			Queensland Geothermal Energy Centre of Excellence (07/2010 – 08/2010)",
		"title": "Field Assistant (part-time)",
		"location": "Brisbane, Australia",
		"dates": "07/2010 - 08/2011",
		"description": "&nbsp Assisting in installing groundwater monitoring wells, soil sensors, \
			and sap flow sensors\
			<br> &nbsp Collecting groundwater samples throughout Queensland\
			<br> &nbsp Providing navigation, arranged equipment, assisted sample collection, \
			recorded data and communicated with land owners"
	},
	{
		"employer": "Sun Yat-sen University",
		"title": "UNEP/GEF Demonstration Site Project Coordinator",
		"location": "Guangzhou, China",
		"dates": "07/2007 – 02/2009",
		"description": "&nbsp Communicated project progress between the UNEP, university\
			and local government\
			<br> &nbsp Produced a Project Management Plan and Wetland Eco-tourism Plan\
			<br> &nbsp Managed the creation of the project website and writing news articles\
			<br> &nbsp Organized training programs for local government officials and schools\
			<br> &nbsp Assisted in field survey and other research requirements"		
	},
	{
		"employer": "United Nations Environmental Programme",
		"title": "UNEP/GEF SCS Project Consultant", 
		"location": "Bangkok, Thailand",
		"dates": "09/2006 – 03/2007",
		"description": "&nbsp Collaborated with agencies in seven countries, \
			identified problems in financial reports and provided support to financial officers\
			<br> &nbsp Facilitated communications between UNEP and partners in China\
			<br> &nbsp Made recommendations to the Regional Strategic Action Programme\
			<br> &nbsp Gave a presentation on the quantitative study of eco-environmental water requirements for\
			coastal wetland in the East Asian Seas Congress, Hainan, China"			
	}				
	]
}

function displayWork() {	
	for (job in work.jobs) {
	// create new div for work experience
		$("#workExperience").append(HTMLworkStart);
	// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedJobtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedJobtitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates =
			HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
	
		var formattedLocation = 
			HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription =
			HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


var projects = {
	"projects": [
	{
		"title": "Laboratory Study of Subtropical Wetland Plant \
			Lepironia articulata's Water Use and Sensitivity to Groundwater Availability",
		"date": "2000-2005",
		"description": "My PhD project was funded by the National Centre for Groundwater Research\
			 and Training under the research program Groundwater–Vegetation–Atmosphere Interactions.\
			 We try to understand the relationship between groundwater and vegetation and \
			 how this can be affected by climate change. I look at how sensitive a wetland ecosystem \
			 is to change with groundwater drawdown through plant growth experiments and modeling.",
		"images": ["images/groupsculm.jpg", "images/L-LepModel.png" ]
	},
	{
		"title": "Shantou Wetland Demonstration Site - Participatory Planning and Implementation in the \
			Management of Shantou Intertidal Wetland",
		"date": "2007-2009",
		"description": "The objective of this project is to demonstrate a set of stress reduction \
			measures effective at the Shantou intertidal wetland ecosystem including: \
			Establishment of institutional arrangements for cross-sectoral and participatory \
			management; Rehabilitation and physical enclosure of some hotspots; \
			Promotion of environmentally friendly economic activities (silvo-fishery and eco-tourism); \
			and Development and implementation of awareness raising and capacity building programmes.",
		"images": []
	},
	{
		"title": "South China Sea Project - Reversing Environmental Degradation Trends in the South China Sea \
			and Gulf of Thailand",
		"date": "2006-2007",
		"description": "The UNEP/GEF SCS Project is funded by the Global Environment Facility (GEF) \
			and implemented by the United Nations Environment Programme (UNEP) in partnership \
			with seven riparian states bordering the South China Sea (Cambodia, China, Indonesia,\
			Malaysia, Philippines, Thailand, and Vietnam).",
		"images": []
	},
	{
		"title": "Highway Traveling time Estimate and Optimal Routing",
		"date": "2005",
		"description": "It was a 3-day modelling competition oproject under the second \
			National Postgraduate Mathematic Contest in Modelling in China and we, representing \
			Sun Yat-sen Unveristy won the first place of that year.",
		"images": []
	}
	]
};

projects.display = function() {	
	for (project in projects.projects) {
	// create new div for projects
		$("#projects").append(HTMLprojectStart);
	// 
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedprojectDates =
			HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedprojectDates);
	
		var formattedprojectDescription = 
			HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedprojectDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedprojectImage =
					HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}
	}
}

projects.display();

var education = {
	"schools": [
	{
		"name": "University of Queensland",
		"year": 2015,
		"degree": "PhD",
		"major": "Environmental Engineering",
		"location": "Brisbane, Australia",
		"url": "uq.edu.au"
	},
	{
		"name": "University of Queensland",		
		"year": 2010,
		"degree": "MA",
		"major": "Chinese Tranlation and Interpreting",
		"location": "Brisbane, Australia",
		"GPA" : "3.48/4",
		"url": "uq.edu.au"	
	},
	{
		"name": "Sun Yat-sen University",		
		"year": 2006,
		"degree": "MS",
		"major": "Environmental Science",
		"location": "Guangzhou, China",
		"GPA" : "3.36/4",
		"url": "http://www.sysu.edu.cn/2012/en/"	
	},
	{
		"name": "Hohai University",		
		"year": 2004,
		"degree": "BS",
		"major": "Environmental Engineering",
		"location": "Nanjing, China",
		"GPA" : "3.28/4",
		"url": "http://en.hhu.edu.cn/"
	}		
	],
	"onlineCourses": [
	{
		"title": "R Programming",
		"school": "Johns Hopkins University",
		"url": "https://www.coursera.org/learn/r-programming"
	},
	{
		"title": "Questionnaire Design for Social Surveys",
		"school": "University of Michigan",
		"url": "https://www.coursera.org/learn/questionnaire-design"		
	},
	{
		"title": "Game Theory",
		"school": "Yale University",
		"url": "http://oyc.yale.edu/economics/econ-159#sessions"		
	}
	]
};

function displayEducation() {	
	for (school in education.schools) {
	// create new div for work experience
		$("#education").append(HTMLschoolStart);
	// concat employer and title
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;

		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates =
			HTMLschoolDates.replace("%data%", education.schools[school].year);
		$(".education-entry:last").append(formattedDates);
	
		var formattedLocation = 
			HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor =
			HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
};

displayEducation();

//$("#main").append(internationalizeButton);
//function inName(oldName) {
//   var finalName = oldName;
//    var Name = finalName.split(' ');
//    var finalName = Name[0].slice(0,1).toUpperCase() + Name[0].slice(1).toLowerCase() 
//    	+ ' '+ Name[1].slice(0,1).toUpperCase() + Name[1].slice(1).toLowerCase() 
//    	+ ' '+ Name[2].toUpperCase();
//    return finalName;
//};
//inName(bio.name);
//appendToResume(bio.contacts.mobile, HTMLmobile, "#footerContacts");
//appendToResume(bio.contacts.email, HTMLemail, "#footerContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#footerContacts");
appendToResume(bio.contacts.twitter, HTMLtwitter, "#footerContacts");
// see a map
$("#mapDiv").append(googleMap);

