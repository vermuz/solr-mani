(function ($) {
  $(document).ready(function(){
    //alert("Hello world!");
    var searchTerm = $("#edit-search-api-views-fulltext").val();
    var searchExcerpt = $(".views-field-search-api-excerpt");
    var creator = $(".views-field-field-issuing-body");
    var title = $(".views-field-title");
    //var desired = stringToReplace.replace(/[^\w\s\n]/gi, '');
    //console.log(searchExcerpt);

    if(typeof searchTerm != 'undefined')
    {
       //alert(searchTerm);
       searchExcerpt.highlight(searchTerm);
       creator.highlight(searchTerm);
       title.highlight(searchTerm);
    }

  });
})(jQuery);