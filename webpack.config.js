//es6
//__dirname绝对路径  __filename 相对路径
var path=require("path");
//path 路径 模块
module.exports={
    //mode:"develoment",
    mode:"production",
    //配置文件入口
    entry:"./src/index.js",
    //配置文件出口
    output:{
        filename:"./dist/bundle.js",
        path:path.resolve(__dirname,"dist")//dist
    }
};
