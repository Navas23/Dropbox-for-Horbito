var initDropbox = function(){



  /*var dbx = new Dropbox({ accessToken: 'YOUR_ACCESS_TOKEN_HERE' });
  dbx.filesListFolder({path: ''})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });*/

}

var interval = setInterval(function(){

  if( typeof Dropbox !== 'undefined' ){
    clearInterval( interval );
    console.log('dropbox');
    initDropbox();
  }

}, 50);
