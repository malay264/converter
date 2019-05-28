import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  constructor() { }

  convert()
{
  var inputweight = document.getElementById('inpval').value;
  var inputtype = document.getElementById('inptype').value;
  var outputtype = document.getElementById('outtype').value;

  if(outputtype == "kg")
  {
    var outputweight=this.ctoKg(inputweight,inputtype)
  }
  if(outputtype == "g")
  {
    var outputweight=this.ctoG(inputweight,inputtype)
  }
  if(outputtype == "p")
  {
    var outputweight=this.ctoPd(inputweight,inputtype)
  }
  if(outputtype == "o")
  {
    var outputweight=this.ctoOun(inputweight,inputtype)
  }
  
  alert (inputweight+inputtype+" = "+outputweight+outputtype);
}

  ctoKg(value, s)
  {
    switch (s) {
      case "kg":
        return value;
        break;
      case "g":
        return(value / 1000);
        break;
      case "p":
        return(value / 2.205);
        break;
      case "o":
        return(value / 35.274);
        break;
      default:
        break;
    }
  }
  ctoG(value, s)
  {
    switch (s) {
      case "kg":
        return (value * 1000);
        break;
      case "g":
        return(value);
        break;
      case "p":
        return(value * 453.592);
        break;
      case "o":
        return(value * 28.35);
        break;
      default:
        break;
    }
  }
  ctoPd(value, s)
  {
    switch (s) {
      case "kg":
        return (value * 2.205);
        break;
      case "g":
        return(value / 453.592);
        break;
      case "p":
        return(value);
        break;
      case "o":
        return(value/ 16);
        break;
      default:
        break;
    }
  }
  ctoOun(value, s)
  {
    switch (s) {
      case "kg":
        return (value * 35.274);
        break;
      case "g":
        return(value / 28.35);
        break;
      case "p":
        return(value * 16);
        break;
      case "o":
        return(value);
        break;
      default:
        break;
    }
  }
  
  ngOnInit() {
  }

}
