$(document).ready(function() {
	

	$('#mailinglist').click(function () {
	        
	        var email = $('#updates-email').val();
	        var varData = 'email=' + email;
	        if (email == "") {
	    			swal("Please fill out the email field.");
	    			return false;
	    		}
	        
	        if(email != "") {
	        		swal("You've signed up for updates! ", "Unsubscribe at any time.", "success");
	            
	        		emailRef.push({ email: email });
	            console.log(email);

	            $('#updates-email').val("");
	            $.ajax({
	                type: "POST",
	                url: "mailing-list.php",
	                data: varData,
	                success: function() {
	                	
	                }
	            });

	            return false;
	        }
    });

});