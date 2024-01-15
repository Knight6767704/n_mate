
  function onSignIn(googleUser) {
    // This function will be called when the user successfully signs in.
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());

    // Redirect the user to your main.html page
    window.location.href = 'https://nostalgimate.vercel.app/main.html';
  }

  function signOut() {
    // You can use this function to sign the user out.
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');

      // Redirect the user to your home page after signing out
      window.location.href = 'https://nostalgimate.vercel.app';
    });
  }

  // Listen for changes in the user's sign-in status
  gapi.auth2.getAuthInstance().isSignedIn.listen(function (isSignedIn) {
    if (isSignedIn) {
      // Redirect the user to your main.html page when signed in
      window.location.href = 'https://nostalgimate.vercel.app/main.html';
    }
  });

