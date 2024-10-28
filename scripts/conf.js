// Google Login
document.querySelector('.google').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // Successfully signed in with Google
    console.log(result.user);
  }).catch((error) => {
    console.error("Error with Google login: ", error);
  });
});

// Facebook Login
document.querySelector('.facebook').addEventListener('click', () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
    // Successfully signed in with Facebook
    console.log(result.user);
  }).catch((error) => {
    console.error("Error with Facebook login: ", error);
  });
});

// Email/Password Login
function submitForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
    // Successfully signed in with email/password
    console.log(result.user);
  }).catch((error) => {
    console.error("Error with Email/Password login: ", error);
  });
}
