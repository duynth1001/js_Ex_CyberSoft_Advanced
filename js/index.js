//Bai 1
function exe1Calculation_handler()
{
    var dateInput= +document.getElementById('dateInput').value
    var monthInput= +document.getElementById('monthInput').value
    var yearInput= +document.getElementById('yearInput').value
    //not null validation
    if(dateInput==0||monthInput==0||yearInput==0)
    {
        alert('Vui lòng nhập đầy đủ ngày tháng năm')
        return
    }
    //only number validation
    if(/^[0-9]+$/.test(dateInput)&&/^[0-9]+$/.test(monthInput)&&/^[0-9]+$/.test(yearInput))
    {
        const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        monthInput=monthInput-1
        var day= new Date(`${yearInput}`,`${monthInput}`,`${dateInput}`)
        var nextDay=new Date(day)
        nextDay.setDate(day.getDate()+1)
        var prevDay=new Date(day)
        prevDay.setDate(day.getDate()-1)
        document.getElementById('exe1Result').innerHTML=`
        Ngày bạn nhập là: ${day.getDate()}/${months[day.getMonth()]}/${day.getFullYear()}
        <br>
        Ngày trước đó là: ${prevDay.getDate()}/${months[prevDay.getMonth()]}/${prevDay.getFullYear()}
        <br>
        Ngày sau đó là: ${nextDay.getDate()}/${months[nextDay.getMonth()]}/${nextDay.getFullYear()}        
        `
    }
    else
    {
    alert('Vui lòng chỉ nhập định dạng số')
    return
    }    
}
document.getElementById('exe1Calculation').addEventListener('click',exe1Calculation_handler)

//Bai 2
function exe2Calculation_handler()
{
    var monthInput= +document.getElementById('monthInputEx2').value
    var yearInput= +document.getElementById('yearInputEx2').value
    //not null validation
    if(monthInput==0||yearInput==0)
    {
        alert('Vui lòng nhập đầy đủ tháng năm')
        return
    }
    //only number validation
    if(/^[0-9]+$/.test(monthInput)&&/^[0-9]+$/.test(yearInput))
    {
        var resStr;
        switch (monthInput) {
            case 1:
              if (monthInput == 1)   
            resStr = "Tháng 1 có 31 ngày"
              break;
            case 2:
              if (monthInput == 2) {
                if (yearInput % 4 == 0 || yearInput % 400 == 0)   
               resStr = "Tháng 2 có 29 ngày"
                else  
                resStr = "Tháng 2 có 28 ngày"
              }
            case 3:
              if (monthInput == 3) 
             resStr = "Tháng 3 có 31 ngày"
              break;
            case 4:
              if (monthInput == 4) 
               resStr = "Tháng 4 có 30 ngày"
              break;
            case 5:
              if (monthInput == 5) 
               resStr = "Tháng 5 có 31 ngày"
              break;
            case 6:
              if (monthInput == 6)  
              resStr = "Tháng 6 có 30 ngày"
              break;
            case 7:
              if (monthInput == 7) 
               resStr = "Tháng 7 có 31 ngày"
              break;
            case 8:
              if (monthInput == 8)
                resStr = "Tháng 8 có 31 ngày"
              break;
            case 9:
              if (monthInput == 9)  
              resStr = "Tháng 9 có 30 ngày"
              break;
            case 10:
              if (monthInput == 10) 
               resStr = "Tháng 10 có 31 ngày"
              break;
            case 11:
              if (monthInput == 11)  
               resStr ="Tháng 11 có 30 ngày"
              break;
            default:
               resStr = "Tháng 12 có 31 ngày"
            }
        document.getElementById('exe2Result').innerHTML=resStr    
    }
    else
    {
    alert('Vui lòng chỉ nhập định dạng số')
    return
    }    
}
document.getElementById('exe2Calculation').addEventListener('click',exe2Calculation_handler)

//Bai 3

