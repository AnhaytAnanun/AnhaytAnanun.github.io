(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('#textarea1').val('New Text');
    $('input#input_text, textarea#textarea2').characterCounter();
	M.textareaAutoResize($('#textarea1'));
  });
})(jQuery);

var firebaseConfig = {
    apiKey: "AIzaSyAq_OexT8zPXDEyBrFwgjx9lQCxx0d3TBc",
    authDomain: "fir-web-codelab-279ba.firebaseapp.com",
    databaseURL: "https://fir-web-codelab-279ba.firebaseio.com",
    projectId: "fir-web-codelab-279ba",
    storageBucket: "fir-web-codelab-279ba.appspot.com",
    messagingSenderId: "775168938613",
    appId: "1:775168938613:web:8965736740fc3a7e0b5e3c",
    measurementId: "G-R6TD1LFNTE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById('contactForm').addEventListener('submit', function(e) {
	e.preventDefault();

	firebase.firestore().collection('messages').add({
		email: document.getElementById('email').value,
		message: document.getElementById('message').value,
		date: Date.now()
	})
	.then(function() {
		email: document.getElementById('email').value = '';
		message: document.getElementById('message').value = '';
		M.toast({html: 'Your message was received! Thank you!', completeCallback: function(){}});
    	console.log("Document successfully updated!");
	})
	.catch(function(error) {
		M.toast({html: 'There is something wrong going on... please try later!', completeCallback: function(){}});
	    console.error("Error updating document: ", error);
	});
});