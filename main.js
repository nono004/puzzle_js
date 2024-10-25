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
document.getElementById('dropTarget-1').dataset.correct = 'piece-7';
document.getElementById('dropTarget-2').dataset.correct = 'piece-9';
document.getElementById('dropTarget-3').dataset.correct = 'piece-3';
document.getElementById('dropTarget-4').dataset.correct = 'piece-2';
document.getElementById('dropTarget-5').dataset.correct = 'piece-8';
document.getElementById('dropTarget-6').dataset.correct = 'piece-6';
document.getElementById('dropTarget-7').dataset.correct = 'piece-5';
document.getElementById('dropTarget-8').dataset.correct = 'piece-4';
document.getElementById('dropTarget-9').dataset.correct = 'piece-1';

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
        const correctPieceId = event.target.dataset.correct;
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
        const correctPieceId = target.dataset.correct;
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
