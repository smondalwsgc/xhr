const Headers = function(headers){
  this.requestHeader = {
    "Content-Type": "application/json"
  }
  this.responseHeader = {}
  if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.push(this.requestHeader, header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.push(this.requestHeader, name, headers[name])
    }, this)
  }
}

Headers.prototype.push = function(header, key, value){
  header[key] = value
}

export default Headers;
