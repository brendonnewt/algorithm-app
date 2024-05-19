mod implementations;

use super::structs::{SortType, SortingInput, SortingOutput};
use actix_web::HttpResponse;
use implementations::bubble_sort;

/***
* Desc: Get the output of the sorting algorithm
* Args: input: SortingInput
* Return: Result<SortingOutput, HttpResponse>

   * The function takes a SortingInput struct as an argument and returns a Result<SortingOutput, HttpResponse>.
   * The function first gets the sort type from the input and then matches it to the corresponding SortType.
   * If the sort type is incorrect, it returns a BadRequest response.
*/
pub fn get_output(input: SortingInput) -> Result<SortingOutput, HttpResponse> {
    let sort = SortType::as_type(&input.sort);

    match sort {
        Some(SortType::BubbleSort) => Ok(bubble_sort(input)),

        None => Err(HttpResponse::BadRequest().json("")),
    }
}
