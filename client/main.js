Session.setDefault('info',{});

Template.content.events({
  "click [name=getUrl]": function(event, template) {
    let url = $('[name=url]').val();
    let musicId = url.split('/')[4];
    Meteor.call("getUrl", musicId, function(error, result) {
      if (error) {
        console.log("error", error);
      }
      if (result) {
        console.log(result.url);
        Session.set('info',result);
      }
    });
  }
});

Template.content.helpers({
  info: function() {
    return Session.get("info");
  }
});
