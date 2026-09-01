function createItem(text){
    const item = document.createElement("div");
        item.dataset.element = "item";
        item.textContent = text;
    return item;
}
function createButton(text){
    const button = document.createElement("div");
        button.dataset.element = "button";
        button.textContent = text;
    return button;
}
function createList(...nodes){
    const list = document.createElement("div");
        list.dataset.element = "list";
        for(const node of nodes){ list.appendChild(node); }
    return list;
}





const descContent = document.getElementById("descContent");
    descContent.append(
        createList(
            createButton("プレイヤーについて"),
            createItem("自家(ｼﾞﾁｬ)...自身のこと。本サイトでは和了した人を指す。"),
            createItem("他家(ﾀｰﾁｬ)...他のプレイヤーのこと。")
        )
    );

    descContent.append(
        createList(
            createButton("牌の種類について"),
            createList(
                createButton("数牌(ｽｰﾊｲ/ｼｭｰﾊﾟｲ)...萬子、筒子、索子"),
                createItem("中張牌(ﾁｭﾝﾁｬﾝﾊﾟｲ)...2～8の数牌"),
                createItem("尖張牌(ｾﾝﾁｬﾝﾊﾟｲ)...3,7の数牌。一番受け入れが多くなりやすく、それを捨て牌にすることは、聴牌に近いとされている。"),
                createItem("老頭牌(ﾛｰﾄｰﾊｲ/ﾗｵﾄｰﾊﾟｲ)...1,9の数牌")
            ),
            createList(
                createButton("字牌(ｼﾞﾊｲ/ﾂｰﾊﾟｲ)...数牌以外の7種類"),
                createList(
                    createButton("風牌(ｶｾﾞﾊｲ/ﾌｰﾊｲ/ﾌｫﾝﾊﾟｲ)...東南西北"),
                    createItem("自風牌(ｼﾞｶｾﾞﾊｲ)...自家の座る位置の風牌。その牌の刻子があれば役になる。"),
                    createItem("場風牌(ﾊﾞｶｾﾞﾊｲ)...その局に対応した風牌。その牌の刻子があれば役になる。荘風牌(ｼｮｰﾌｰﾊﾟｲ/ﾁｬﾝﾌｫﾝﾊﾟｲ)とも言われる"),
                    createItem("連風牌(ﾚﾝﾌﾟｳﾊｲ)...自風と場風が同じ場合の牌の呼称。東場で自風が東だと「ダブ東」とも言われる。"),
                    createItem("客風牌(ｷｬｸﾌｰﾊｲ)...別名「オタ風牌(ｵﾀｶｾﾞﾊｲ)」上記3種に当てはまらない風牌。")
                ),
                createItem("三元牌(ｻﾝｹﾞﾝﾊﾟｲ)...白發中"),
                createItem("役牌(ﾔｸﾊｲ)...客風牌以外の5種、または4種の字牌。")
            ),
            createItem("幺九牌(ﾔｵﾁｭｰﾊｲ)...老頭牌(1,9)と字牌のこと。")
        ),
        createList(
            createButton("待ちについて"),
            createItem("単騎待ち(ﾀﾝｷﾏﾁ)...4つの面子が完成していて、雀頭を待っている状態。待ちが一面であることではない。"),
            createItem("嵌張待ち(ｶﾝﾁｬﾝﾏﾁ)...順子の中央部分を待ちにしている状態。"),
            createItem("辺張待ち(ﾍﾟﾝﾁｬﾝﾏﾁ)...1,2があり3のみを待つ状態、または9,8があり7のみを待つ状態のこと。"),
            createItem("両面待ち(ﾘｬﾝﾒﾝﾏﾁ)...2~8のうち連続する2つの牌があり、順子の両端の2つを待っている状態。"),
            createItem("双碰待ち(ｼｬﾝﾎﾟﾝﾏﾁ)...3つの面子と2つの対子があり、どちらか片方の対子を雀頭、もう片方を刻子にする待ち。")
        ),
        createList(
            createButton("振り聴(ﾌﾘﾃﾝ)...形が完成してもロンできない待ちの状態。ツモはできる。"),
            createItem("捨て牌による振り聴...自身の河に待ち牌があった場合、ツモ和了以外できなくなる。"),
            createItem("同巡の振り聴...他家が捨てた和了牌を見逃した場合、次にツモ番が回ってくるまで和了できない。"),
            createItem("リーチ後の振り聴...リーチした後に他家が捨てた和了牌を見逃した場合、ツモ和了以外できなくなる。")
        ),
        createList(
            createButton("その他"),
            createItem("副底(ﾌｰﾃｲ)...符計算での最低点数。あらかじめ足されている20点。")
        )
    );