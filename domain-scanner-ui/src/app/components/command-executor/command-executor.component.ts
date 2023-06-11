import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommadService } from 'src/app/commad.service';

@Component({
  selector: 'app-command-executor',
  templateUrl: './command-executor.component.html',
  styleUrls: ['./command-executor.component.scss']
})
export class CommandExecutorComponent {
  command = 'nmap -sC -vv 124.124.101.48';

  constructor(private http:HttpClient) {

  }

  execute() {
    console.log(this.command);

    const params = new HttpParams()
    .set('command', this.command)


    this.http.get('/execute/nmap', {params}).subscribe((data) => console.log(data));
    
  }
}
