(function() {
  var sheets=document.styleSheets;
  var pseudoClasses=[],i=0,j=0;
  for(i=0;i<sheets.length;i++) {
    try {
      var rules=sheets[i].cssRules;
      for(j=0;j<rules.length;j++) {
        if(rules[j].selectorText.indexOf(':before')!=-1||rules[j].selectorText.indexOf(':after')!=-1) { 
          pseudoClasses.push(rules[j].selectorText);
        }
      }
    }
    catch(ex) {}
  }
  var classes=[];
  var classesLength;
  if(pseudoClasses.length>0) {
    pseudoClasses=pseudoClasses.join(',').split(',');
    for(i=0;i<pseudoClasses.length;i++) {
      var colonPos=pseudoClasses[i].indexOf(':');
      if(colonPos!=-1) {
        classes.push(pseudoClasses[i].substring(0,colonPos));
      }
    }
  }
  classesLength=classes.length;
  if(classes.length>0) {
    alert('The list of '+classesLength+' pseudo-elements with :before or :after are: '+classes+'.\n\nKeep Going!!');
  } else {
    alert('There is no CSS content.');
    return;
  }
  var eachClass,i;
  var eachClassBefore,eachClassAfter;
  for(i=0;i<classes.length;i++) {
    eachClass=classes[i];eachClassBefore=eachClass.concat("::before");
    eachClassAfter=eachClass.concat("::after");
    document.styleSheets[0].addRule(eachClassBefore,'background-color: orange');
    document.styleSheets[0].addRule(eachClassAfter,'background-color: yellow');
  }
  alert("CSS content will be highlighted. \n\nOrange highlight on BEFORE content. \nYellow highlight on AFTER content.");
})();
