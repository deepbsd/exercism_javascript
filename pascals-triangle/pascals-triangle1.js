function Triangle(num){
	this.num = num;
	this.rows = this.getLines(this.num);
	this.lastRow = this.rows[num-1]
}

Triangle.prototype.getLines = function(num){
	var arr =[];
	for (var row=1; row<=num; row++){
		if (row === 1) { arr.push([1]);  }
		if (row === 2) { arr.push([1,1]);  }
		if (row === 3) { arr.push([1,2,1]);  }
		if (row > 3) {
			var arr2 = [];
			// row length cannot be longer than the previous line
			// we add the final '1' after this loop
			for (var position=0; position<row-1; position++){
				if (position === 0) { 
					arr2.push(1)
				} else {
					arr2.push(arr[row-2][position]+arr[row-2][position-1])
				}
			}
			arr2.push(1)  // end row with a 1
			arr.push(arr2)
		}
	}
	return arr;
}


module.exports = Triangle;