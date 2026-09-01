const resetButton = document.getElementById("resetButton");


resetButton.addEventListener("click", () => {
    // ラジオボタンを初期状態に戻す
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.checked = input.defaultChecked;
    });

    // セレクトボックスを初期状態に戻す
    document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = 0;
    });

    // 計算結果を初期状態に戻す
    document.getElementById("resultFu").textContent = "0符 → 0符";
    document.getElementById("resultScore0").textContent = "";
    document.getElementById("resultScore1").textContent = "";
    document.getElementById("resultJudge").textContent = "";
    document.getElementById("resultScoreT").textContent = "";

    // 面子テーブルの色を初期状態に戻す
    document.querySelectorAll("#mentsuTable td").forEach(td => {
        td.style.backgroundColor = "";
    });
});
