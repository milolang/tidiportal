//function read(query, user, request) {


//    request.execute();    

//}
function read(query, user, request) {
    request.execute({
        success: function (results) {
            results.forEach(function (r) {
                r.scriptComment =
                'this was added by a script after querying the database';
            });
            request.respond();
        }
    });
}