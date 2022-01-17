const routes = (module.exports = require('next-routes')());//RETURNS A FUNCTION THAT WILL BE INVOCATED IMMIDIATELY AFTER

//this is a calling (wildcard address, which route)
routes
  .add('/campaigns/new', '/campaigns/new')  
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests','campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');
  


module.export = routes;