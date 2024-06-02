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

// for touchscreens
    $('search-box').on('touchstart'), function() {
        $(this).focus();
    }
    $('title').on('touchstart'), function() {
        $(this).focus();
    }
    $('artist').on('touchstart'), function() {
        $(this).focus();
    }

    $('search-box').on('touchstart'), function() {
        $(this).focus();
    }




    $(document).ready(function() {
        const $darkModeBtn = $('.btn.btn-dark');
        const $body = $('body');

        $darkModeBtn.on('click', function() {
            $body.toggleClass('dark-mode');
            const isDarkMode = $body.hasClass('dark-mode');
            $darkModeBtn.text(isDarkMode ? 'Light' : 'Dark');
        });
    });

    
    