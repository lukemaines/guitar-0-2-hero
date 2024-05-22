$(document).ready(function() {
    $('#search-button').click(function() {
        let artist = $('#artist').val().trim();
        let title = $('#title').val().trim();

        if (artist === "" || title === "") {
            alert("Please enter both artist and song title.");
            return;
        }

        let apiUrl = `https://api.lyrics.ovh/v1/${artist}/${title}`;

        $.get(apiUrl, function(data) {
            $('#lyrics').text(data.lyrics);
        }).fail(function() {
            alert("No song found or the name does not match. Please try again.");
        });
    });
});
