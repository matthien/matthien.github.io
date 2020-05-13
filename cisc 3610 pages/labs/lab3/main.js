var oldSave = { 
	oldTitle: undefined,
	oldText: undefined
};

	function storeTitleLocal(e) {
		oldTitleLocal(localStorage.getItem("title"));
		localStorage.setItem('title', e);
	};
	
	function storeTextLocal(e) { 
		oldTextLocal(localStorage.getItem("textarea"));
		localStorage.setItem('text', e);
	};
	
	function onLoad() { 
		var element = document.getElementById('titleText');
		var titleValue=localStorage.getItem("title");
		element.value = titleValue;
		
		var textElement = document.getElementById('textarea');
		var textValue = localStorage.getItem("text");
		textElement.value = textValue;
	};
	
	function oldTitleLocal(e) { 
		oldSave.oldTitle = e;
	};
	
	function oldTextLocal(e) { 
		oldSave.oldText = e;
	};
	
	function undoButton() { 
		document.getElementById("titleText").value = oldSave.oldTitle;
		document.getElementById("textarea").value = oldSave.oldText;
	};
	
	function clearButton() { 
		document.getElementById("titleText").value = " ";
		document.getElementById("textarea").value = " ";
	}
	
	document.addEventListener('DOMContentLoaded', onLoad);