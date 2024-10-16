importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyCznXzIKNVBCGv4Cz3_jRVbTqRTz832fBU",
    authDomain: "webpush-sestry.firebaseapp.com",
    projectId: "webpush-sestry",
    storageBucket: "webpush-sestry.appspot.com",
    messagingSenderId: "1014436884079",
    appId: "1:1014436884079:web:356dfcbb511d6fac9f679a",
    measurementId: "G-MZLQ4V5SJ7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
