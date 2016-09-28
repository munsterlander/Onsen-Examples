<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
 <script>    
    function inspect(obj, maxLevels, level, val)
    {
      var str = '', type, msg;
        if(val == null)  val = false;
        if(level == null)  level = 0;
        if(maxLevels == null) maxLevels = 1;
        if(maxLevels < 1)     
            return '<font color="red">Error: Levels number must be > 0</font>';
        if(obj == null)
        return '<font color="red">Error: Object <b>NULL</b></font>';
        str += '<ul>';
        for(var property in obj)
        {
          try
          {
              type =  typeof(obj[property]);
              if((type == 'object') && (obj[property] != null) && (level+1 < maxLevels)){
                str += '<li><a href="#" onclick="$(this).parent().children(&apos;ul&apos;).toggle();">(' + type + ') ' + property + '</a>';
                str += inspect(obj[property], maxLevels, level+1, val);
              } else {
                str += '<li>(' + type + ') ' + property + 
                     ( (obj[property]==null)?(': <b>null</b>'):((val)?(' - '+JSON.stringify(obj[property])):(''))) + '</li>';
              }
          }
          catch(err)
          {
            if(typeof(err) == 'string') msg = err;
            else if(err.message)        msg = err.message;
            else if(err.description)    msg = err.description;
            else                        msg = 'Unknown';    
            str += '<li><font color="red">(Error) ' + property + ': ' + msg +'</font></li>';
          }
        }
          str += '</ul>';    
        return str;
    }
</script>
