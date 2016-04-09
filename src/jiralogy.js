/*
// "inspired by" cloud-to-butt's source

function walk(node) {
    var child, next;
    
    if ((node.tagName && node.classList && node.classList.indexOf) && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
        || node.classList.indexOf('ace_editor') > -1)) {
        return;
    }

    console.log(node.nodeType, node);
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
            console.log("handleText on", node.nodeName, "parent", node.parentNode.nodeName);
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var s = textNode.parentNode.innerHTML.replace(/([A-Z]+-\d+)/g, "<a href=\"http://jira/$1\">$1</a>");
    console.log("replaced", s, textNode, textNode);
    textNode.parentNode.innerHTML = s;
}

//handleText(document.body);
*/

document.body.innerHTML = document.body.innerHTML.replace(/([A-Z]+-\d+)/g, "<a href=\"http://jira/$1\">$1</a>");
console.log("running jiralogy", new Date)
