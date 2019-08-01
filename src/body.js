const Body = function(options){
  var body = options.data
  if (options.data === undefined) {
    var body = null;
  }
  if(options.csrf == false && (this.method=='POST' || this.method=='PUT' || this.method=='DELETE')){
    let csrfParam   = document.querySelector('meta[name="csrf-param"]').content
    let csrfToken   = document.querySelector('meta[name="csrf-token"]').content
    body[csrfParam] = csrfToken
  }
  this.data = JSON.stringify(body)
}
export default Body;
