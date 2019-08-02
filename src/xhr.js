import Request from './request'
import Response from './response'
import Body from './body'
import Headers from './headers'

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.push(headers.responseHeader, key, value)
    }
  })
  return headers
}

const XhrRequest = function(url, options={}) {
  return new Promise(function(resolve, reject) {
    var request = new Request(url, options)

    var xhr = new XMLHttpRequest()

    xhr.onload = function() {
      var response = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = url
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      if (this.status >= 200 & this.status < 300){
        resolve(new Response(body, response, options))
      }
      else
      {
        reject(new Response(body, response, options))
      }
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new TypeError('Network request failed'))
    }

    function abortRequest(){
      console.log("herer")
      xhr.abort()
    }

    xhr.open(request.method, request.url, true)

    //setting timeout attribute
    xhr.timeout = request.timeout

    if(request.withCredentials == true)
      xhr.withCredentials = request.withCredentials

    //seeting for basic authorization
    if(request.auth){
      var username = request.auth.username || '';
      var password = request.auth.password || '';
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    if(request.cancel)
    {
      xhr.addEventListener('abort', abortRequest);
    }
    // xhr.setRequestHeader("Content-Type", "application/json")
    Object.keys(request.headers.requestHeader).forEach(function(key) {
      xhr.setRequestHeader(key, request.headers.requestHeader[key])
    })

    xhr.send(request.body.data)
  })
}

export default XhrRequest
