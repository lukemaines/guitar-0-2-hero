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

            let lyricsData = {
                artist: artist,
                title: title,
                lyrics: data.lyrics
            };

            // Store the result in local storage
            let lyricsHistory = JSON.parse(localStorage.getItem('lyricsHistory')) || [];
            lyricsHistory.push(lyricsData);
            localStorage.setItem('lyricsHistory', JSON.stringify(lyricsHistory));
        }).fail(function() {
            alert("No song found or the name does not match. Please try again.");
        });
    });

    // Redirect to lyrics.html when history button is clicked
    $('#history-button').click(function() {
        window.location.href = 'lyrics.html';
    });

    // Translation functionality (placeholder)
    $('#translate-button').click(function() {
        alert("Translation feature is not yet implemented.");
    });
});
