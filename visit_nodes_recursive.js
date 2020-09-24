function visit_nodes_recursive(func, node) {
    node = node || document;

    /* Do something with node here */
    func.call(null, node);

    if (node.firstChild) {
        visit_nodes_recursive(func, node.firstChild);
    }

    if (node.nextSibling) {
        visit_nodes_recursive(func, node.nextSibling);
    }
}