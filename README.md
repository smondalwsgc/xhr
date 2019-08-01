# RJ Library ✨

Simple wrapper around XMLHttpRequest to make http call.
 .  
## Installation

#### Install using npm
```bash
# install it via npm
npm install --save ssh://git@github.com:rejuvenationinc/rj.git
```
* This package is not on NPM, use GitHub source only.

#### Direct usage with html


```html
<!-- Insert the vue core before vue-toasted -->
<script src="https://github.com/rejuvenationinc/rj/blob/master/dist/rj.js"></script>
```

## Usage

It is simple. couple of lines all what you need.

```javascript
// register the plugin on vue
import RJ from 'rj';

// Get Request
RJ.get('/api/hello').then(function(response){
  //handle response
}).catch(function(err){
  //handle error
})

//You can pass option inside get
RJ.get('/api/hello', {
  timeout: 200,
  withCredentials: true
  headers: {
    "Content-Type": "application/json"
  }
}).then(function(response){
  //handle response
}).catch(function(err){
  //handle error
})

//You can use async and await in latest version of ES2017
async function request() {
  const response = await RJ.get('/api/hello');
  if(response.status=='ok'){
    //handle response
  }
  else{
    //handle error
  }
}

//post request
RJ.post('/api/hello', {
  data: dataoptions  //here dataoptions is a list of json data you want to pass
}).then(function(response){
  //handle response
}).catch(function(err){
  //handle error
})


```
### Options

below are the options you can pass to create a Flash Message

**Option**|**Type's**|**Default**|**Description**
-----|-----|-----|-----
data|Object|null|data object is needed on post and put request to pass to server
headers|Object|null| This is header information which need to pass inside header object
withCredentials|Boolean|false| You can pass true value for cross origin request
timeout|Milliseconds |null| You can pass timeout option, You want to get response within requested time. If the response not came within requested timeframe, then request automatically canceled.
csrf|Boolean |true| This is needed for post, put and delete request for more information visit this site(https://en.wikipedia.org/wiki/Cross-site_request_forgery)
