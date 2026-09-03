document.getElementById("resultButton").addEventListener(
    "click",
    ()=>{

        const jicha = document.querySelector('input[name="jicha"]:checked')?.value;
        if(!jicha){
            // 記載していない箇所がある(自家)
            console.log("無記入の欄がある");
            return;
        }
        const han = document.getElementById("han").value;
        let point = 20;
        const hora = document.querySelector('input[name="hora"]:checked')?.value;
        const chun_m3 = document.getElementById("chun_m3").value;
        const chun_a3 = document.getElementById("chun_a3").value;
        const chun_m4 = document.getElementById("chun_m4").value;
        const chun_a4 = document.getElementById("chun_a4").value;
        const yao_m3 = document.getElementById("yao_m3").value;
        const yao_a3 = document.getElementById("yao_a3").value;
        const yao_m4 = document.getElementById("yao_m4").value;
        const yao_a4 = document.getElementById("yao_a4").value;
        const janto = document.querySelector('input[name="janto"]:checked')?.value;
        const machi = document.querySelector('input[name="machi"]:checked')?.value;
        const exception = document.querySelector('input[name="exception"]:checked')?.value;

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

        switch(machi){
            case "tanki":
            case "kanchan":
            case "penchan":
                point += 2;
                break;
            default:
                break;
        }
        
        point +=  2*parseInt(chun_m3,10) +  4*parseInt(yao_m3,10)
               +  4*parseInt(chun_a3,10) +  8*parseInt(yao_a3,10)
               +  8*parseInt(chun_m4,10) + 16*parseInt(yao_m4,10)
               + 16*parseInt(chun_a4,10) + 32*parseInt(yao_a4,10);

        // 繰り上げた符
        let resultPoint = Math.ceil(point / 10) * 10;

        if(exception === "pinfu" && hora === "tsumo"){
            // 平和のツモ
            resultPoint = 20;
        }else if(exception === "chitoi"){
            resultPoint = 25;
        }else{
            resultPoint = Math.max(resultPoint, 30);
        }

        // ツモ(子to子), ツモ(子to親), ロン(子to), ツモ(親to), ロン(親to)
        const score = getScore(jicha, Number(han), resultPoint, hora);

        document.getElementById("resultFu").textContent = point + "符 → " + resultPoint + "符";
        
        if(hora === "tsumo"){
            if(jicha === "parent"){
                document.getElementById("resultScore0").textContent = "子: " + (score[3] * 100) + "点";
                document.getElementById("resultScore1").textContent = "";
                document.getElementById("resultScoreT").textContent = "計: " + ((score[3] + score[3]) * 100) + "点";
            }else{
                document.getElementById("resultScore0").textContent = "子: " + (score[0] * 100) + "点";
                document.getElementById("resultScore1").textContent = "親: " + (score[1] * 100)+ "点";
                document.getElementById("resultScoreT").textContent = "計: " + ((score[0] + score[1]) * 100) + "点";
            }
        }else{// ロン
            if(jicha === "parent"){
                document.getElementById("resultScore0").textContent = "";
                document.getElementById("resultScore1").textContent = "";
                document.getElementById("resultScoreT").textContent = "計: " + (score[4] * 100) + "点";
            }else{
                document.getElementById("resultScore0").textContent = "";
                document.getElementById("resultScore1").textContent = "";
                document.getElementById("resultScoreT").textContent = "計: " + (score[2] * 100) + "点";
            }
        }
        document.getElementById("resultJudge").textContent = score[5];
    }
);