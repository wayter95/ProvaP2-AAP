chaves = [11]

keys = [82,31,28,4,45,27,59,79,35]
function logArrayElements(element, index, array) {
    var mod = element % 11
    
    console.log(element + " = " + mod);
 
}
keys.forEach(logArrayElements)