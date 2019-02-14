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

  constructor(private _fb: FormBuilder, private newService: NewsService) { }

  ngOnInit() {
    this.initFormValues()
  }

  public initFormValues(){
    this.form = this._fb.group({
      vericationTxt: ['', Validators.required],
    })
  }

  public async submit(){
    console.log(this.form.invalid)
    console.log(this.form.value)
    if(this.form.invalid){
      console.log('Form invalid, show message!');
    }
  }
  public async call(){
    console.log('----call-----');
    let r = await this.newService.getNewsService();
    console.log('------> ', r);
  }
}
