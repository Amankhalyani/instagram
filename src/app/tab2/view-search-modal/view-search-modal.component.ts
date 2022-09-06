import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-search-modal',
  templateUrl: './view-search-modal.component.html',
  styleUrls: ['./view-search-modal.component.scss'],
})
export class ViewSearchModalComponent implements OnInit {
  @Input() img: any;
  addSave: boolean;
  index: Number = 1;
  
  constructor() { }

  ngOnInit() {
  }
  
  addLike(index) {
    document.getElementById(`heart${index}`)?.classList.add('d-block');
    document.getElementById(`heart-outline${index}`)?.classList.add('d-none');
  }
  removeLike(index) {
    document.getElementById(`heart-outline${index}`)?.classList.remove('d-none');
    document.getElementById(`heart${index}`)?.classList.remove('d-block');
  }

  doubleClick(index) {
    document.getElementById(`doubleClick${index}`)?.classList.add('d-flex');
  }

  ClickLike(index) { 
    document.getElementById(`ClickLike${index}`)?.classList.add('active');
    setTimeout(() => {
      document.getElementById(`ClickLike${index}`)?.classList.remove('active');
      document.getElementById(`doubleClick${index}`)?.classList.remove('d-flex');
    }, 750);
    this.addLike(index);
  }
}


