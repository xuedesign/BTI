document.oncontextmenu = function(){
window.event.returnValue=false; //將滑鼠右鍵事件取消
};

document.onselectstart = function(){
    event.returnValue = false; //禁止全選功能
};

document.oncopy = function(){
    event.returnValue = false; //禁止複製功能
}