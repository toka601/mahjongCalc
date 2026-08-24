function getScore(person, han, fu, hora){
    if(person === "parent"){//=====================================================================================
        if(hora === "tsumo"){// 親のツモ
            switch(han){
                case 1:
                    switch(fu){
                        case 20:
                        case 25: return [0,0];
                        case 30: return [500,500];
                        case 40: return [700,700];
                        case 50: return [800,800];
                        case 60: return [1000,1000];
                        case 70: return [1200,1200];
                        case 80: return [1300,1300];
                        case 90: return [1500,1500];
                        case 100: return [1600,1600];
                        case 110:
                        default: return [0,0];
                    }
                case 2:
                    switch(fu){
                        case 20: return [700,700];
                        case 25: return [0,0];
                        case 30: return [1000,1000];
                        case 40: return [1300,1300];
                        case 50: return [1600,1600];
                        case 60: return [2000,2000];
                        case 70: return [2300,2300];
                        case 80: return [2600,2600];
                        case 90: return [2900,2900];
                        case 100: return [3200,3200];
                        case 110: return [3600,3600];
                        default: return [0,0];
                    }
                case 3:
                    switch(fu){
                        case 20: return [1300,1300];
                        case 25: return [1600,1600];
                        case 30: return [2000,2000];
                        case 40: return [2600,2600];
                        case 50: return [3200,3200];
                        case 60: return [3900,3900];
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [4000,4000];
                        default: return [0,0];
                    }
                case 4:
                    switch(fu){
                        case 20: return [2600,2600];
                        case 25: return [3200,3200];
                        case 30: return [3900,3900];
                        case 40: 
                        case 50: 
                        case 60: 
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [4000,4000];
                        default: return [0,0];
                    }
                case 5:
                    // 満貫
                    return [4000, 4000];
                case 6:
                case 7:
                    // 跳満
                    return [6000, 6000];
                case 8:
                case 9:
                case 10:
                    // 倍満
                    return [8000, 8000];
                case 11:
                case 12:
                    // 3倍満
                    return [12000, 12000];
                case 13:
                    return [16000, 16000];
                default:
                    return [0,0];
            }
        }else{// 親のロン
            switch(han){
                case 1:
                    switch(fu){
                        case 20:
                        case 25: return [0,0];
                        case 30: return [1500,1500];
                        case 40: return [2000,2000];
                        case 50: return [2400,2400];
                        case 60: return [2900,2900];
                        case 70: return [3400,3400];
                        case 80: return [3900,3900];
                        case 90: return [4400,4400];
                        case 100: return [4800,4800];
                        case 110: return [5300,5300];
                        default: return [0,0];
                    }
                case 2:
                    switch(fu){
                        case 20: return [0,0];
                        case 25: return [2400,2400];
                        case 30: return [2900,2900];
                        case 40: return [3900,3900];
                        case 50: return [4800,4800];
                        case 60: return [5800,5800];
                        case 70: return [6800,6800];
                        case 80: return [7700,7700];
                        case 90: return [8700,8700];
                        case 100: return [9600,9600];
                        case 110: return [10600,10600];
                        default: return [0,0];
                    }
                case 3:
                    switch(fu){
                        case 20: return [0,0];
                        case 25: return [4800,4800];
                        case 30: return [5800,5800];
                        case 40: return [7700,7700];
                        case 50: return [9600,9600];
                        case 60: return [11600,11600];
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [12000,12000];
                        default: return [0,0];
                    }
                case 4:
                    switch(fu){
                        case 20: return [0,0];
                        case 25: return [9600,9600];
                        case 30: return [11600,11600];
                        case 40: 
                        case 50: 
                        case 60: 
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [12000,12000];
                        default: return [0,0];
                    }
                case 5:
                    // 満貫
                    return [12000, 12000];
                case 6:
                case 7:
                    // 跳満
                    return [18000, 18000];
                case 8:
                case 9:
                case 10:
                    // 倍満
                    return [24000, 24000];
                case 11:
                case 12:
                    // 3倍満
                    return [36000, 36000];
                case 13:
                    return [48000, 48000];
                default:
                    return [0,0];
            }
        }
    }else{// child===================================================================================================
        if(hora === "tsumo"){// 子のツモ
            switch(han){
                case 1:
                    switch(fu){
                        case 20:
                        case 25: return [0,0];
                        case 30: return [300,500];
                        case 40: return [400,700];
                        case 50: return [400,800];
                        case 60: return [500,1000];
                        case 70: return [600,1200];
                        case 80: return [700,1300];
                        case 90: return [800,1500];
                        case 100: return [800,1600];
                        case 110:
                        default: return [0,0];
                    }
                case 2:
                    switch(fu){
                        case 20: return [400,700];
                        case 25: return [0,0];
                        case 30: return [500,1000];
                        case 40: return [700,1300];
                        case 50: return [800,1600];
                        case 60: return [1000,2000];
                        case 70: return [1200,2300];
                        case 80: return [1300,2600];
                        case 90: return [1500,2900];
                        case 100: return [1600,3200];
                        case 110: return [1800,3600];
                        default: return [0,0];
                    }
                case 3:
                    switch(fu){
                        case 20: return [700,1300];
                        case 25: return [800,1600];
                        case 30: return [1000,2000];
                        case 40: return [1300,2600];
                        case 50: return [1600,3200];
                        case 60: return [2000,3900];
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [2000,4000];
                        default: return [0,0];
                    }
                case 4:
                    switch(fu){
                        case 20: return [1300,2600];
                        case 25: return [1600,3200];
                        case 30: return [2000,3900];
                        case 40: 
                        case 50: 
                        case 60: 
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [2000,4000];
                        default: return [0,0];
                    }
                case 5:
                    // 満貫
                    return [2000, 4000];
                case 6:
                case 7:
                    // 跳満
                    return [3000, 6000];
                case 8:
                case 9:
                case 10:
                    // 倍満
                    return [4000, 8000];
                case 11:
                case 12:
                    // 3倍満
                    return [6000, 12000];
                case 13:
                    return [8000, 16000];
                default:
                    return [0,0];
            }
        }else{// 子のロン
            switch(han){
                case 1:
                    switch(fu){
                        case 20:
                        case 25: return [0,0];
                        case 30: return [1000,1000];
                        case 40: return [1300,1300];
                        case 50: return [1600,1600];
                        case 60: return [2000,2000];
                        case 70: return [2300,2300];
                        case 80: return [2600,2600];
                        case 90: return [2900,2900];
                        case 100: return [3200,3200];
                        case 110: return [3600,3600];
                        default: return [0,0];
                    }
                case 2:
                    switch(fu){
                        case 20: return [0,0];
                        case 25: return [1600,1600];
                        case 30: return [2000,2000];
                        case 40: return [2600,2600];
                        case 50: return [3200,3200];
                        case 60: return [3900,3900];
                        case 70: return [4500,4500];
                        case 80: return [5200,5200];
                        case 90: return [5800,5800];
                        case 100: return [6400,6400];
                        case 110: return [7100,7100];
                        default: return [0,0];
                    }
                case 3:
                    switch(fu){
                        case 20: return [0,0];
                        case 25: return [3200,3200];
                        case 30: return [3900,3900];
                        case 40: return [5200,5200];
                        case 50: return [6400,6400];
                        case 60: return [7700,7700];
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [8000,8000];
                        default: return [0,0];
                    }
                case 4:
                    switch(fu){
                        case 20: return [0,0];
                        case 25: return [6400,6400];
                        case 30: return [7700,7700];
                        case 40: 
                        case 50: 
                        case 60: 
                        case 70: 
                        case 80: 
                        case 90: 
                        case 100: 
                        case 110: return [8000,8000];
                        default: return [0,0];
                    }
                case 5:
                    // 満貫
                    return [8000, 8000];
                case 6:
                case 7:
                    // 跳満
                    return [12000, 12000];
                case 8:
                case 9:
                case 10:
                    // 倍満
                    return [16000, 16000];
                case 11:
                case 12:
                    // 3倍満
                    return [24000, 24000];
                case 13:
                    return [32000, 32000];
                default:
                    return [0,0];
            }
        }
    }
}



