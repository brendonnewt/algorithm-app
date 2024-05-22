mod sorting;
mod structs;

use actix_cors::Cors;
use actix_web::{web, App, HttpServer};
use sorting::get_output;
use structs::SortingInput;

/***
 * Desc: Handler for the sorting endpoint
 * Args: input: web::Json<SortingInput>
 * Return: Result<web::Json<SortingOutput>, actix_web::Error>
 *
 * The function takes a web::Json<SortingInput> as an argument and returns a Result<web::Json<SortingOutput>, actix_web::Error>.
 * The function calls the get_output function from the sorting module and returns the output as a JSON response.
 */
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

/***
 * Desc: Main function to start the Actix server
 * Return: std::io::Result<()>
 *
 * The main function starts the Actix server on localhost:8080 and routes the /api/algorithm/sort endpoint to the sort_handler function.
 */
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
