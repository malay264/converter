import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length',
  templateUrl: './length.component.html',
  styleUrls: ['./length.component.css']
})
export class LengthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

convert()
{
  var inputlength = document.getElementById('inplen').value;
  var inputtype = document.getElementById('inptype').value;
  var outputtype = document.getElementById('outtype').value;

  if(inputtype != "foot")
  {
    var footlength=this.tofoot(inputlength,inputtype);
  }

  var outputlength = this.toouttype(footlength,outputtype);
  alert (inputlength+inputtype+" = "+outputlength+outputtype);
}

toouttype(inplen,outtype)
{
  switch(outtype)
  {
    case "foot":
      return inplen;
      break;

      case "inch":
          return (inplen*12);
          break;
    
        case "km":
          return (inplen/3280.84);
          break;
    
        case "m":
          return (inplen/3.28084);
          break;
    
        case "cm":
          return (inplen/0.0328084);
          break;
    
        case "mm":
          return (inplen/0.00328084);
          break;
    
        case "mile":
          return (inplen/5280);
          break;
    
        default:
          alert ("Improper Output Type: TRY AGAIN!");
          break;
    
  }
}

tofoot(inplen,inptype)
{
  switch (inptype)
  {
    case "inch":
      return (inplen/12);
      break;

    case "km":
      return (inplen*3280.84);
      break;

    case "m":
      return (inplen*3.28084);
      break;

    case "cm":
      return (inplen*0.0328084);
      break;

    case "mm":
      return (inplen*0.00328084);
      break;

    case "mile":
      return (inplen*5280);
      break;

    default:
      alert ("Improper Input Type: TRY AGAIN!");
      break;
  }
}
}
