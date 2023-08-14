// Function to add a new layer
export function addLayer() {
    layers.push(document.createElement("canvas"));
    layers[layers.length - 1].width = canvas.width;
    layers[layers.length - 1].height = canvas.height;
    layerSelect.appendChild(new Option(`Layer ${layers.length}`, layers.length - 1));
    setActiveLayer(layers.length - 1);
}

// Function to remove the active layer
export function removeLayer() {
    if (layers.length > 1) {
        layers.splice(activeLayerIndex, 1);
        layerSelect.remove(activeLayerIndex);
        setActiveLayer(Math.max(activeLayerIndex - 1, 0));
    }
}

// Function to set the active layer
function setActiveLayer(index) {
    activeLayerIndex = index;
    layerSelect.selectedIndex = index;
    redrawCanvas();
}
