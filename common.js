//Управляемый размер input

//Добавление карточек 

$(function () {
    $('.add').on("click", function () {
        var val = $(this).parent().find('.card-text').val();
        if (val != '') {
            var li = $('<li class="card-description"></li>').text(val); 
            $(li).append('<button class="del"><i class="fa fa-close"></i></button>');
            $(li).append('<button class="edit"><i class="fa fa-pencil"></i></button>');
            $(this).parent().find('.myList').append(li);
            $(this).parent().find('.card-text').val('');
            $(this).parent().find('.del').on('click', function () {
                $(this).parent().remove();
            });
        }
    });
});
//Редактирование карточки

//Перенос столбцов по полю 

//Добавление нового столбца
$(function () {
    $('.add-column').on("click", function () {
        $(this).parent().find('.card').removeClass('hide');
        $(this).remove();

    });
});

//Модальное окно с настройками (пока только для 1 карточки)

var modal = document.getElementById('myModal');
var btn = document.getElementById("settings");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Выпадающее меню

