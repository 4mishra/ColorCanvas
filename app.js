import { addLayer, removeLayer } from './layer.js';



const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const brushSizeInput = document.getElementById("brushSize");
const addLayerButton = document.getElementById("addLayer");
const removeLayerButton = document.getElementById("removeLayer");
const brushColorInput = document.getElementById("brushColor");
const brushTextureSelect = document.getElementById("brushTexture");
const clearCanvasButton = document.getElementById("clearCanvas");
const dropdownButton = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');


function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Attach clear canvas function to button
clearCanvasButton.addEventListener("click", clearCanvas);

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

let isDrawing = false;
let layers = []; // Array to store layers
let activeLayerIndex = 0; // Index of the active layer


// Attach layer functions to buttons
addLayerButton.addEventListener("click", addLayer);
removeLayerButton.addEventListener("click", removeLayer);

// Attach layer selection
layerSelect.addEventListener("change", (event) => {
    setActiveLayer(parseInt(event.target.value));
});

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath();
}

function draw(e) {
    if (!isDrawing) return;

    const brushSize = brushSizeInput.value;
    const brushColor = brushColorInput.value;

    // Set the brush texture based on the user's selection
    brushTexture = brushTextureSelect.value;
    
    context.lineWidth = brushSize;
    // context.lineWidth = brushSize / zoomLevel; // Adjust line width 
    context.lineCap = "round";
    context.strokeStyle = brushColor;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

