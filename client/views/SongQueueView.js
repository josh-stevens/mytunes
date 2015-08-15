// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('change:Queue', this.render, this);
  },

  render: function() {
    console.log(this.collection)
    this.$el.children().detach();
    debugger;

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

  return this.$el;
  }

});
