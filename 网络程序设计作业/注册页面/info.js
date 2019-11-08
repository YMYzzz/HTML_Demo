var CITYS = {
    "北京": ['北京'],
    "天津": ["天津"],
    "上海": ['上海'],
    "重庆": ['重庆'],
    "河北": ["石家庄", "张家口", "承德", "秦皇岛", "唐山", "廊坊", "保定", "沧州", "衡水", "邢台", "邯郸", "张北", "蔚县", "丰宁", "围场",
        "怀来", "遵化", "青龙", "坝县", "乐亭", "饶阳", "黄骅", "南宫"
    ],
    "山西": ["太原", "大同", "朔州", "阳泉", "长治", "晋城", "忻州", "晋中", "临汾", "运城", "吕梁", "右玉", "河曲", "五台山", "五寨", "兴县",
        "原平", "离石", "榆社", "隰县", "介休", "候马", "阳城"
    ],
    "陕西": ["西安", "宝鸡", "咸阳", "铜川", "渭南", "延安", "榆林", "汉中", "安康", "商洛"]
};
$(function () {

    $.each(CITYS, function (key, value) {
        var $pro = $("<option>" + key + "</option>");
        $("#province").append($pro);
    });

    $("#province").on('change', function () {
        var proName = $("#province option:selected").text();

        var cities = CITYS[proName]; //  获取CITYS数组的对应value值

        $("#city").empty(); //清空当前city列表

        $.each(cities, function (i, value) {
            var $city = $("<option>" + value + "</option>");
            $("#city").append($city);
        })
    });

    $("#province").triggerHandler('change'); //给一个默认值





})

// 表单数据检验
function checkForm() {
    flag1 = true; //姓名标志
    flag2 = true; //年龄标志
    flag3 = true; //爱好标志

    // 爱好多选框
    var checked = $("input:checked");
    if (checked.length == 0) {
        flag3 = false;
    }

    if (flag3) {
        return true;
    } else {
        alert("请至少选择一个爱好");
        return false;
    }
};