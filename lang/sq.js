// moment.js language configuration
// language : Albanian (sq)
// author : Klevis Miho : http://klevismiho.com
(function () {
    var lang = {
            months : "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nentor_Dhjetor".split("_"),
            monthsShort : "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nen_Dhj".split("_"),
            weekdays : "Diele_Hene_Marte_Merkure_Ejnte_Premte_Shtune".split("_"),
            weekdaysShort : "Die_Hen_Mar_Mer_Ejn_Pre_Sht".split("_"),
            weekdaysMin : "Di_He_Ma_Me_Ej_Pr_Sh".split("_"),
            longDateFormat : {
                LT : "h:mm A",
                L : "YYYY-MM-DD",
                LL : "D MMMM, YYYY",
                LLL : "D MMMM, YYYY LT",
                LLLL : "dddd, D MMMM, YYYY LT"
            },
            calendar : {
                sameDay : '[Sot ne] LT',
                nextDay : '[Neser ne] LT',
                nextWeek : 'dddd [ne] LT', 
                lastDay : '[Dje ne] LT',
                lastWeek : '[fundit] dddd [at] LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "ne %s",
                past : "para %s",
                s : "disa sekondave",
                m : "nje minute",
                mm : "%d minuta",
                h : "nje ore",
                hh : "%d ore",
                d : "nje dite",
                dd : "%d dite",
                M : "nje muaj",
                MM : "%d muaj",
                y : "nje vit",
                yy : "%d vjet"
            },
            ordinal : function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? 'ta' :
                    (b === 1) ? 'ra' :
                    (b === 2) ? 'ta' :
                    (b === 3) ? 'ta' : 'ta';
            }
        };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('sq', lang);
    }
}());
