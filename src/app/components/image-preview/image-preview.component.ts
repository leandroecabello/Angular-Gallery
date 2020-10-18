import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/interfaces/Image';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {

  public id: string;
  public image: Image;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private imageService: ImageService
    ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.imageService.getImageById(this.id)
        .subscribe(
          res => {
            this.image = res;
          },
          err => console.log(err)
        );
    });
  }

  updateImage(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.imageService.updateImage(this.id, title.value, description.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/images']);
        },
        err => console.log(err)
      );
    return false;
  }

  deleteImage(id: string) {
    this.imageService.deleteImage(id)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/images']);
        },
        err => console.log(err)
      );
  }

}
