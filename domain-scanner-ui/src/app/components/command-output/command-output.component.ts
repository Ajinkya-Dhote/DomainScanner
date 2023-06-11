import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-output',
  templateUrl: './command-output.component.html',
  styleUrls: ['./command-output.component.scss'],
})
export class CommandOutputComponent implements OnInit {

  eventSource!: EventSource;
  data: string = '';



  ngOnInit(): void {
    this.eventSource = new EventSource('/output');
    this.eventSource.addEventListener('message', (event: MessageEvent) => {
      this.data += event.data + "\n\n";
      console.log(this.data);
      
    });
    this.eventSource.addEventListener('error', this.handleError);
   
  }

  handleMessage(event: MessageEvent) {
    this.data ="aaa";
  
    console.log(this.data);
  }

  handleError(event: Event) {
    console.error('SSE error:', event);
    
  }


}
