let merge_options = function(options, extra) {
  return Object.assign({}, options, extra);
};

let normalize_method = function(method) {
  var supported_methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  var upcase_method = method != undefined ? method.toUpperCase() : 'GET';
  if (supported_methods.indexOf(upcase_method) > -1) return upcase_method;
  else return '';
};

const HttpStatus = function(status) {
  this.success = status >= 200 && status < 300;
  this.redirection = status >= 300 && status < 400;
  this.client_error = status >= 400 && status < 500;
  this.server_error = status >= 500 && status < 600;
};

module.exports = {
  merge_options: merge_options,
  normalize_method: normalize_method,
  HttpStatus: HttpStatus,
};
