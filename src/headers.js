const Headers = function(headers){
  this.headerObj = {
    "Content-Type": "application/json"
  }
  if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.push(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.push(name, headers[name])
    }, this)
  }
}

Headers.prototype.push = function(key, value){
  this.headerObj[key] = value
}

export default Headers;
