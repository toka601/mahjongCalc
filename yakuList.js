const normalYakuList = [
    // 1飜
    [
        ["立直", false, "説明"],
        ["一発", false, "説明"],
        ["嶺上開花", false, "説明"],
        ["門前清自摸和", false, "説明"],
        ["海底摸月", false, "説明"],
        ["河底撈魚", false, "説明"],
        ["槍槓", false, "説明"],
        ["断幺九", false, "説明"],
        ["役牌:自風牌", false, "説明"],
        ["役牌:場風牌", false, "説明"],
        ["役牌:三元牌", false, "説明"],
        ["平和", false, "説明"],
        ["一盃口", false, "説明"],
        ["ドラ", false, "説明"],
        ["裏ドラ", false, "説明"],
        ["赤ドラ", false, "説明"],
        ["抜きドラ", false, "説明"]
    ],
    // 2飜
    [
        ["ダブル立直", false, "説明"],
        ["一気通貫", true, "説明"],
        ["三色同刻", false, "説明"],
        ["三色同順", true, "説明"],
        ["対々和", false, "説明"],
        ["三暗刻", false, "説明"],
        ["三槓子", false, "説明"],
        ["小三元", false, "説明"],
        ["七対子", false, "説明"],
        ["混全帯幺九", true, "説明"],
        ["混老頭", false, "説明"]
    ],
    // 3飜
    [
        ["二盃口", false, "説明"],
        ["純全帯幺九", true, "説明"],
        ["混一色", true, "説明"]
    ],
    // 6飜
    [
        ["清一色", true, "説明"]
    ],
    // 満貫
    [
        ["流し満貫", false, "説明"]
    ],
    // 役満
    [
        ["天和", false, "説明"],
        ["地和", false, "説明"],
        ["大三元", false, "説明"],
        ["清老頭", false, "説明"],
        ["字一色", false, "説明"],
        ["緑一色", false, "説明"],
        ["四暗刻", false, "説明"],
        ["四槓子", false, "説明"],
        ["小四喜", false, "説明"],
        ["国士無双", false, "説明"],
        ["九蓮宝燈", false, "説明"]
    ],
    // ダブル役満
    [
        ["四暗刻単騎", false, "説明"],
        ["大四喜", false, "説明"],
        ["国士無双十三面待ち", false, "説明"],
        ["純正九蓮宝燈", false, "説明"]
    ]
]

const localYakuList = [
    // 1飜
    [
        ["燕返し", false, "説明"],
        ["槓振り", false, "説明"],
        ["十二落抬", false, "説明"]
    ],
    // 2飜
    [
        ["五門斉", false, "説明"],
        ["三連刻", false, "説明"]
    ],
    // 3飜
    [
        ["一色三順", true, "説明"]
    ],
    // 6飜
    [],
    // 満貫
    [
        ["一筒摸月", false, "説明"],
        ["九筒撈魚", false, "説明"]
    ],
    // 役満
    [
        ["人和", false, "説明"],
        ["大車輪", false, "説明"],
        ["大竹林", false, "説明"],
        ["大数隣", false, "説明"],
        ["石の上にも三年", false, "説明"]
    ],
    // ダブル役満
    [
        ["大七星", false, "説明"]
    ]
]

