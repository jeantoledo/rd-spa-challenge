/* This file contains references to the vendor libraries. 
    This is used by webpack in production build only. A
    Separate bundle for vendor code is useful since it's unlikely
    to change as often as the application's code. So all the 
    libraries we reference here will be written to vendor.js So 
    they can be cached util one of them change.
*/

/* eslint-disable no-unused-vars */

import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

