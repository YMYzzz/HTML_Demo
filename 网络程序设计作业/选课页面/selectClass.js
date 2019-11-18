$(function () {
    // 添加所有课程
    for (var x in lessons) {
        $(".lessons").append("<span class = 'lesson'>" + lessons[x].getName() + "</span>");
    }

    // 将点击的课程添加进课程表
    $('.lesson').click(function (e) {
        var lesson_name = $(this).text();
        for (var x in lessons) {
            if (lesson_name == lessons[x].getName()) {
                // 获取星期几和第几节课
                var d = lessons[x].getDay() + lessons[x].getTime();

                // 先判断当前选择课程是否已被选择过
                if (typeof ($(this).attr('select')) == "undefined") {
                    // 再判断课程表当前位置是否有课
                    if ($("#" + d).text() == "") {
                        $("#" + d).append(lessons[x].getName());
                        $(this).attr("select", "selected");         //添加标志位select
                        $(this).animate({
                            backgroundColor:"rgb(163,159,147)"
                        },1000)
                        // $(this).css("background-color", "pink");
                    } else alert("当前选择的 " + lessons[x].getName() + " 与 " + $("#" + d).text() + " 冲突，请重新选择")
                }
                // 已被选择的课程再次点击取消选择
                else {                  
                    $(this).prop("style").removeProperty("background-color");
                    $("#" + d).text("");
                    $(this).removeAttr('select');
                }

            }
        }
    });
})