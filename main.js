document.querySelectorAll('.flame div').forEach(piece => {
    piece.addEventListener('dragstart', (event) => {
        //ドラッグ開始時にピースのID、幅、高さを保存
        event.dataTransfer.setData('ID', event.target.id);
        event.dataTransfer.setData('width', window.getComputedStyle(event.target).width);
        event.dataTransfer.setData('height', window.getComputedStyle(event.target).height);
        console.log(`ドラッグ開始: ${event.target.id}`);
    })
});

//ドロップエリアと、その下のドロップターゲットを取得
const dropArea = document.getElementById('dropArea');
const dropTargets = dropArea.querySelectorAll("div");

//各ターゲットに対して正しいピースのIDをセット
document.getElementById('dropTarget-1').setAttribute('data-correct', 'piece-3');
document.getElementById('dropTarget-2').setAttribute('data-correct', 'piece-4');
document.getElementById('dropTarget-3').setAttribute('data-correct', 'piece-9');
document.getElementById('dropTarget-4').setAttribute('data-correct', 'piece-2');
document.getElementById('dropTarget-5').setAttribute('data-correct', 'piece-6');
document.getElementById('dropTarget-6').setAttribute('data-correct', 'piece-8');
document.getElementById('dropTarget-7').setAttribute('data-correct', 'piece-1');
document.getElementById('dropTarget-8').setAttribute('data-correct', 'piece-5');
document.getElementById('dropTarget-9').setAttribute('data-correct', 'piece-7');

dropTargets.forEach(target => {
    target.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    target.addEventListener('drop', (event) => {
        event.preventDefault();
        //ドラッグされているピースのID、幅、高さを取得
        const draggedPieceId = event.dataTransfer.getData('ID');
        const draggedPieceWidth = event.dataTransfer.getData('width');
        const draggedPieceHeight = event.dataTransfer.getData('height');
        console.log(`ドロップされたピースのID: ${draggedPieceId}`);
        //ドラッグされたピースを取得
        const draggedPiece = document.getElementById(draggedPieceId);
        //幅と高さを取得
        draggedPiece.style.width = draggedPieceWidth;
        draggedPiece.style.height = draggedPieceHeight;
        event.target.appendChild(draggedPiece);
        //正誤判定
        const correctPieceId = event.target.getAttribute('data-correct');
        if(draggedPieceId === correctPieceId){
            console.log('correct');
        }else{
            console.log('wrong');
        }
    })
});

// 判定ボタンをクリックして全体の正誤を確認する
document.getElementById('checkButton').addEventListener('click', () => {
    let isCorrect = true;
    dropTargets.forEach(target => {
        const correctPieceId = target.getAttribute('data-correct');
        const droppedPiece = target.querySelector('div');
        // ピースが配置されているかと、正しいかを確認
        if (droppedPiece && droppedPiece.id === correctPieceId) {
            console.log(`ターゲット ${target.id} に正しいピースが配置されています`);
        } else {
            isCorrect = false;
            console.log(`ターゲット ${target.id} に間違ったピースが配置されています`);
        }
    });

    if (isCorrect) {
        alert('すべて正解です！');
    } else {
        alert('不正解があります。');
    }
});
