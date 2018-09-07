
    var ClickStatus = 0;
    var BeginPlaceFlag = -1;
    var EndPlaceFlag = -1;
    const PLACENUM = 19;
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.639757, 23.41896), 17);
    var distance;
    var IfChoose = new Array(PLACENUM);
    for (var i = 0; i <= PLACENUM; i++) {
        IfChoose[i] = false;
    }
    var placeID = new Array(PLACENUM);
    var markerID = new Array(PLACENUM);
    var getAttr_flag = new Array(PLACENUM);
    var PathString = "";
    //var label = new BMap.Label("!!!!",{offset:new BMap.Size(20,-10)});
    // transit.search 完成后 处理 距离 如果是公里->米 ，米保持
    // 要放在 transit前面 注意
    var searchComplete = function (results) {
        if (transit.getStatus() != BMAP_STATUS_SUCCESS) {

            return;
        }


        // var plan = results.getPlan(0);
        // distance = plan.getDistance(true);
        // var strlen = distance.length;
        // if (distance[strlen - 1] === "里") {
        //     var distance_num = parseFloat(distance);
        //     distance = distance_num * 1000;
        // }
    };


var Name = new Array(PLACENUM);
Name[0] = "汕头大学知行书院";
Name[1] = "F座教学楼";
Name[2] = "汕头大学体育馆";
Name[3] = "汕头大学食堂";
Name[4] = "汕头大学理学院";
Name[5] = "汕头大学-讲堂楼";
Name[6] = " 汕头大学-校医院";
Name[7] = "汕头大学-幼儿园";
Name[8] = "汕头大学-长江艺术与设计学院";
Name[9] = "日月坑水库";
Name[10] = "汕头大学教学楼-G座";
Name[11] = "气膜篮球训练";
Name[12] = "宿舍楼-G座";
Name[13] = "汕头大学-E座教学楼";
Name[14] = "第四食堂";
Name[15] = "真理钟 ";
Name[16] = "汕头大学-图书馆";
Name[17] = "汕头大学(新医学院)-大楼";
Name[18] = "汕头大学网络中心";
Name[19] = "汕头大学附属中学";

// --- point 设置 ---
    {

        placeID[0] = new BMap.Point(116.63501, 23.417569);
        markerID[0] = new BMap.Marker(placeID[0]);
        markerID[0].title = 0;

        placeID[1] = new BMap.Point(116.638432, 23.422713);
        markerID[1] = new BMap.Marker(placeID[1]);
        markerID[1].title = 1;

        placeID[2] = new BMap.Point(116.637332, 23.422294);
        markerID[2] = new BMap.Marker(placeID[2]);
        markerID[2].title = 2;

        placeID[3] = new BMap.Point(116.639694, 23.422012);
        markerID[3] = new BMap.Marker(placeID[3]);
        markerID[3].title = 3;

        placeID[4] = new BMap.Point(116.64176, 23.420628);
        markerID[4] = new BMap.Marker(placeID[4]);
        markerID[4].title = 4;

        placeID[5] = new BMap.Point(116.64009, 23.420536);
        markerID[5] = new BMap.Marker(placeID[5]);
        markerID[5].title = 5;

        placeID[6] = new BMap.Point(116.636371, 23.420818);
        markerID[6] = new BMap.Marker(placeID[6]);
        markerID[6].title = 6;

        placeID[7] = new BMap.Point(116.637673, 23.419376);
        markerID[7] = new BMap.Marker(placeID[7]);
        markerID[7].title = 7;

        placeID[8] = new BMap.Point(116.636883, 23.424673);
        markerID[8] = new BMap.Marker(placeID[8]);
        markerID[8].title = 8;

        placeID[9] = new BMap.Point(116.634745, 23.424425);
        markerID[9] = new BMap.Marker(placeID[9]);
        markerID[9].title = 9;

        placeID[10] = new BMap.Point(116.642672, 23.418961);
        markerID[10] = new BMap.Marker(placeID[10]);
        markerID[10].title = 10;

        placeID[11] = new BMap.Point(116.644083, 23.418986);
        markerID[11] = new BMap.Marker(placeID[11]);
        markerID[11].title = 11;

        placeID[12] = new BMap.Point(116.644487, 23.418348);
        markerID[12] = new BMap.Marker(placeID[12]);
        markerID[12].title = 12;

        placeID[13] = new BMap.Point(116.642933, 23.41819);
        markerID[13] = new BMap.Marker(placeID[13]);
        markerID[13].title = 13;

        placeID[14] = new BMap.Point(116.644505, 23.417983);
        markerID[14] = new BMap.Marker(placeID[14]);
        markerID[14].title = 14;

        placeID[15] = new BMap.Point(116.64296, 23.416424);
        markerID[15] = new BMap.Marker(placeID[15]);
        markerID[15].title = 15;

        placeID[16] = new BMap.Point(116.641976, 23.416342);
        markerID[16] = new BMap.Marker(placeID[16]);
        markerID[16].title = 16;

        placeID[17] = new BMap.Point(116.640777, 23.416068);
        markerID[17] = new BMap.Marker(placeID[17]);
        markerID[17].title = 17;

        placeID[18] = new BMap.Point(116.639618, 23.41671);
        markerID[18] = new BMap.Marker(placeID[18]);
        markerID[18].title = 18;

        placeID[19] = new BMap.Point(116.638296, 23.41629);
        markerID[19] = new BMap.Marker(placeID[19]);
        markerID[19].title = 19;

        for (var i = 0; i <= PLACENUM ; i++) {
            markerID[i].disableMassClear();
        }
    }
    {
        for (var i1 = 0; i1 <= PLACENUM; i1++) {
            map.addOverlay(markerID[i1]);
        }
    }
