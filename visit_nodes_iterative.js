function visit_nodes_iterative(func, node) {
    node = node || document;

    do {
        /* Do something with node here */
        func.call(null, node);

        node = node.firstChild || node.nextSibling || function() {
            while ((node = node.parentNode) && !node.nextSibling);
            return node ? node.nextSibling : null;
        }();
    }
    while (node);
}