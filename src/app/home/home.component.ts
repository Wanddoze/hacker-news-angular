import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public form: FormGroup;
  public articles: any[] = [];
  constructor(private _fb: FormBuilder, private newService: NewsService) { }

  ngOnInit() {
    this.processNewService()
  }

  async processNewService(){
    try {
      let resp:any = await this.newService.getNewsService()
      console.log('resp> : ', resp.status);
      if(resp.status == 'ok')
        this.articles = resp.articles;
    } catch (error) {
      console.error(error)
    }
  }
}