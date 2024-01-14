import './TierList.css'

export default function TierList() {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', event.currentTarget.id)
  }

  const onDoubleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const unrankedDropZone = document.getElementById("unranked-drop-zone");
    const item = event.currentTarget;

    if (unrankedDropZone && item.parentNode !== unrankedDropZone) {
      unrankedDropZone.appendChild(item);
    }
  }

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const draggedItemId = event.dataTransfer.getData("text/plain");
    const draggedItem = document.getElementById(draggedItemId);

    if (event.currentTarget !== draggedItem?.parentNode) {
      event.currentTarget.appendChild(draggedItem!);
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div id="wrapper">
      <section className="tier-section">
        <h1>A Tier</h1>
        <div className="drop-zone" onDrop={onDrop} onDragOver={onDragOver}></div>
      </section>
      <section className="tier-section">
        <h1>B Tier</h1>
        <div className="drop-zone" onDrop={onDrop} onDragOver={onDragOver}></div>
      </section>
      <section className="tier-section">
        <h1>C Tier</h1>
        <div className="drop-zone" onDrop={onDrop} onDragOver={onDragOver}></div>
      </section>

      <section className="tier-section" id="unranked-section">
        <h1>Unranked</h1>
        <div className="drop-zone" id="unranked-drop-zone" onDrop={onDrop} onDragOver={onDragOver}>
          <div draggable="true" id="blue" className="item" onDragStart={onDragStart}
               onDoubleClick={onDoubleClick}></div>
          <div draggable="true" id="red" className="item" onDragStart={onDragStart} onDoubleClick={onDoubleClick}></div>
          <div draggable="true" id="green" className="item" onDragStart={onDragStart}
               onDoubleClick={onDoubleClick}></div>
        </div>
      </section>
    </div>
  )
}
