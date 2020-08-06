var canvas = document.getElementById('canvas');
var drawGrid = function() {
	var alien = [130,131,149,150,151,152,168,169,170,171,172,173,187,188,190,191,193,194,207,208,209,210,211,212,213,214,229,232,248,250,251,253,267,269,272,274];
	var columns = 20;
	var rows = 20;
	for (var row = 0; row <= rows; row++) {
		for(var column = 0; column <= columns; column++) {
			var pixel = document.createElement("input"); 
			pixel.type = 'checkbox';
			pixel.className = 'pixel';
			pixel.style.gridColumn = column;
			pixel.style.gridRow = row;
			var index = column + (row * rows);
			if(alien.includes(index)) {
				pixel.checked = true;
			}
			canvas.appendChild(pixel);
		}		
	}
};
drawGrid();