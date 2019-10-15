$(document).ready( function() {
    $('ul li p').has('span.uncommon').addClass('uncommon');
    $('ul li p').has('span.rare').addClass('rare');

    // Добавляет иконкам действий заголовок всплывающий при наведение.
    // Невозможно реализовать в Sphinx, так как изображения не имеют нужного аттрибута.
    $("img.action").each(function() {
    	$( this ).attr("title", $( this ).attr("alt"));
    });
})
