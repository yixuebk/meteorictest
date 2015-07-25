AutoForm.hooks({
  'edit-newPost': {
    onSuccess: function (operation, result, template) {
      alert('Post saved successfully!');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});

AutoForm.hooks({
  'new-lmingpost': {
    onSuccess: function (operation, result, template) {
      console.log('Post inserted successfully!');
      console.log(operation);
      console.log(result);
      console.log(template);
      /*Router.go('post.show', {_id: 1}, {query: 'q=s', hash: 'hashFrag'});*/
      Router.go('postLists', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
