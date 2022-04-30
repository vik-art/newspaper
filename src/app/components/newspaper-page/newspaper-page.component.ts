import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Article } from 'src/app/common/article.interface';
import { NewspaperService } from 'src/app/services/newspaper.service';

@Component({
  selector: 'app-newspaper-page',
  templateUrl: './newspaper-page.component.html',
  styleUrls: ['./newspaper-page.component.scss']
})
export class NewspaperPageComponent implements OnInit {
  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private newspaperService: NewspaperService
  ) { }

  ngOnInit() {
    this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.newspaperService.getById(params["id"])
      })
    ).subscribe(res => {
      console.log(res)
      this.article = res;
    })
  }


}
