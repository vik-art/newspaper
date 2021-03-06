import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/common/article.interface';
import { NewspaperService } from 'src/app/services/newspaper.service';

@Component({
  selector: 'app-newspaper-list',
  templateUrl: './newspaper-list.component.html',
  styleUrls: ['./newspaper-list.component.scss']
})
export class NewspaperListComponent implements OnInit {
  articles!: Array<Article>;

  constructor(
    private newspaperService: NewspaperService
  ) { }

  ngOnInit(): void {
    this.initArticles();
  }

  initArticles() {
    this.newspaperService.getArticles().subscribe(res => {
      console.log(res);
      this.articles = res;
    })
  }

}
