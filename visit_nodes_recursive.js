function visit_nodes_recursive(callback, node) {
    node = node || document;
    callback.call(null, node);

    if (node.firstChild)
        visit_nodes_recursive(callback, node.firstChild);

    if (node.nextSibling)
        visit_nodes_recursive(callback, node.nextSibling);
}