// --- point 设置 ---

    function initMap() {
         ClickStatus = 0;
         BeginPlaceFlag = -1;
         EndPlaceFlag = -1;
        PathString = "";
        for (var i3 = 0; i3 <= PLACENUM; i3++) {
            getAttr_flag[i3] = 0;
            IfChoose[i3] = false;
            markerID[i3].setAnimation(null);
            markerID[i3].getLabel().hide();
            markerID[i3].getLabel().setContent("default");
        }

    }
    
    function drawLine() {
       PathLine.push(new BMap.WalkingRoute(map, {renderOptions: {map: map,autoViewport:false},
           onMarkersSet:function(routes)
           {
               map.removeOverlay(routes[0].marker); //删除起点
               map.removeOverlay(routes[1].marker);//删除终点
           },
       })
    )
       // delete walking;
    }


    for (var i2 = 0; i2 <= PLACENUM; i2++) {
        markerID[i2].addEventListener("click", getAttr.bind(markerID[i2], markerID[i2]));
    }

    for (var i3 = 0; i3 <= PLACENUM; i3++) {
        getAttr_flag[i3] = 0;
    }
    for (var i = 0; i <= PLACENUM; i++) {
        var label = new BMap.Label("default",{offset:new BMap.Size(20,-10)})
        markerID[i].setLabel(label);
        markerID[i].getLabel().hide();
    }

    //markerID[6].getLabel().setContent("fuck");
    //markerID[6].getLabel().show();

    function getAttr(place) {
        // 起点确定
         if (ClickStatus === 1 && (BeginPlaceFlag === place.title || BeginPlaceFlag ===  -1 ) && (getAttr_flag[place.title] === ClickStatus || getAttr_flag[place.title] === 0 ))
         {
             if (BeginPlaceFlag === place.title) {
                 BeginPlaceFlag = -1;
                 markerID[place.title].getLabel().hide();
                 markerID[place.title].getLabel().setContent("default")
             }
             else if (BeginPlaceFlag === -1) {
                 BeginPlaceFlag = place.title;
                 markerID[place.title].getLabel().setContent("起点");
                 markerID[place.title].getLabel().show();

             }
             JudgeStatus(place)
         }
        // 起点确定 END
             
        // 终点确定
         else if (ClickStatus === 3 && (EndPlaceFlag === place.title || EndPlaceFlag ===  -1 ) && (getAttr_flag[place.title] === ClickStatus || getAttr_flag[place.title] === 0 ))
        {
            if (EndPlaceFlag === place.title) {
                EndPlaceFlag = -1;
                markerID[place.title].getLabel().hide();
                markerID[place.title].getLabel().setContent("default")
            }
            else if (EndPlaceFlag === -1) {
                EndPlaceFlag = place.title;
                markerID[place.title].getLabel().setContent("终点");
                markerID[place.title].getLabel().show();

            }
            JudgeStatus(place)
        }
        // 终点确定 END
        
        // 途经点确定 
        else if (ClickStatus === 2 && (getAttr_flag[place.title] === ClickStatus || getAttr_flag[place.title] === 0 ))
         {
             if (getAttr_flag[place.title] === 0)
             {
                 markerID[place.title].getLabel().setContent("途经点");
                 markerID[place.title].getLabel().show();
             }
             else if(getAttr_flag[place.title] === ClickStatus)
             {
                 markerID[place.title].getLabel().setContent("default");
                 markerID[place.title].getLabel().hide();
             }
             JudgeStatus(place);
         }

    }
    
    function JudgeStatus(place) {
        var p = place.getPosition();
        if (getAttr_flag[place.title] === 0) {
            IfChoose[place.title] = true;
            place.setAnimation(BMAP_ANIMATION_BOUNCE);
            getAttr_flag[place.title] = ClickStatus;
        }
        else {
            getAttr_flag[place.title] = 0;
            IfChoose[place.title] = false;
            place.setAnimation(null);
        }
    }
    //
    PathLine = Array();
    //
    function ChooseBegin() {
        ClickStatus = 1;
    }
    
    function ChooseVia() {
        ClickStatus = 2;
    }
    
    function ChooseEnd() {
        ClickStatus = 3;
    }
    // function textBuildPath() {
    //     drawLine(placeID[1],placeID[3]);
    //     drawLine(placeID[3],placeID[5]);
    //     PathLine[PathLine.length - 1].search(placeID[3], placeID[5]);
    //
    //
    // }

    function textDeletePath() {
        document.getElementById("createBtn").classList.remove("disabled");
        document.getElementById("pathcontent").innerHTML = "<p>现在还没有路线哦(´•ω•`๑)!</p>";
        map.clearOverlays();
        initMap();
    }

    function BuildPath() {

        if (BeginPlaceFlag !== -1 && EndPlaceFlag !== -1)
        {
            document.getElementById("createBtn").classList.add("disabled");
            var showTextArea = document.getElementById("pathcontent");
           // alert("fuck");
            var BeginPlace,EndPlace;
            var viaArray = new Array();
            //var viaFlag = 0;
            for (var i = 0; i <= PLACENUM; i++) {
                if (getAttr_flag[i] === 1)
                {
                    BeginPlace = i;
                }
                else if(getAttr_flag[i] === 3)
                {
                    EndPlace = i;
                }
                else if(getAttr_flag[i] === 2)
                {
                    viaArray.push(i);
                }
            }
            shortest_path(BeginPlace,viaArray,EndPlace);
            // alert(shortest_length);
            // alert(final_path);
            PathString = "<div class='section'><p>总路程长度为<span class='red-text'>" + shortest_length +
                            "</span>米</p> <div class=\"divider\"></div></div>";
            drawLine();
            PathLine[PathLine.length - 1].search(placeID[final_path[0]],placeID[final_path[1]]);
            PathString += "<span class='cyan-text'>1. " + Name[final_path[0]] + "</span><br/>";
            if(final_path.length === 2) {
                PathString += "&nbsp&nbsp&nbsp&nbsp&nbsp" +
                                " ↓ <span class = 'green-text'>" + g[final_path[0]][final_path[1]] +  " 米</span></br>";
            }
            for (var i = 1; i < final_path.length - 1; i++) {
                drawLine();
                PathLine[PathLine.length - 1].search(placeID[final_path[i]],placeID[final_path[i+1]]);
                PathString += "&nbsp&nbsp&nbsp&nbsp&nbsp" +
                                " ↓ <span class = 'green-text'>" + g[final_path[i - 1]][final_path[i]] +  " 米 </span></br>";
                PathString += i + 1 + ". " + Name[final_path[i]] +  "<br/>";
            }
            if(final_path.length !== 2) {
                PathString += "&nbsp&nbsp&nbsp&nbsp&nbsp" +
                                " ↓ <span class = 'green-text'>" + g[final_path[final_path.length - 2]][final_path[final_path.length - 1]] + " 米</span></br>";
            }
            PathString += "<span class='teal-text'>" +
                            final_path.length + ". " + Name[final_path[final_path.length - 1]]  +  "</span>";
            // alert(PathString);

            showTextArea.innerHTML = "<div class='section'><p>" + PathString + "</p></div>";

            return ;
        }
        else{
            alert("你至少要选一个起点和终点吧兄弟。");
            return ;
        }
    }

    function isFileUploaded() {
        if ($('#data').val().length !== 0) {
            var afterLoadedHTML = "<input type=\"file\" id=\"data\" class=\"\" />文件已被成功加载";
            document.getElementById("upLoadFileButton").innerHTML = afterLoadedHTML;
        }
    }



