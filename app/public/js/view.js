$("#search-btn").on("click", function(event) {
  event.preventDefault();

  var bookSearched = $("#book-search")
    .val()
    .trim();

  $.get("/api/" + bookSearched, function(data) {
    renderBooks(data);
  });
});

$("#author-search-btn").on("click", function(event) {
  event.preventDefault();

  var authorSearched = $("#author-search")
    .val()
    .trim();

  $.get("/api/author/" + authorSearched, function(data) {
    renderBooks(data);
  });
});

$("#genre-search-btn").on("click", function(event) {
  event.preventDefault();

  var genreSearched = $("#genre-search")
    .val()
    .trim();

  $.get("/api/genre/" + genreSearched, function(data) {
    renderBooks(data);
  });
});

function renderBooks(data) {
  if (data.length !== 0) {
    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {
      var div = $("<div>");

      div.append("<h3>Title: " + data[i].title + "</h>");
      div.append("<h4>Author: " + data[i].author + "</h4>");
      div.append("<h4>Genre: " + data[i].genre + "</h4>");
      div.append("<h4>Pages: " + data[i].pages + "</h4>");

      div.append(
        "<button class='delete' data-id='" + data[i].id + "'>DELETEBOOK</button"
      );

      $("#stats").append(div);

      $(".delete").click(function() {
        var info = {
          id: $(this).attr("data-id")
        };

        $.post("/api/delete", info).done(function(deldata) {
          console.log("That was deleted!");
        });

        $(this)
          .closest("div")
          .remove();
      });
    }
  }
}
