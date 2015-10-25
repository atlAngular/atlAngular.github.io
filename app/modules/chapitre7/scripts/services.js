

    'use strict';

    /* Services */

    var serverServices = angular.module('serverServices', ['ngResource']);

    serverServices.factory('Logintoken', ['$resource',
      function($resource){
        return $resource('http://localhost/server/web/app_dev.php/oauth/v2/token?client_id=2_5zmfsspp8vsw0k4404oooccoccgs8448088g8sgck4g00wowg4&client_secret=j7tlkop86xw0ksco4kkckcwo808skcoc8c8cssg8ggg4o80s0&grant_type=password&username=:username&password=:password', {username: '@username',password: '@password'}, {
          query: {method:'GET', isArray:false}
        })
      }]);
      serverServices.factory('Getpost', ['$resource',
        function($resource){
          var resourceurl= $resource('http://localhost/server/web/app_dev.php/api/posts/{id}', {id: '@id'}, {
            fetch: {method:'GET', isArray:false, headers: { 'WWW-Authenticate': 'Bearer ' + '@token' }}
          });
        //  var resourcewithtoken=resourceurl.bind({ access_token : '@token'});
          return resourceurl;
        }]);
