import { Component, Input, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3']; 
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
   ];
  @Input('title') titulo: string = 'Sin título';

  // Doughnut
  // public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100]
  // ];

  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
