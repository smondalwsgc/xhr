import Headers from './headers'
import {HttpStatus} from './utils'
const Response = function(bodyInit, response, options){
  var status = new HttpStatus(response.status)
  this.type = 'default'
  this.status = response.status === undefined ? 200 : response.status
  this.ok = status.success
  this.statusText = 'statusText' in response ? response.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  if(this.ok || status.client_error)
    this.data = JSON.parse(bodyInit)

}

export default Response;
