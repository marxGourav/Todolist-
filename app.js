const express =require('express') ;
const bodyparser = require('body-parser');


const app = express();

app.set('view engine',"ejs");

app.get('/',function (req,res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  console.log(currentDay);
switch (currentDay) {
  case 0: day = "sunday";
    break;
    case 1: day = "monday";
      break;
      case 2: day = "tuesday";
        break;
        case 3: day = "wednesday";
          break;
          case 4: day = "thusday";
            break;
            case 5: day = "friday";
              break;
              case 6: day = "saturday";
                break;
  default: day ="out of the scope";
  console.log("new discovery on weekdays" + currentDay);

}
  res.render("list",{kindOfDay:day});
});


app.listen(3000,function (req,res) {
  console.log("started at 3000 port");
});
