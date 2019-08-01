import Headers from './headers'
const Response = function(bodyInit, response, options){
  this.type = 'default'
  this.status = response.status === undefined ? 200 : response.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in response ? response.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  if(this.ok)
    this.data = JSON.parse(bodyInit)

}

export default Response;
