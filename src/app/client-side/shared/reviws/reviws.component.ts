import { Component, OnInit } from '@angular/core';

interface testimonialData {
  activeImage: string;
  opacityImage: string;
  description: string;
  isActive: boolean;
  id: number;
  name: string;
  title: string;
}


@Component({
  selector: 'app-reviws',
  templateUrl: './reviws.component.html',
  styleUrls: ['./reviws.component.css']
})
export class ReviwsComponent implements OnInit {
  
  activeContent !: any;
  arrowRight!: boolean;
  arrowLeft!: boolean;
  nextArrowRight !: boolean;
  nextArrowLeft !: boolean;
  selectedReview: number = 0

  constructor() { }
  
  ngOnInit(): void {
    // NEW
    // this.activeContent = this.testimonial.filter(res => res.isActive === true);
    // this.arrowRight = true;
    // this.nextArrowRight = true;
    // this.arrowLeft = false;                
    // this.nextArrowLeft = false;

    setInterval((id: number) => {
      // this.selectedReview++
      // if(this.selectedReview > this.testimonial.length-1){
      //   this.selectedReview = 0;
      // }
      // if (id < this.testimonial.length) {
      //   this.testimonial[id].isActive = false;
      //   if ((id + 1) < this.testimonial.length) {
      //     this.testimonial[id + 1].isActive = true;
          
      //     this.activeContent = this.testimonial.filter(res => res.isActive === true);
      //   } else {
      //   }
      // }

      this.selectedReview++

      if(this.selectedReview === this.testimonial.length - 1) {
        this.selectedReview = 0
      }
      // this.testimonial.forEach((res)=> {
      //   if(this.selectedReview === res.id) {
      //     res.isActive = true;
      //   }else {
      //     res.isActive = false
      //   }
      // })
    }, 3000)
  }


  testimonial: Array<testimonialData> = [
    {
      activeImage: 'assets/images/teacher1.webp',
      opacityImage: 'assets/images/teacher2.webp',
      name: 'Damilola',
      title: 'mother',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi nec pulvinar pretium duis venenatis vel arcu. Tristique accumsan, mi vestibulum, amet, feugiat. Neque, dictum diam eget nisi. Vitae cursus nullam at pellentesque.',
      isActive: true,
      id: 0
    },
    {
      activeImage: 'assets/images/teacher3.webp',
      opacityImage: 'assets/images/teacher4.webp',
      name: 'Opeyemi',
      title: 'father',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      isActive: false,
      id: 1
    },
    {
      activeImage: 'assets/images/teacher2.webp',
      opacityImage: 'assets/images/teacher4.webp',
      name: 'Cliton',
      title: 'sister',
      description: 'We are not just a recruitment agency, we are experts in finding jobs that suit you. our goal is to provide you with a top-notch job search experience from start to finish… and even beyond! Apply online today to get a job.',
      isActive: false,
      id: 2
    },
  ]


}

