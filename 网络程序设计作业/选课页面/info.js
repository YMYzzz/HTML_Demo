
class lesson {
    constructor(name, day, time) {
        this.name = name;
        this.teacher = "YMY";
        this.day = day;
        this.time = time;
    }
    getName(){
        return this.name;
    }
}

var lessons = new Array();
lessons[0] = new lesson("数据结构", "Mon", "3");
lessons[1] = new lesson("创新工程学","Mon","1");
lessons[2] = new lesson("人文社会科学基础","Mon","7");
lessons[3] = new lesson("生命科学导论","Tus","5");
lessons[4] = new lesson("英美社会与文化","Mon","3");
lessons[5] = new lesson("社会化学","Tus","5");
lessons[6] = new lesson("环境保护与可持续发展","Wed","7");
lessons[7] = new lesson("计算机辅助设计基础","Wed","1");
lessons[8] = new lesson("化学、环境与人类","Mon","5");
lessons[9] = new lesson("高分子材料","Wed","1");
lessons[10] = new lesson("电子商务","Wed","3");
lessons[11] = new lesson("C语言程序设计","Wed","7");
lessons[12] = new lesson("Matlab工程应用","Tus","5");
lessons[13] = new lesson("三维软件的应用","Thu","5");
lessons[14] = new lesson("天文学导论","Thu","3");
lessons[15] = new lesson("数据结构","Tus","1");
lessons[16] = new lesson("实验设计","Thu","1");
lessons[17] = new lesson("珠宝鉴定与加工","Thu","5");
lessons[18] = new lesson("现代造纸","Tus","3");
lessons[19] = new lesson("数学建模","Fri","7");
lessons[20] = new lesson("新材料概论","Fri","5");
lessons[21] = new lesson("道家思想解读","Fri","5");
lessons[22] = new lesson("敦煌学","Fri","7");
lessons[23] = new lesson("白居易诗文鉴赏","Fri","5");
lessons[24] = new lesson("佛教思想解读","Fri","1");