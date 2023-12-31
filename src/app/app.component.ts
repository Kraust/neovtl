import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      const serverAddr = params.get("server")
      console.log(params);
      if (serverAddr) {
        this.connectToServer(serverAddr);
      } else {
        this.newServer();
      }
    });
  }

  newServer(): void {
    console.log("TBD: Start new server");
  }

  connectToServer(serverAddr: string): void {
    console.log(serverAddr);
  }
}
