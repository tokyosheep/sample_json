/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/


window.onload = function(){
    `use strict`;
    const fs = require(`fs`);
    const csInterface = new CSInterface();
    themeManager.init();
    const filePath = csInterface.getSystemPath(SystemPath.EXTENSION) +`/js/`;//Extensionのパスを取得
    const json_path = filePath + `preset.json`;//書き出しjson用のパス。
    const btn = document.getElementById(`btn_test`);
    const obj = {
        name:"masaru",
        animal:"dog",
        age:3,
        feed:""
    }
    
    function loadJSX (fileName) {
        console.log(csInterface.getSystemPath(SystemPath.EXTENSION) + fileName);
        csInterface.evalScript(`$.evalFile("${csInterface.getSystemPath(SystemPath.EXTENSION) + fileName}")`);
    }
    loadJSX("/jsx/json2.js");
    
    btn.addEventListener(`click`,()=>{
        console.log(obj);
        csInterface.evalScript(`returnMasaru(${JSON.stringify(obj)})`,(o)=>{
            const MasaruInHome = JSON.parse(o);
            console.log(MasaruInHome);
        })
        
        /*fs.writeFile(json_path,JSON.stringify(obj,null,4),(err)=>{//デバッグ用にjson書き出し
            if(err){
                alert(err);
            }
        })
        */
    });
    
}
    