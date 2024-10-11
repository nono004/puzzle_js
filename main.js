document.querySelectorAll('.flame div').forEach(piece => {
    piece.addEventListener('dragstart', (event) => {
        //ドラッグ開始時にピースのIDを保存
        event.dataTransfer.setData('text', event.target.id);
        console.log(`ドラッグ開始: ${event.target.id}`);
    })
});

//ドロップエリアと、その下のドロップターゲットを取得
const dropArea = document.getElementById('dropArea');
const dropTargets = dropArea.querySelectorAll("div");

dropTargets.forEach(target => {
    target.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
    target.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggedPieceId = event.dataTransfer.getData('text');
        console.log(`ドロップされたピースのID: ${draggedPieceId}`);
        //ドラッグされたピースを取得
        const draggedPiece = document.getElementById(draggedPieceId);
        event.target.appendChild(draggedPiece);
    })
});

