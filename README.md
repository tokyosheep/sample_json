# sample_json
Adobe CEPにおいてのExtensionのパネルとjsxのやりとりのサンプルになります。何かの参考になればと思います。

パネルのjsでオブジェクトを定義してjsxに投げてjsxでプロパティーを追加。その後js側に投げ返してconsoleで呼び出し。
ecma3のjsx側でJSON.stringifyを使用するためにjson2.jsをパネルのjs側で読み込んでいます。
