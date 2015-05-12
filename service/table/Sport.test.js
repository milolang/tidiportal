function test(item, user, request) {

    request.execute();
    console.log(JSON.stringify(item, null, 4));

}