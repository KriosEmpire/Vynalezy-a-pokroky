var window1;
var verze = parseInt(navigator.appVersion);
function openWindow(picture) {


	window1 = window.open("", "window1", "width=1000, height=700, self.status='Velký obrázek', self.resizable='no', innerWidth=1000, innerHeight=700, noResize='true', window.locationbar.visible='false', window1.menubar.visible='false', window.personalbar.visible='false', window1.scrollbar.visible='false', window.statusbar.visible='false', self.toolbar.visible='false', self.defaultStatus='Velký obrázek'")

	if ( verze > 3 ) {
		vyska = screen.height;
		sirka = screen.width;
		var levy = (sirka - 1000)/2;
		var horni = (vyska - 700)/2
//		window1.resizeTo(604, 312);
		window1.moveTo(levy, horni);
	}

	sayHello();

	window1.document.write("<html><head><link rel='stylesheet' href='../../../styles/popup.css' type='text/css' media='screen'></head><body onLoad='sayHello()' onClick='self.close()' onKeyDown='self.close()'><img src='" + picture + "' width='950' title='Kliknutím či stlačením jakéhokoli tlačítka zavřete'></body></html>")

// ../../../icons/empty.gif
//"../../../pictures/ships/kreuzlnd/brandenb/weapons/110918/10.jpg"
// width='1200' height='900'

	window1.document.close()
}

function sayHello() {
	self.title = "Ahoj";
	self.status = "Hello!";
	window.title = "Ahoj";
	window.status = "Hello!";
	window1.title = "Ahoj";
	window1.status = "Hello!";
}

function closeWindow() {
	if (window1 && !window1.closed) {
		window1.close()
	}
}
