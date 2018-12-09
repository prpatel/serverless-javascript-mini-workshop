function main(params) {
    var name = params.name || 'User';
    var place = params.place || 'Earth';
    return {payload:  'Hello from ' + name + ' location: ' + place};
}