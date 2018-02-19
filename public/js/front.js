function getNotes() {
  $.get('/notes')
    .then(function(res) {
      res.data.forEach(function(note) {
        $('#notes').append(
          '<div class="note">' + 
            '<h3>' + note.title + '</h3>' +
            '<p>' + note.details + '</p>' +
          '</div>'
        );
      });
    });
}

getNotes();