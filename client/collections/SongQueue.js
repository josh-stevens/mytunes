// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      this.length === 1 && this.playFirst();
    });

    this.on('dequeue', function(song){
      if(this.at(0) === song && this.at(1)){
        this.remove(song);
        this.playFirst();
      } else{
        this.remove(song);
      }
     this.trigger('change:Queue', this);

    }, this);

    this.on('ended', function(){
      this.remove(this.at(0));
      this.length > 0 && this.playFirst();
      this.trigger('change:Queue', this);
    }, this);

  },


  playFirst: function(){
    this.at(0).play();
  }


});
