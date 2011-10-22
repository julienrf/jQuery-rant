(function () {
  var button = document.createElement('button');
  button.textContent = "Run benchmark";
  button.onclick = runBenchmark;
  document.body.appendChild(button);
  
  function runBenchmark() {
    var widgets = [];
    var ws = document.querySelectorAll('.item-list-widget');
    var n = ws.length;
    for (var i = 0 ; i < n ; i++) {
      widgets.push(Widget(ws.item(i)));
    }
    
    // Let’s start the bench: for each widget add it 1000 items and click 'next'
    var start = (new Date).getTime();
    
    for (var i = 0 ; i < n ; i++) {
      var widget = widgets[i];
      for (var j = 0 ; j < 1000 ; j++) {
        widget.add.click();
      }
      widget.next.click();
    }
    
    var diff = (new Date).getTime() - start;
    alert(diff);
  
    function Widget(elt) {
      return {
        add: elt.querySelector('.add-item'),
        next: elt.querySelector('.next')
      };
    }
  }
})();