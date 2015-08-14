// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  this.on('add', function() {
    this.length === 1 && this.playFirst();
  })
    //this.playFirst();
  },

  playFirst: function(){
    this.at(0).play();
  }


});
