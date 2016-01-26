Meteor.methods({
  getUrl: function(musicId) {

    var url = "http://www.app-echo.com/sound/play-list";

    var param = {
      headers: {
        'Cookie': 'MP_LIST='+musicId
      }
    };

    // HTTP.get(url, param, function(err, res) {
    //   if(err){
    //     console.log("error", err);
    //   }
    //   if(res){
    //     let content = res.content;
    //     let index = _.indexOf(content,':') + 1;
    //     content = content.substring(index,content.length-3);
    //     // console.log("[content]==>", content);
    //     let jsonData = JSON.parse(content);
    //
    //     // console.log("[name]==>", jsonData.name);
    //     // console.log("[aurhor]==>", jsonData.user.name);
    //     // console.log("[url]==>", jsonData.source);
    //     let obj = {
    //       "name": jsonData.name,
    //       "aurhor": jsonData.user.name,
    //       "url": jsonData.source
    //     };
    //     console.log(obj);
    //     return obj;
    //   }
    // });



    try {
      var res = HTTP.get(url, param);
      let content = res.content;
      let index = _.indexOf(content,':') + 1;
      content = content.substring(index,content.length-3);
      // console.log("[content]==>", content);
      let jsonData = JSON.parse(content);
      let obj = {
        "name": jsonData.name,
        "author": jsonData.user.name,
        "url": jsonData.source,
        "date": new Date()
      }
      Log.insert(obj);
      return obj;
    } catch (e) {
      // Got a network error, time-out or HTTP error in the 400 or 500 range.
      return "error: " + e;
    }


  }
});
