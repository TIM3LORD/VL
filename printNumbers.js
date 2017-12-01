function printnos()
  {
  var i;
  for(i=1;i<=100;i++)
    {
      document.write("<br><br>"+i);
      if(i%3==0)
        document.write(" Earth");
      if(i%5==0)
        document.write(" Jupiter");
      if (i%9==0)
        document.write(" Pluto");
     }
  }
