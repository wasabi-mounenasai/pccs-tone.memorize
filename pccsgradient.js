//PCCS色指定
var pList = ["#FBB4C4 ","#FDCDB7 ","#FEE6AA ","#FFFFB3 ","#E6F5B0 ","#CCEBC5 ","#B3E2D8 ","#B3D7DD ","#B3CDE3 ","#B2B6D8 ","#CAB2D6 ","#E3ADD5"],
    ltgList = ["#D7A4B6 ","#D8AFA7 ","#D9BA97 ","#D9C69B ","#AAC09B ","#9EBCA3 ","#91B8AC ","#91AFBB ","#91A4B6 ","#9191AD ","#A997B0 ","#C09EB3"],
    gList = ["#7D4F5B ","#7D5F61 ","#7D6764 ","#7D6F59 ","#636E5B ","#486C5C ","#385B63 ","#384E5D ","#384158 ","#3F2F50 ","#493753 ","#5A3A54"],
    dkgList = ["#3A2C2E ","#3A2C2A ","#463B34 ","#46402C ","#3E3F31 ","#24342D ","#253532 ","#283539 ","#222831 ","#282430 ","#2E2A31 ","#3A2D31"],
    ltList = ["#FA7482","#FB8072","#FDB46C","#FFF27B","#B3DE69","#7FC97E","#66C2AE","#67B2CA","#679FCA","#807DBA","#B172B6","#E170A4"],
    sfList = ["#C95F6A ","#D77856 ","#D89048 ","#CCBA48 ","#B3B140 ","#66AC78 ","#4E9B86 ","#4F8B97 ","#516690 ","#5D5791 ","#8C5588 ","#B15076"],
    dList = ["#994152 ","#B24443 ","#B25938 ","#997F42 ","#747E47 ","#5A804B ","#2A6B68 ","#1E6282 ","#214274 ","#3A367B ","#5E3179 ","#802A68"],
    dkList = ["#632A31 ","#743526 ","#6C4919 ","#695B18 ","#56561A ","#345934 ","#1D4B44 ","#0E4251 ","#16344F ","#312C4B ","#4A304B ","#633142"],
    bList = ["#F9344C ","#FC4E32 ","#FF9914 ","#FFF231 ","#99D02B ","#33A65E ","#1AA18E ","#1D86AE ","#386CB0 ","#6964AD ","#A45AAA ","#DF4C94"],
    sList = ["#F9344C ","#FC4E32 ","#FF9914 ","#FFF231 ","#99D02B ","#33A65E ","#1AA18E ","#1D86AE ","#386CB0 ","#6964AD ","#A45AAA ","#DF4C94"],
    dpList = ["#9E002C ","#A41200 ","#A34A02 ","#A38204 ","#518517 ","#2F6F41 ","#025965 ","#04436D ","#073E73 ","#232166 ","#531460 ","#740050"],
    vList = ["#D40045 ","#EE0026 ","#FD1A1C ","#FE4118 ","#FF590B ","#FF7F00 ","#FFCC00 ","#FFE600 ","#CCE700 ","#99CF15 ","#66B82B ","#33A23D ","#008F62 ","#008678 ","#007A87 ","#055D87 ","#093F86 ","#0F218B ","#1D1A88 ","#281285 ","#340C81 ","#56007D ","#770071 ","#AF0065"],
    toneColorList = [pList,ltgList,gList,dkgList,ltList,sfList,dList,dkList,bList,sList,dpList,vList],
    frameList = [".frameLeft",".frameCenter",".last-area-upper",".last-area",".last-area-lower"]

//指定
function sqGradiant(id,toneCList){
  //itemの親要素の半径を計算
  var r = $("#" + id).width()/2;
  //item要素の幅,高さの2分の1を取得
  var l = $("#" + id + ' .item').width()/2;
  var h = $("#" + id + ' .item').height()/2;
  //正方形の配置位置
  var targetId = "#" + id + " .item"
  $(targetId).each(function(i, elem) {
    //item要素数から角度を計算
		var angle = 360/$(targetId).length;
    var deg = angle * i;
    //console.log(deg);
    //x,y座標の取得
    var x = Math.cos(deg*Math.PI/180)*(r+l)+r;
    var y = Math.sin(deg*Math.PI/180)*(r+l)+r;
    //円周上を中心に配置されるよう位置を指定
    $(targetId).eq(i).css("left",x-l);
    $(targetId).eq(i).css("top",y-h);
    $(targetId).eq(i).css({"transform":"rotate("+ (deg+90) +"deg)"});
    //色指定
    if (id == "v"){
      $(targetId).eq(i - $(targetId).length/2 - 1).css("background",toneCList[i])}
    else {
    $(targetId).eq(i - $(targetId).length/2).css("background",toneCList[i])}
  });
};

function getGraphics(){
    //ボタン配置
    for( i=0; i<12; i++){
      var targetFrame
      if(i<4){targetFrame = frameList[0]
      }else if(i >= 4 && i < 8){targetFrame = frameList[1]
      }else if(i==8){targetFrame = frameList[2]
      }else if(i==9 ||i==11){targetFrame = frameList[3]
      }else if(i==10){targetFrame = frameList[4]
      };
      $(targetFrame).append('<button type="button" id="'+ toneList[i] +'" onclick="buttonClick(this)"></button>');
    }
    //色相環配置
    for( i=0; i<toneList.length; i++){
      var targetTone = "#" + toneList[i]
      for( j=0; j<toneColorList[i].length; j++){
        $(targetTone).append('<div class="item"></div>')}
        sqGradiant(toneList[i],toneColorList[i])}
}
