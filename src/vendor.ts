/* This file contains references to the vendor libraries. 
    This is used by webpack in production build only. A
    Separate bundle for vendor code is useful since it's unlikely
    to change as often as the application's code. So all the 
    libraries we reference here will be written to vendor.js So 
    they can be cached util one of them change.
*/

// Angular
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';

// Other vendors for example jQuery, Lodash or Bootstrap
// You can import js, ts, css, sass, ...
