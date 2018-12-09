function main(params) {
    var name = params.payload;
    name = name.toUpperCase();
    return {payload:  name};
}