var bio = {
	"name"   : "Mandy Real",
    "role"   : "Front-end Web Developer",
    "welcomeMessage" : "Hire Me!",
	"contacts" : {
		"mobile"   : "+6596770640",
		"email"    : "normandy.real@gmail.com",
        "github"   : "mandyreal",
        "twitter"  : "@mandoysg",
        "location" : "Singapore"
	},
    "pic" : "images/MANDY_photo2.jpg",
    "skills" : ["HTML","CSS","Javascript, jQuery, AJAX", "SQL", "Git","Knockout.js, Jasmine","Ruby on Rails"],
    display: function() {

      var headerSection = $('#header');
      var topContactsSection = $('#topContacts');
      var footerContactsSection = $('#footerContacts');

      var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
      var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
      var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

      var formattedPic = HTMLbioPic.replace("%data%", bio.pic);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail  = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter  = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

      headerSection.append(formattedPic);
      headerSection.prepend(formattedHeaderRole);
      headerSection.prepend(formattedHeaderName);

      topContactsSection.append(formattedMobile);
      topContactsSection.append(formattedEmail);
      topContactsSection.append(formattedGithub);
      topContactsSection.append(formattedTwitter);
      topContactsSection.append(formattedLocation);

      footerContactsSection.append(formattedMobile);
      footerContactsSection.append(formattedEmail);
      footerContactsSection.append(formattedGithub);
      footerContactsSection.append(formattedTwitter);
      footerContactsSection.append(formattedLocation);
        
      if (bio.skills.length > 0) {
        headerSection.append(HTMLskillsStart);
          for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
          }
      }
    }
}


var work = {
    "jobs"  : [
        {
            "employer"    : "NCS",
            "title"       : "Database Administrator",
            "location"    : "Singapore",
            "dates"       : "2005-Present",
            "description" : "SQL Server, DB2 database administration for mainframe and .NET applications for local government agencies"            
        },
        {
            "employer"    : "Accenture Inc.",
            "title"       : "Software Engineer",
            "location"    : "Manila, Philippines",
            "dates"       : "2001-2005",
            "description" : "Application development and maintenance of mainframe systems for leading US credit card company"
        }
    ],
    display: function() {
      for(job in work.jobs) {
        //create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
      }
    }
}


var projects = {
    "project" : [
        {
           "title"        : "Udacity FEDN Project 1",
            "dates"       : "October 2014",
            "description" : "Given a design mockup, develop a responsive website using Bootstrap's grid system", 
            "images"      : ["images/P1 Screenshot.png"]
        },
        {
           "title"        : "Udacity FEDN Project 2",
            "dates"       : "December 2014",
            "description" : "Create an interactive resume using Javascript to manipulate HTML and CSS elements",
            "images"      : ["images/P2 Screenshot.png"]
        },
        {
           "title"        : "Udacity FEDN Project 3",
            "dates"       : "January 2015",
            "description" : "Given the visual assets and game loop engine, recreate the classic arcade game Frogger by adding the required entities including the characters and enemies.",
            "images"      : ["images/P3 Screenshot.png"]
        },
        {
           "title"        : "Udacity FEDN Project 4",
            "dates"       : "February 2015",
            "description" : "Website Optimization Project - implemented web site optimizations to achieve required PageSpeed Ingsights score of > 90",
            "images"      : ["images/P4 Screenshot.png"]
        },
        {
           "title"        : "Udacity FEDN Project 5",
            "dates"       : "March 2015",
            "description" : "Developed a single page web application to display a specific neighborhood and interesting places around it using Google Map and 3rd party APIs",
            "images"      : ["images/P5 Screenshot.png"]
        },
        {
           "title"        : "Udacity FEDN Project 6",
            "dates"       : "April 2015",
            "description" : "Using Jasmine, complete the test suite needed to test the web app which reads RSS feeds",
            "images"      : ["images/P6 Screenshot.png"]
        }
    ],
    display: function() {
      for(counter in projects.project) {
        //create new div for projects
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[counter].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[counter].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[counter].description)

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.project[counter].images.length > 0) {
            for (image in projects.project[counter].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[counter].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
      }
    }
}


var education = {
    "schools" : [
        {
            "name"     : "University of Sto. Tomas",
            "location" : "Manila, Philippines",
            "degree"   : "B.S. Math",
            "major"    : "Computer Science",
            "dates"    : "1993-1997"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Frontend Web Developer Nanodegree",
            "school" : "Udacity",
            "dates"  : "October 2014 - Presemt",
            "url"    : "https://www.udacity.com/course/nd001"
        },
        {
            "title"  : "Startup Engineering",
            "school" : "Coursera",
            "dates"  : "June 2013",
            "url"    : "https://class.coursera.org/startup-001"
        },
        {
            "title"  : "Programming Mobile Applications for Andoid",
            "school" : "Coursera",
            "dates"  : "January 2014",
            "url"    : "https://www.coursera.org/course/android"
        }
    ],
    display: function() {
      for(school in education.schools) {
        $("#education").append(HTMLschoolStart);
        
        var formattedSchoolname      = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchooldegree    = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchooldate      = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoollocation  = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolmajor     = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        $(".education-entry:last").append(formattedSchoolname);
        $(".education-entry:last").append(formattedSchooldegree);
        $(".education-entry:last").append(formattedSchooldate);
        $(".education-entry:last").append(formattedSchoollocation);
        $(".education-entry:last").append(formattedSchoolmajor);
      }

      $("#education").append(HTMLonlineClasses);

      for(onlineCourse in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);    
        var formattedOnlinetitle   = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineschool  = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formattedOnlinedate    = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
        var formattedOnlineurl     = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

        $(".education-entry:last").append(formattedOnlinetitle);
        $(".education-entry:last").append(formattedOnlineschool);
        $(".education-entry:last").append(formattedOnlinedate);
        $(".education-entry:last").append(formattedOnlineurl);
      }    
    } 
}


var map = {  
  display: function() {
    window.addEventListener('load', map.initialize);    
    $('#mapDiv').append(googleMap);
  } 
}


bio.display();
work.display();
projects.display();
education.display();
map.display();