// countDigit
function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}
function exe3Calculation_handler()
{
  var threeDigitNumb = +document.getElementById('threeDigitNumb').value
  if(threeDigitNumb==0||digits_count(threeDigitNumb)!=3)
  {
    alert("Vui lòng nhập số có 3 chữ số")
    return
  }
  //Only numb
  if(/^[0-9]+$/.test(threeDigitNumb))
  {
    var firstDigit =Number(String(threeDigitNumb)[0])
    var secDigit=Number(String(threeDigitNumb)[1])
    var thirdDigit=Number(String(threeDigitNumb)[2])
    const readDict = [
      'Không','Một','Hai','Ba','Bốn','Năm','Sáu','Bảy','Tám','Chín'
    ]
    var resultStr
    if(thirdDigit==0&&secDigit==0)
    resultStr='Cách đọc của số bạn vừa nhập là: '+readDict[firstDigit]+' trăm'
   else if(thirdDigit==1&&secDigit==0)
    resultStr='Cách đọc của số bạn vừa nhập là: '+readDict[firstDigit]+' trăm lẻ một'
    else if(secDigit==0)
    resultStr='Cách đọc của số bạn vừa nhập là: '+readDict[firstDigit]+' trăm lẻ '+readDict[thirdDigit]
    else if(thirdDigit==0&&secDigit==1)
    resultStr='Cách đọc của số bạn vừa nhập là: '+readDict[firstDigit]+' trăm mười'
    else if(thirdDigit==1)
    resultStr='Cách đọc của số bạn vừa nhập là: '+readDict[firstDigit]+' trăm '+readDict[secDigit]+' mươi mốt'
    else if(thirdDigit==0)
    resultStr='Cách đọc của số bạn vừa nhập là: '+readDict[firstDigit]+' trăm '+readDict[secDigit]+' mươi'
    else
    resultStr='Cách đọc của số bạn vừa nhập là: '+readDict[firstDigit]+' trăm '+readDict[secDigit]+' mươi '+readDict[thirdDigit]
    resultStr= resultStr.toLowerCase()
    document.getElementById('exe3Result').innerHTML=resultStr
  }
  else
  {
    alert('Vui lòng chỉ nhập định dạng số')
    return
  }
}
document.getElementById('exe3Calculation').addEventListener('click',exe3Calculation_handler)

//Bai 4
function exe4Calculation_handler(){
  var stuAName = document.getElementById('studentAName').value
  var stuACoorX = +document.getElementById('studentACoorX').value
  var stuACoorY = +document.getElementById('studentACoorY').value
  var stuBName = document.getElementById('studentBName').value
  var stuBCoorX = +document.getElementById('studentBCoorX').value
  var stuBCoorY= +document.getElementById('studentBCoorY').value
  var stuCName=document.getElementById('studentCName').value
  var stuCCoorX= +document.getElementById('studentCCoorX').value
  var stuCCoorY = +document.getElementById('studentCCoorY').value
  var schoolCoorX =+document.getElementById('schoolCoorX').value
  var schoolCoorY= +document.getElementById('schoolCoorY').value
  //not null validdation
  if(stuAName==''||stuBName==''||stuCName==''||
  stuACoorX.toString()==''||stuACoorY.toString()==''||
    stuBCoorX.toString()==''||stuBCoorY.toString()==''||
    stuCCoorX.toString()==''||stuCCoorY.toString()==''||
    schoolCoorX.toString()==''||schoolCoorY.toString()==''
  )
  {
    alert('Vui lòng nhập đầy đủ thông tin ở các trường')
    return
  }

  const dataList = [
    {'name':stuAName,'coorX':stuACoorX,'coorY':stuACoorY},
    {'name':stuBName,'coorX':stuBCoorX,'coorY':stuBCoorY},
    {'name':stuCName,'coorX':stuCCoorX,'coorY':stuCCoorY},
    {'coorX':schoolCoorX,'coorY':schoolCoorY}
  ]
  var distanceList = []
  for(var i=0;i<3;i++)
  {
    var tempDistanceX = dataList[i]['coorX']
    var tempDistanceY = dataList[i]['coorY']
    var finalDistance = Math.sqrt(Math.pow(dataList[3]['coorX']-tempDistanceX,2)+Math.pow(dataList[3]['coorY']-tempDistanceY,2))    
    finalDistance=finalDistance.toFixed(2)
    var tempStu;
    tempStu = {'name':dataList[i]['name'],'distance':finalDistance}
    distanceList.push(tempStu)
  }
  distanceList.sort(function(a, b){return b.distance-a.distance})
  document.getElementById('exe4Result').innerHTML=`
  Sinh viên xa trường nhất là: ${distanceList[0]['name']}
  `
}
document.getElementById('exe4Calculation').addEventListener('click',exe4Calculation_handler)