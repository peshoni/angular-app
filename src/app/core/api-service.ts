import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Class that contains urls and methods for rest calls. 
 */
@Injectable()

export class ApiService {
    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {

    }
}