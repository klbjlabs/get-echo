Meteor.methods({
  getUrl: function(musicId) {

    var url = "http://www.app-echo.com/sound/play-list";

    var param = {
      headers: {
        'Cookie': 'MP_LIST='+musicId
      }
    };

    HTTP.get(url, param, function(err, res) {
      if(err){
        console.log("error", err);
      }
      if(res){
        let content = res.content;
        let index = _.indexOf(content,':') + 1;
        content = content.substring(index,content.length-3);
        // console.log("[content]==>", content);
        let jsonData = JSON.parse(content);

        console.log("[name]==>", jsonData.name);
        console.log("[aurhor]==>", jsonData.user.name);
        console.log("[url]==>", jsonData.source);
        return content;
      }
    });
  }
});
