'use strict';

angular.module('angularApp')
  .service('CompanyService', function CompanyService($resource) {
    return $resource('companies.json');
  });
