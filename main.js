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
    })
});

