function main(params) {
    var name = params.name || 'User';
    var place = params.place || 'Earth';
    return {payload:  'Chained function from ' + name + ' location: ' + place};
}