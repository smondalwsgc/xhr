import Headers from './headers'
import Body from './body'
import {normalize_method} from './utils'
const Request = function(url, options={}){
  this.url = url
  this.method = normalize_method(options.method)
  this.headers = new Headers(options.headers)
  this.body = new Body(options)
  //  The default value is 0, which means there is no timeout.
  this.timeout = options.timeout || 0
  this.auth = options.auth

  //the default value for withCredentials is false
  this.withCredentials = options.withCredentials || false
}

export default Request;
