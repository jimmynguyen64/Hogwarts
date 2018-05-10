// Initialize Firebase and change the values of the config values with your own Firebase config values.
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDVV3IBNHWBw054fUTh99FnoMI9yLkZ08M",
    authDomain: "hogwarts-fe4e0.firebaseapp.com",
    databaseURL: "https://hogwarts-fe4e0.firebaseio.com",
    projectId: "hogwarts-fe4e0",
    storageBucket: "",
    messagingSenderId: "928620640630"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Variables (SET the first set IN FIREBASE FIRST)
// Note remember to create these same variables in Firebase!
var name = "";
var place = "";
var time = "";

// Click Button changes what is stored in firebase
$(".btn").on("click", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    //Get inputs
    name = $("#name-input").val().trim();
    place = $("#place-input").val().trim();
    time = $("#time-input").val().trim();

    // Change what is saved in firebase
    database.ref().set({
        name: name,
        place: place,
        time: time
    });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
dataRef.ref().on("child_added", function(childSnapshot) {
      
    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().place);
    console.log(childSnapshot.val().time);
    
    // full list of items to the well
    $("#card-body").append("<div class='well'><span class='member-name'> " + childSnapshot.val().name +
      " </span><span class='member-email'> " + childSnapshot.val().email +
        " </span><span class='member-age'> " + childSnapshot.val().age +
          " </span><span class='member-comment'> " + childSnapshot.val().comment + " </span></div>");
          
    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
      
  dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // Change the HTML to reflect
    $("#name-display").text(snapshot.val().name);
    $("#email-display").text(snapshot.val().email);
    $("#age-display").text(snapshot.val().age);
    $("#comment-display").text(snapshot.val().comment);
  });

  function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});