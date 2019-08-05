import XhrRequest from './xhr';
import { merge_options } from './utils';

class RjXhr {
  get(url, options) {
    let new_options = merge_options(options, { method: 'GET' });
    return XhrRequest(url, new_options);
  }
  post(url, options = {}) {
    let new_options = merge_options(options, { method: 'POST' });
    return XhrRequest(url, new_options);
  }
  put(url, options = {}) {
    let new_options = merge_options(options, { method: 'PUT' });
    return XhrRequest(url, new_options);
  }
  delete(url) {
    let new_options = merge_options(options, { method: 'DELETE' });
    XhrRequest(url, new_options);
  }
}
export default new RjXhr();
