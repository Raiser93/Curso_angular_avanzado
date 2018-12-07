import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-donacomponent',
  templateUrl: './grafico-donacomponent.component.html',
  styles: []
})
export class GraficoDonacomponentComponent implements OnInit {

  // Doughnut
  @Input() doughnutChartLabels: string[];
  @Input() doughnutChartData: number[];
  @Input() doughnutChartType: string;

  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
