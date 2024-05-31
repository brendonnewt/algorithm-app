mod sorting;
mod structs;

use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use sorting::get_output;
use structs::SortingInput;

/// Handler for the sorting endpoint
/// # Arguments
/// * `input` - The input for the sorting endpoint
/// # Returns
/// * `Result<web::Json<SortingOutput>, actix_web::Error>` - The output of the sorting endpoint
/// The sort_handler function is the handler for the sorting endpoint.
/// It takes a JSON input and returns a JSON output.
async fn sort_handler(
    input: web::Json<SortingInput>,
) -> Result<web::Json<structs::SortingOutput>, actix_web::Error> {
    // Perform alg here
    let result = get_output(input.into_inner());

    match result {
        Ok(output) => Ok(web::Json(output)),
        Err(_) => Err(actix_web::error::ErrorBadRequest("Invalid input")),
    }
}

/// Handler for the path endpoint
/// # Arguments
/// * `input` - The input for the path endpoint
/// # Returns
/// * `Result<web::Json<PathOutput>, actix_web::Error>` - The output of the path endpoint
/// TODO: Implement the path_handler function
async fn path_handler(
    input: web::Json<SortingInput>,
) -> Result<web::Json<structs::SortingOutput>, actix_web::Error> {
    // Perform alg here
    let result = get_output(input.into_inner());

    match result {
        Ok(output) => Ok(web::Json(output)),
        Err(_) => Err(actix_web::error::ErrorBadRequest("Invalid input")),
    }
}

/// Main function to start the Actix server
/// # Returns
/// * `std::io::Result<()>` - The result of running the Actix server
/// The main function starts the Actix server and binds it to the localhost on port 8080.
/// It creates a new Actix App with the sorting and path endpoints, and runs the server.
/// The server is run asynchronously using the `actix_web::main` attribute.
/// The server is started by calling the `run` method on the `HttpServer` struct.
/// The server is bound to the localhost on port 8080 using the `bind` method.
/// The server is run using the `await` keyword.
/// The server is started with the `HttpServer::new` method, which takes a closure that creates the Actix App.
/// The Actix App is created with the `App::new` method, which takes the sorting and path endpoints.
/// The sorting and path endpoints are created with the `route` method, which takes the endpoint path and handler function.
/// The handler functions are the `sort_handler` and `path_handler` functions.
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::permissive();
        App::new()
            .wrap(cors)
            .route("/api/algorithm/sort", web::post().to(sort_handler))
            .route("/api/algorithm/path", web::post().to(path_handler))
    })
    .bind("localhost:8080")?
    .run()
    .await
}
