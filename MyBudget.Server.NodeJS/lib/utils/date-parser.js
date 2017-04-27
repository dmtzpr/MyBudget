module.exports = {
    parse: function (dateString) {
        var parts = dateString.split('.');

        return new Date(parts[2], parts[1] - 1, parts[0]).toISOString();
    }
};