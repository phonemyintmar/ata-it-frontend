import { Component } from '@angular/core';

import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { MockDataService } from 'src/app/service/mock-data.service';

@Component({
  selector: 'app-sample-one',
  templateUrl: './sample-one.component.html',
  styleUrls: ['./sample-one.component.scss']
})
export class SampleOneComponent {

  constructor(private calendar: NgbCalendar, private mockDataService: MockDataService) { }

  modelStart: NgbDate | null = null;
  modelEnd: NgbDate | null = null;
  items: any[] = [];
  // use rowCache if we want to close other rows when one row is open.
  // rowCache: any = null;

  ngOnInit() {
    this.selectDate();
    this.mockDataService.getMockData().subscribe((data) => {
      this.items = data;
    });
  }

  selectDate() {
    //one week time
    this.modelStart = this.calendar.getPrev(this.calendar.getToday(), undefined, 7);
    this.modelEnd = this.calendar.getToday();
  }



  toggleAccordion(item: any): void {
    // setTimeout(() => {
    //   if (this.rowCache !== null && this.rowCache !== item) {
    //     this.rowCache.isOpen = false;
    //   }
    item.isOpen = !item.isOpen;
    //   this.rowCache = item;
    // }, 300);

  }
}
