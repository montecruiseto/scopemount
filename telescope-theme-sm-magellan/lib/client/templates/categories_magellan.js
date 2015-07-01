Meteor.startup(function () {
  Template.categories_magellan.helpers({
    categories: function(){
      return Categories.find({}, {sort: {order: 1, name: 1}});
    },
    categoryLink: function(){
      return getCategoryUrl(this.slug);
    }
  });
});

getCategoryUrl = function(slug){
  return Telescope.utils.getSiteUrl()+'category/'+slug;
};
