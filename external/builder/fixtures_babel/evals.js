var a = typeof PDFJSDev === 'undefined';
var b = typeof PDFJSDev !== 'undefined';
var c = PDFJSDev.test('TRUE');
var d = PDFJSDev.test('FALSE');
var e = PDFJSDev.eval('TRUE');
var f = PDFJSDev.eval('TEXT');
var g = PDFJSDev.eval('OBJ');
var i = typeof PDFJSDev === 'undefined' ? PDFJSDev.eval('FALSE') : '0';
var j = typeof PDFJSDev !== 'undefined' ? PDFJSDev.eval('OBJ.obj') : '0';
var k = !PDFJSDev.test('TRUE');
var l = !PDFJSDev.test('FALSE');
