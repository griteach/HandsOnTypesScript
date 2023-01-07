var jaden = {
    name: "Jaden",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = jaden.id + " - " + jaden.name;
        if (!jaden.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(jaden.getUniqueId());
var linda = {
    name: "Linda",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = linda.id + " - " + linda.name;
        if (!linda.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(linda.getUniqueId());
