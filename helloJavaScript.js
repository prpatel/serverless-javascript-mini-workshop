function main(params) {
    var name = params.name || 'User';
    var place = params.place || 'Vulcan';
    return {greetings:  'Hello from ' + name + ' location: ' + place};
}
