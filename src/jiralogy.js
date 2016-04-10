// "inspired by" cloud-to-butt's source

function walk(node) {
    if (!node) return;
    
    var child, next;

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    JIRA_BASE_URL = "http://10.38.0.9:8080/browse/";
    var n = textNode.parentNode;
    n.innerHTML = n.innerHTML.replace(/([A-Z]+-\d+)/g, '<a href="' + JIRA_BASE_URL + '$1">$1</a>');
}

walk(document.querySelector("p.commit-title"));
