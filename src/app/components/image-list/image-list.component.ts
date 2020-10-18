import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  public images = [];

  constructor(
    private imageService: ImageService,
    private router: Router
    ) { }

  ngOnInit() {
    this.imageService.getImages()
      .subscribe(
        res => {
          this.images = res;
        },
        err => console.log(err)
      );
  }

  cardSelected(id: string) {
    this.router.navigate(['/images', id]);
  }

}
