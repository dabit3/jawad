$(document).ready(function() {
	

	$('#mailinglist').click(function () {
        var name = $('#form-name').val();
        var email = $('#form-email').val();
        var message = $('#form-feedback-questions').val();
        var phone = $('#form-phone').val();
        var varData = 'name=' + name + '&email=' + email + '&message=' + message + '&phone=' + phone;

        if (name == "") {
    			swal("Please fill out the name field.");
    			return false;
    		}

    		if (email == "") {
    			swal("Please fill out the email field.");
    			return false;
    		}

    		if (message == "") {
    			swal("Please fill out the message field.");
    			return false;
    		}

        if((name != "") && (email != "")) {
        		$("#theteacherform").hide();
            var inst = $.remodal.lookup[$('[data-remodal-id=modal]').data('remodal')];
            inst.open();
            $.ajax({
                type: "POST",
                url: "contactermail",
                data: varData,
                success: function() {
                }
            });
            return false;
        }
    });

});