function onSignIn(googleUser) {
    // This function will be called when the user successfully signs in.
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
    // You can use the profile information as needed.
  }

  function signOut() {
    // You can use this function to sign the user out.
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }