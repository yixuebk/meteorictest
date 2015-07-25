Meteor.startup(function () {



  if (Lmingposts.find({}).count() === 0) {
    Lmingposts.insert({
      title: "test title",
      body: "test body",

    });
  }

  if (Posts.find({}).count() === 0) {
    Posts.insert({
      title: Fake.sentence(),
      body: Fake.paragraph(),
      published: Fake.fromArray([true, false])
    });
  }

});
