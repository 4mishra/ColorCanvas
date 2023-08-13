// Function to clear the canvas
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    layers.forEach((layer) => {
        layer.getContext("2d").clearRect(0, 0, layer.width, layer.height);
    });
}
