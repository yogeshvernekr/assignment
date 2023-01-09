import {
  AfterContentInit,
  AfterViewInit,
  Component,
  NgZone,
  OnDestroy,
} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_material from '@amcharts/amcharts4/themes/material';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements AfterContentInit, OnDestroy {
  private chart: am4charts.XYChart;
  totalComputers: number = 0;
  totalCars: number = 0;
  totalBoats: number = 0;

  constructor(private zone: NgZone, private zone2: NgZone) {}

  ngAfterContentInit(): void {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_material);

      let chart = am4core.create('line-charts', am4charts.XYChart);
      chart.responsive.enabled = true;
      let title = chart.titles.create();
      title.text = 'Product Sales By Area';

      let data = [
        {
          area: 'Katraj',
          computers: 27,
          cars: 50,
          boats: 50,
        },
        {
          area: 'Dhankawadi',
          computers: 12,
          cars: 5,
          boats: 55,
        },
        {
          area: 'Wakad',
          computers: 45,
          cars: 37,
          boats: 90,
        },
        {
          area: 'Pimpri',
          computers: 40,
          cars: 3,
          boats: 5,
        },
        {
          area: 'Bhosri',
          computers: 120,
          cars: 30,
          boats: 50,
        },
      ];
      for (let i = 0; i < data.length; i++) {
        this.totalComputers += data[i]['computers'];

        this.totalBoats += data[i].boats;
        this.totalCars += data[i].cars;
      }

      chart.data = data;
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.title.text = 'Area';

      categoryAxis.dataFields.category = 'area';

      let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxisY.title.text = 'Sales';
      valueAxisY.renderer.minWidth = 5;

      let seriesNames = ['computers', 'cars', 'boats'];
      for (let i = 0; i < 3; i++) {
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.categoryX = 'area';
        series.dataFields.valueY = seriesNames[i];
        series.name = seriesNames[i];

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.tooltipText = 'Area: {categoryX} \n Sales: {valueY} {name}';
      }
      chart.legend = new am4charts.Legend();
      this.chart = chart;
    });

    this.zone2.runOutsideAngular(() => {
      let chart = am4core.create('bar-charts', am4charts.XYChart);
      let title = chart.titles.create();
      title.text = 'Product Sales By Area';

      let data = [
        {
          area: 'Katraj',
          computers: 27,
          cars: 50,
          boats: 50,
        },
        {
          area: 'Dhankawadi',
          computers: 12,
          cars: 5,
          boats: 55,
        },
        {
          area: 'Wakad',
          computers: 45,
          cars: 37,
          boats: 90,
        },
        {
          area: 'Pimpri',
          computers: 40,
          cars: 3,
          boats: 5,
        },
        {
          area: 'Bhosri',
          computers: 120,
          cars: 30,
          boats: 50,
        },
      ];

      chart.data = data;
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.title.text = 'Area';

      categoryAxis.dataFields.category = 'area';

      let valueAxisY = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxisY.title.text = 'Sales';
      valueAxisY.renderer.minWidth = 5;

      let seriesNames = ['computers', 'cars', 'boats'];
      for (let i = 0; i < 3; i++) {
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = 'area';
        series.dataFields.valueY = seriesNames[i];
        series.name = seriesNames[i];

        let bullet = series.bullets.push(new am4charts.LabelBullet());
        bullet.label.text = '{valueY}';
        bullet.locationY = 0.5;
        // bullet.tooltipText = 'Area: {categoryX} \n Sales: {valueY} {name}';
      }
      chart.legend = new am4charts.Legend();
      this.chart = chart;
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
    this.zone2.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
