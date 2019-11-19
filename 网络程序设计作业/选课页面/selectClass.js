$(function () {
    // 添加所有课程
    addLessons();

    // 选择课程功能
    selectLesson();

    // 判断提交时是否有8节课
    submitNum();

})

function selectLesson() {
    $('.lesson').click(function () {
        var lesson_name = $(this).text();
        for (var x in lessons) {
            if (lesson_name == lessons[x].getName()) {
                // 获取星期几和第几节课
                var d = lessons[x].getDay() + lessons[x].getTime();
                // 先判断当前选择课程是否已被选择过
                if (typeof ($(this).attr('select')) == "undefined") {
                    $("#" + d).append(lessons[x].getName());
                    $("#" + d).fadeIn();
                    $(this).attr("select", "selected"); //添加标志位select
                    lessons[x].setChoose(true); //当前课已被选择
                    $(this).animate({
                        backgroundColor: "rgb(163,159,147)"
                    }, 1000);
                    // 将相同时间的其他课程隐藏
                    for (var y in lessons) {
                        if ($(this).text() == lessons[y].getName()) {
                            for (var x in lessons) {
                                if (x == y)
                                    continue;
                                if (lessons[y].getDay() == lessons[x].getDay() && lessons[y].getTime() == lessons[x].getTime()) {
                                    $(".lessons span:eq(" + x + ")").animate({
                                        color: "gray"
                                    }, 1000);
                                    $(".lessons span:eq(" + x + ")").attr("select", "besides"); //置标记位为besides
                                }
                            }
                        }
                    }
                }
                // 已被选择的课程再次点击取消选择并恢复相同时间的课
                else if ($(this).attr('select') == "selected") {
                    $(this).prop("style").removeProperty("background-color");
                    $("#" + d).text("");
                    lessons[x].setChoose(false); //取消当前课的计数标记
                    $(this).removeAttr('select');
                    // 恢复相同时间的其他课程
                    let that = this;
                    var $beside_lesson = $(".lessons span[select = 'besides']");
                    $beside_lesson.each(function () {
                        for (var y in lessons) {
                            if ($(that).text() == lessons[y].getName()) {
                                for (var x in lessons) {
                                    if ($(this).text() == lessons[x].getName()) {
                                        if (lessons[y].getDay() == lessons[x].getDay() && lessons[y].getTime() == lessons[x].getTime()) {
                                            $(this).removeAttr('select');
                                            $(this).animate({
                                                color: "rgb(248, 242, 220)"
                                            }, 1000);
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        }
    });
}

function addLessons() {
    for (const x in lessons) {
        $(".lessons").append("<span class = 'lesson'>" + lessons[x].getName() + "</span>");
    }
}

function submitNum() {
    $('h3').click(function () {
        var num = 0;
        for (const x in lessons) {
            if (lessons[x].getChoose())
                num++;
        }
        if (num < 8)
            alert("请至少选择8门课");
        else
            alert("提交成功");
    });
}