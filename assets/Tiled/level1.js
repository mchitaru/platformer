(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level1",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158, 157, 158,
            195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196,
            157, 158, 91, 92, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 233, 234, 93, 94, 157, 158,
            195, 196, 129, 130, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 271, 272, 131, 132, 195, 196,
            157, 158, 159, 160, 535, 536, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 537, 538, 539, 540, 155, 156, 157, 158,
            195, 196, 159, 160, 573, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 614, 577, 578, 155, 156, 195, 196,
            157, 158, 197, 198, 611, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 651, 652, 615, 616, 193, 194, 157, 158,
            195, 196, 159, 160, 649, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 613, 614, 614, 613, 614, 653, 654, 155, 156, 195, 196,
            157, 158, 159, 160, 573, 574, 651, 652, 651, 652, 651, 652, 651, 652, 651, 652, 651, 652, 651, 652, 613, 613, 79, 80, 81, 82, 82, 82, 169, 170, 157, 158,
            195, 196, 159, 160, 573, 574, 613, 614, 613, 614, 613, 614, 613, 614, 613, 614, 613, 614, 613, 614, 651, 613, 117, 118, 119, 120, 120, 120, 207, 208, 195, 196,
            157, 158, 159, 160, 573, 574, 651, 652, 651, 652, 651, 652, 651, 652, 652, 651, 652, 651, 652, 651, 79, 80, 169, 91, 92, 234, 233, 234, 93, 94, 157, 158,
            195, 196, 159, 160, 573, 574, 613, 614, 613, 614, 613, 613, 614, 613, 614, 613, 614, 613, 614, 613, 117, 118, 207, 129, 130, 272, 271, 272, 131, 132, 195, 196,
            157, 158, 159, 160, 573, 574, 613, 652, 651, 652, 651, 651, 652, 651, 652, 651, 652, 651, 79, 80, 169, 170, 157, 197, 198, 651, 651, 578, 155, 156, 157, 158,
            195, 196, 159, 160, 573, 574, 613, 614, 613, 614, 613, 614, 613, 614, 613, 614, 613, 614, 117, 91, 92, 233, 233, 235, 236, 614, 613, 578, 155, 156, 195, 196,
            157, 158, 159, 160, 611, 612, 614, 613, 614, 613, 614, 613, 614, 613, 614, 613, 79, 80, 169, 129, 130, 271, 271, 273, 274, 613, 614, 1157, 155, 156, 157, 158,
            195, 196, 159, 160, 687, 688, 613, 614, 613, 614, 613, 614, 613, 614, 613, 614, 117, 118, 207, 159, 160, 614, 613, 614, 613, 614, 691, 1157, 155, 156, 195, 196,
            157, 158, 197, 198, 725, 726, 727, 728, 729, 729, 729, 729, 729, 729, 79, 80, 169, 170, 157, 159, 160, 729, 729, 729, 1157, 729, 729, 1157, 193, 194, 157, 158,
            195, 196, 167, 168, 81, 81, 81, 81, 81, 81, 81, 81, 81, 81, 169, 170, 207, 208, 157, 167, 168, 81, 81, 81, 81, 81, 81, 82, 169, 170, 195, 196,
            157, 158, 205, 206, 119, 119, 119, 119, 119, 119, 119, 119, 119, 119, 207, 208, 157, 157, 157, 205, 206, 119, 119, 119, 119, 119, 119, 120, 207, 208, 157, 158,
            195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196, 195, 196],
         "height":20,
         "id":1,
         "name":"Terrain",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1077, 1078, 1079, 1080, 0, 0, 0, 1077, 1078, 1079, 1080, 0, 0, 0, 0, 0, 0, 0, 0, 1080, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1091, 1092, 1093, 1094, 0, 0, 0, 1091, 1092, 1093, 1094, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1105, 1106, 1107, 1108, 0, 0, 0, 1105, 1106, 1107, 1108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 1119, 1120, 1121, 1122, 0, 0, 0, 1119, 1120, 1121, 1122, 0, 0, 0, 0, 0, 1119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":2,
         "name":"Decorations",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1157, 1157, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":3,
         "name":"Objects",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 1159, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 1159, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 1159, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 0, 0, 1159, 1159, 0, 0, 0, 0, 0, 0, 1159, 1159, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 1159, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":4,
         "name":"Collision",
         "opacity":0.5,
         "type":"tilelayer",
         "visible":true,
         "width":32,
         "x":0,
         "y":0
        }],
 "nextlayerid":5,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.9.2",
 "tileheight":32,
 "tilesets":[
        {
         "columns":38,
         "firstgid":1,
         "image":"..\/14-TileSets\/Terrain (32x32).png",
         "imageheight":832,
         "imagewidth":1216,
         "margin":0,
         "name":"terrain",
         "spacing":0,
         "tilecount":988,
         "tileheight":32,
         "tilewidth":32
        }, 
        {
         "columns":14,
         "firstgid":989,
         "image":"..\/14-TileSets\/Decorations (32x32).png",
         "imageheight":384,
         "imagewidth":448,
         "margin":0,
         "name":"decorations",
         "spacing":0,
         "tilecount":168,
         "tileheight":32,
         "tilewidth":32,
         "transparentcolor":"#ff00ff"
        }, 
        {
         "columns":0,
         "firstgid":1157,
         "grid":
            {
             "height":1,
             "orientation":"orthogonal",
             "width":1
            },
         "margin":0,
         "name":"objects",
         "spacing":0,
         "tilecount":3,
         "tileheight":112,
         "tiles":[
                {
                 "id":0,
                 "image":"..\/14-TileSets\/Box.png",
                 "imageheight":32,
                 "imagewidth":44
                }, 
                {
                 "id":1,
                 "image":"..\/14-TileSets\/Door.png",
                 "imageheight":112,
                 "imagewidth":92
                }, 
                {
                 "id":2,
                 "image":"..\/14-TileSets\/Block.png",
                 "imageheight":32,
                 "imagewidth":32
                }],
         "tilewidth":92
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.9",
 "width":32
});