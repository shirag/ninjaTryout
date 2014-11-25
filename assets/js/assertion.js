function assert(value, desc) {
    createResult(value, desc);
    /*
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));

    document.getElementById("results").appendChild(li);
    */
}

function assertUndefined(value, desc) {
    try {
        typeof value === undefined;
    }catch (exception) {
        if (exception === 'ReferenceError') {
            createResult(true, desc);
        } else {
            createResult(false, desc);
        }

    }

};

function createResult(pass, desc) {
    if (!document.getElementById('results')) {
        var elt = document.createElement("ul");
        elt.id = "results";
        // append directly to body element/node or use some other node
        document.body.appendChild(elt);
    }
    var li = document.createElement("li");
    li.className = pass ? "pass" : "fail";
    li.appendChild(document.createTextNode(desc));

    document.getElementById("results").appendChild(li);
}
/*
window.onload = function() {
    assert(true, "The test suite is running.");
    assert(false, "Fail!");
};
*/
