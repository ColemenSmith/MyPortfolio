// adding smooth scroll to website

$(document).ready(function() {
    $("a").on('click', function(event) {

        // make sure this.Link has a value before overriding default behavior
        if (this.Link !== "") {
            // prevent default anchor click behavior
            event.preventDefault();

            // store link
            var Link = this.Link;

            //using jquerys animate() method to add smooth page scroll
            // the optimal number(2000) specifies the number of milliseconds it takes to
            // scroll to the specified area
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function() {

                // add link to url when done scrolling
                window.location.Link = Link;
            });
        }
    });
});

// opens and closes forms

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}