const totalYakuList = [
    // 1飜
    [
        ["立直", false, "説明"],
        ["一発", false, "説明"],
        ["嶺上開花", false, "説明"],
        ["門前清自摸和", false, "説明"],
        ["海底摸月", false, "説明"],
        ["河底撈魚", false, "説明"],
        ["槍槓", false, "説明"],
        ["断幺九", false, "説明"],
        ["役牌:自風牌", false, "説明"],
        ["役牌:場風牌", false, "説明"],
        ["役牌:三元牌", false, "説明"],
        ["平和", false, "説明"],
        ["一盃口", false, "説明"],
        ["ドラ", false, "説明"],
        ["裏ドラ", false, "説明"],
        ["赤ドラ", false, "説明"],
        ["抜きドラ", false, "説明"],
        ["燕返し", false, "説明"],
        ["槓振り", false, "説明"],
        ["十二落抬", false, "説明"]
    ],
    // 2飜
    [
        ["ダブル立直", false, "説明"],
        ["一気通貫", true, "説明"],
        ["三色同刻", false, "説明"],
        ["三色同順", true, "説明"],
        ["対々和", false, "説明"],
        ["三暗刻", false, "説明"],
        ["三槓子", false, "説明"],
        ["小三元", false, "説明"],
        ["七対子", false, "説明"],
        ["混全帯幺九", true, "説明"],
        ["混老頭", false, "説明"],
        ["五門斉", false, "説明"],
        ["三連刻", false, "説明"]
    ],
    // 3飜
    [
        ["二盃口", false, "説明"],
        ["純全帯幺九", true, "説明"],
        ["混一色", true, "説明"],
        ["一色三順", true, "説明"]
    ],
    // 6飜
    [
        ["清一色", true, "説明"]
    ],
    // 満貫
    [
        ["流し満貫", false, "説明"],
        ["一筒摸月", false, "説明"],
        ["九筒撈魚", false, "説明"]
    ],
    // 役満
    [
        ["天和", false, "説明"],
        ["地和", false, "説明"],
        ["大三元", false, "説明"],
        ["清老頭", false, "説明"],
        ["字一色", false, "説明"],
        ["緑一色", false, "説明"],
        ["四暗刻", false, "説明"],
        ["四槓子", false, "説明"],
        ["小四喜", false, "説明"],
        ["国士無双", false, "説明"],
        ["九蓮宝燈", false, "説明"],
        ["人和", false, "説明"],
        ["大車輪", false, "説明"],
        ["大竹林", false, "説明"],
        ["大数隣", false, "説明"],
        ["石の上にも三年", false, "説明"]
    ],
    // ダブル役満
    [
        ["四暗刻単騎", false, "説明"],
        ["大四喜", false, "説明"],
        ["国士無双十三面待ち", false, "説明"],
        ["純正九蓮宝燈", false, "説明"],
        ["大七星", false, "説明"]
    ]
]


function appendYakuList(pages, list){
    for(let i=0; i<list.length; i++){
        const tab = document.createElement("button");
            tab.dataset.element = "tab";
            switch(i){
                case 0: tab.textContent = "一飜"; break;
                case 1: tab.textContent = "二飜"; break;
                case 2: tab.textContent = "三飜"; break;
                case 3: tab.textContent = "六飜"; break;
                case 4: tab.textContent = "満貫"; break;
                case 5: tab.textContent = "役満"; break;
                case 6: tab.textContent = "ダブル役満"; break;
                default: break;
            }

        const content = document.createElement("div");
            content.dataset.element = "content";

            for(const yaku of list[i]){
                const listDiv = document.createElement("div");
                    listDiv.dataset.element = "list";
                    const button = document.createElement("div");
                        button.dataset.element = "button";
                        button.textContent = yaku[0] + (yaku[1] ? "(食い下がりあり)" : "");
                    const item = document.createElement("div");
                        item.dataset.element = "item";
                        item.textContent = yaku[2];
                    listDiv.append(button, item);
                content.append(listDiv);
            }

        pages.append(tab, content);
    }
}

const normalYaku = document.getElementById("normalYaku");
    const normalPages = document.createElement("div");
        normalPages.dataset.element = "pages";
    appendYakuList(normalPages, normalYakuList);
normalYaku.appendChild(normalPages);

const totalYaku = document.getElementById("totalYaku");
    const totalPages = document.createElement("div");
        totalPages.dataset.element = "pages";
    appendYakuList(totalPages, totalYakuList);
totalYaku.appendChild(totalPages);

const localYaku = document.getElementById("localYaku");
    const localPages = document.createElement("div");
        localPages.dataset.element = "pages";
    appendYakuList(localPages, localYakuList);
localYaku.appendChild(localPages);