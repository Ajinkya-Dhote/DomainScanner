import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommadService {

  constructor(private http: HttpClient) { }

  executeCommand() {
    return this.http.get('/execute/nmap?command=nmap -v -sT sbilife.co.in');
  }
}
