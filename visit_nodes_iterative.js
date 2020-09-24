function visit_nodes_iterative(callback, node) {
    node = node || document;

    do {
        callback.call(null, node);

        node = node.firstChild || node.nextSibling || function() {
            while ((node = node.parentNode) && !node.nextSibling);
            return node ? node.nextSibling : null;
        }();
    } while (node);
}
