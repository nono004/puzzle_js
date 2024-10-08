document.querySelectorAll('.flame div').forEach(piece => {
    piece.addEventListener('dragstart', (event) => {
        //ドラッグ開始時にIDを保存
        event.dataTransfer.setData('text', event.target.id);
        console.log(`ドラッグ開始: ${event.target.id}`);
    })
});

document.querySelector('.flame').addEventListener('drop', (event) => {
    event.preventDefault();
    const draggedPieceId = event.dataTransfer.getData('text');
    console.log(`ドロップされたピースのID: ${draggedPieceId}`)
})

