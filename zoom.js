let zoomLevel = 1; // Initial zoom level
const zoomStep = 0.1; // Zoom step value

// Function to handle zoom in
function zoomIn() {
    zoomLevel += zoomStep;
    updateCanvasZoom();
}

// Function to handle zoom out
function zoomOut() {
    if (zoomLevel > zoomStep) {
        zoomLevel -= zoomStep;
        updateCanvasZoom();
    }
}

// Function to update canvas scaling based on zoom level
function updateCanvasZoom() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.scale(zoomLevel, zoomLevel);
    redrawCanvas(); // Redraw your canvas content
    context.restore();
}
