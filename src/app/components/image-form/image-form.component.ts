import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/service/image.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {

  file: File;
  imageSelected: string | ArrayBuffer;

  constructor(
    private imageService: ImageService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  chooseImage(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0] as File;
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.imageSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  loadImage(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.imageService.createImage(title.value, description.value, this.file)
      .subscribe(
        res => {
          this.router.navigate(['/images']);
        },
        err => console.log(err)
      );
    return false;
  }
}
