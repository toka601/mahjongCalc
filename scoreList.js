/**
 * 飜: 1, 2, 3, 4, 5, 6〜7, 8〜10, 11〜12, 13〜
 * 符: 20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110
 * 形式: ツモ(子to子), ツモ(子to親), ロン(子to), ツモ(親to), ロン(親to)
 */

const scoreList = [
    // 1飜
    [
        [0,0,0,0,0,""],
        [0,0,0,0,0,""],
        [3,5,10,5,15,""],
        [4,7,13,7,20,""],
        [4,8,16,8,24,""],//50符
        [5,10,20,10,29,""],
        [6,12,23,12,34,""],
        [7,13,26,13,39,""],
        [8,15,29,15,44,""],
        [8,16,32,16,48,""],//100符
        [9,18,36,18,53,""]
    ],
    // 2飜
    [
        [4,7,0,7,0,""],
        [0,0,16,0,24,""],
        [5,10,20,10,29,""],
        [7,13,26,13,39,""],
        [8,16,32,16,48,""],//50符
        [10,20,39,20,58,""],
        [12,23,45,23,68,""],
        [13,26,52,26,77,""],
        [15,29,58,29,87,""],
        [16,32,64,32,96,""],//100符
        [18,36,71,36,106,""]
    ],
    // 3飜
    [
        [7,13,0,13,0,""],
        [8,16,32,16,48,""],
        [10,20,39,20,58,""],
        [13,26,52,26,77,""],
        [16,32,64,32,96,""],//50符
        [20,39,77,39,116,""],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],//100符
        [20,40,80,40,120,"満貫"]
    ],
    // 4飜
    [
        [13,26,0,26,0,""],
        [16,32,64,32,96,""],
        [20,39,77,39,116,""],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],//50符
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],//100符
        [20,40,80,40,120,"満貫"]
    ],
    // 5飜
    [
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],//50符
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],
        [20,40,80,40,120,"満貫"],//100符
        [20,40,80,40,120,"満貫"]
    ],
    // 6飜,7飜
    [
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],//50符
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],
        [30,60,120,60,180,"跳貫"],//100符
        [30,60,120,60,180,"跳貫"]
    ],
    // 8飜,9飜,10飜
    [
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],//50符
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],
        [40,80,160,80,240,"倍満"],//100符
        [40,80,160,80,240,"倍満"]
    ],
    // 11飜,12飜
    [
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],//50符
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],
        [60,120,240,120,360,"三倍満"],//100符
        [60,120,240,120,360,"三倍満"],
    ],
    // 13飜以上
    [
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],//50符
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],
        [80,160,320,160,480,"役満"],//100符
        [80,160,320,160,480,"役満"]
    ]
]

function getScore(person, han, fu, hora){
    let hanIndex = -1;
    let fuIndex = -1;
    switch(han){
        case 1: hanIndex = 0; break;
        case 2: hanIndex = 1; break;
        case 3: hanIndex = 2; break;
        case 4: hanIndex = 3; break;
        case 5: hanIndex = 4; break;
        case 6:
        case 7: hanIndex = 5; break;
        case 8:
        case 9:
        case 10: hanIndex = 6; break;
        case 11:
        case 12: hanIndex = 7; break;
        default:
            if(han >= 13) hanIndex = 8;
            break;
    }
    switch(fu){
        case 20: fuIndex = 0; break;
        case 25: fuIndex = 1; break;
        case 30: fuIndex = 2; break;
        case 40: fuIndex = 3; break;
        case 50: fuIndex = 4; break;
        case 60: fuIndex = 5; break;
        case 70: fuIndex = 6; break;
        case 80: fuIndex = 7; break;
        case 90: fuIndex = 8; break;
        case 100: fuIndex = 9; break;
        case 110: fuIndex = 10; break;
    }

    return scoreList[hanIndex][fuIndex];
}


// ヘルプで表示するリストの作成
function appendScoreTable(list, index){
    const table = document.createElement("table");
        const tableHeadLabels = document.createElement("tr");
            for(let i=0; i<=4; i++){
                const th = document.createElement("th");
                th.classList.add("scoreListCell");
                if(i == 0){
                    th.classList.add("scoreListSideHeader");
                    if(index == 0 || index == 1 || index == 3){
                        th.textContent = "1人あたり";
                    }
                }else{
                    th.textContent = i + "飜";
                }
                tableHeadLabels.append(th);
            }
        table.append(tableHeadLabels);
        
        for(let fu=1; fu<=11; fu++){
            const tr = document.createElement("tr");
            for(let han=0; han<=4; han++){
                const td = document.createElement("td");
                td.classList.add("scoreListCell");
                if(han==0){
                    td.classList.add("scoreListSideHeader");
                    if(fu==1) td.textContent = "20符";
                    else if(fu==2) td.textContent = "25符";
                    else td.textContent = (fu * 10) + "符";
                }else{
                    td.textContent = scoreList[han-1][fu-1][index] * 100;
                    if(scoreList[han-1][fu-1][5] != ""){
                        // 満貫以上
                        td.style.color = "rgba(225, 100, 0, 1)";
                    }
                }
                tr.append(td);
            }
            table.append(tr);
        }
    list.append(table);


    const rankedScoreList = document.createElement("div");
    rankedScoreList.className = "rankedScoreList";
    
    // 4~8
    for(let i=4; i<=8; i++){
        const cell = document.createElement("div");
            cell.className = "rankedScoreCell";
            const hanCell = document.createElement("div");
            hanCell.className = "hanCell";
            cell.append(hanCell);
            const rankCell = document.createElement("div");
                rankCell.className = "rankCell";
                rankCell.textContent = scoreList[i][0][5];
            cell.append(rankCell);
            const scoreCell = document.createElement("div");
                scoreCell.className = "scoreCell";
                scoreCell.textContent = scoreList[i][0][index] * 100;
                scoreCell.style.color = "rgba(225, 100, 0, 1)";
            cell.append(scoreCell);
        rankedScoreList.append(cell);
    }
    rankedScoreList.children[0].children[0].textContent = "5飜";
    rankedScoreList.children[1].children[0].textContent = "6,7飜";
    rankedScoreList.children[2].children[0].textContent = "8,9,10飜";
    rankedScoreList.children[3].children[0].textContent = "11,12飜";
    rankedScoreList.children[4].children[0].textContent = "13飜以上";

    list.append(rankedScoreList);
}

appendScoreTable(document.getElementById("scoreList_rp"), 4);
appendScoreTable(document.getElementById("scoreList_rc"), 2);
appendScoreTable(document.getElementById("scoreList_tp"), 3);
appendScoreTable(document.getElementById("scoreList_tcp"), 1);
appendScoreTable(document.getElementById("scoreList_tcc"), 0);
