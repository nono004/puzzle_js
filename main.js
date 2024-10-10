document.querySelectorAll('.flame div').forEach(piece => {
    piece.addEventListener('dragstart', (event) => {
        //ドラッグ開始時にIDを保存
        event.dataTransfer.setData('text', event.target.id);
        console.log(`ドラッグ開始: ${event.target.id}`);
    })
});

const dropArea = document.getElementById('dropTarget')
dropArea.addEventListener('dragover', (event) =>{
    event.preventDefault();
})

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    const draggedPieceId = event.dataTransfer.getData('text');
    console.log(`ドロップされたピースのID: ${draggedPieceId}`);
    //ドラッグされたピースを取得
    const draggedPiece = document.getElementById(draggedPieceId);
    dropArea.appendChild(draggedPiece);
})