const button = document.getElementById("resultButton");

button.addEventListener(
    "click",
    ()=>{
        console.log("ああ");
        let point = 20;

        const hora = document.querySelector('input[name="hora"]:checked')?.value;
        switch(hora){
            case "tsumo":
                point += 2;
                break;
            case "ron":
                point += 10;
                break;
            default:
                break;
        }

        const janto = document.querySelector('input[name="janto"]:checked')?.value;
        switch(janto){
            case "renfu":
                point += 2;
            case "jifu":
            case "bafu":
            case "sangen":
                point += 2;
                break;
            default:
                break;
        }

        const machi = document.querySelector('input[name="machi"]:checked')?.value;
        switch(machi){
            case "tanki":
            case "kanchan":
            case "penchan":
                point += 2;
                break;
            default:
                break;
        }


        const chun_m3 = document.getElementById("chun_m3").value;
        const chun_a3 = document.getElementById("chun_a3").value;
        const chun_m4 = document.getElementById("chun_m4").value;
        const chun_a4 = document.getElementById("chun_a4").value;
        const yao_m3 = document.getElementById("yao_m3").value;
        const yao_a3 = document.getElementById("yao_a3").value;
        const yao_m4 = document.getElementById("yao_m4").value;
        const yao_a4 = document.getElementById("yao_a4").value;
        
        point +=  2*parseInt(chun_m3,10) +  4*parseInt(yao_m3,10)
               +  4*parseInt(chun_a3,10) +  8*parseInt(yao_a3,10)
               +  8*parseInt(chun_m4,10) + 16*parseInt(yao_m4,10)
               + 16*parseInt(chun_a4,10) + 32*parseInt(yao_a4,10);

        // 繰り上げた符
        let resultPoint = Math.ceil(point / 10) * 10;

        const exception = document.querySelector('input[name="exception"]:checked')?.value;
        switch(exception){
            case "pinfu":
                resultPoint = 20;
                break;
            case "chitoi":
                resultPoint = 25;
                break;
            default:
                resultPoint = Math.max(resultPoint, 30);
                break;
        }

        document.getElementById("resultFu").textContent = point;
        document.getElementById("finalResultFu").textContent = resultPoint;

        const jicha = document.querySelector('input[name="jicha"]:checked')?.value;
        const numOfHan = document.getElementById("han").value;
        const score = getScore(jicha, Number(numOfHan), resultPoint, hora);

        if(hora === "tsumo"){
            if(jicha === "parent"){
                document.getElementById("resultScore0").textContent = "子: " + score[0] + "点";
                document.getElementById("resultScoreT").textContent = "計: " + (score[0] + score[0]) + "点";
            }else{
                document.getElementById("resultScore0").textContent = "子: " + score[0] + "点";
                document.getElementById("resultScore1").textContent = "親: " + score[1] + "点";
                document.getElementById("resultScoreT").textContent = "計: " + (score[0] + score[1]) + "点";
            }
        }else{// ロン
            document.getElementById("resultScore0").textContent = "計: " + score[0] + "点";
        }
    }
);