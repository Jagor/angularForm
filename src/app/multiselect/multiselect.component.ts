import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

interface Assignee {
  workgroup: String
  assignee: String
}

interface Service {
  name: String
  title: String
  assignees?: Assignee[]
}

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})

export class MultiselectComponent implements OnInit {
  assignees: Assignee[] = [
    {workgroup: 'qqq', assignee: 'Иванов'},
    {workgroup: 'qqq', assignee: 'Петров'},
    {workgroup: 'qqq', assignee: 'Сидоров'},
    {workgroup: 'qqq', assignee: 'Гудков'},
  ]

  service: Service =
    {title: 'Сервис 1', name: 'service1', assignees: [
        {workgroup: 'qqq', assignee: 'Иванов'},
        {workgroup: 'qqq', assignee: 'Петров'},
      ]}

  serviceForm: FormGroup;
  constructor() {
    this.serviceForm = new FormGroup({
      'title': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'assignees': new FormControl(this.service.assignees)
    })
  }

  ngOnInit(): void {
    // this.serviceForm.setValue({
    //   'title': 'sdfsfdsf'
    // });
  }

}
