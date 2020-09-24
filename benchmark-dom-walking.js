var suite = new Benchmark.Suite;

// add tests
suite.add('visit_nodes_iterative', function() {
    visit_nodes_iterative(process_node);
})
.add('visit_nodes_recursive', function() {
    visit_nodes_recursive(process_node);
})
// add listeners
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
