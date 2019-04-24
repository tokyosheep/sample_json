/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

/*
function loadjson(){//デバッグ用json取得関数
    var f = new File($.fileName);//jsonを読みこむ前にjsonのパスをjsxのパスから相対的に調べる
    var jsx = f.parent;
    var main_folder = jsx.parent;
    $.writeln(main_folder);
    var path = main_folder+"/js/preset.json";
    var json = new File(path);//読み込み
    var flag = json.open("r");
    if(flag){
        var dog = json.read();
        $.write(dog);
        $.writeln(typeof dog);
        json.close();
    }
   
}
*/
/*
function typeOfObject(obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return clas;
}

function loadjson(){//デバッグ用json取得関数
    #include "json2.js";//json2読み込み
    var f = new File($.fileName);
    var jsx = f.parent;
    var main_folder = jsx.parent;
    var path = main_folder+"/js/preset.json";
    var json = new File(path);
    flag = json.open("r");
    if(flag){
        var dog = json.read();
        var obj = JSON.parse(dog);
        for(prop in obj){
            $.writeln(obj[prop]);
        }
        $.writeln("typeof:"+typeof obj);
        $.writeln("object:"+obj);
        json.close();
    }
}
*/

function Dog(obj){
    preferences.rulerUnits = Units.PIXELS;
    documents.add(320,240);
    var pointColor = new SolidColor;//テキストの色を定義
        pointColor.rgb.red = 0;
        pointColor.rgb.green = 0;
        pointColor.rgb.blue = 0;
    
    for(var prop in obj){
        text(pointColor,prop+":"+obj[prop]);
    }

    function text(color,content){
        layer = app.activeDocument.artLayers.add();
        var w = activeDocument.width;
        var h = activeDocument.height;

        layer.kind = LayerKind.TEXT;
        layer.textItem.position = Array(w/5,h/2); //座標
        layer.textItem.contents = content;
        layer.textItem.size = 50 ;
        layer.textItem.color = color; //色
    }
    
}

function returnMasaru(obj){
    obj.feed = "meat";
    return JSON.stringify(obj);
}
