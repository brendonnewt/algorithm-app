//! This module contains the sorting algorithm implementations
mod implementations;

use super::structs::{SortType, SortingInput, SortingOutput};
use actix_web::HttpResponse;
use implementations::{bubble_sort, insertion_sort};

/// Get the output of the sorting algorithm
///
/// # Arguments
///
/// * `input` - The input for the sorting algorithm
///
/// # Returns
///
/// * `Result<SortingOutput, HttpResponse>` - The output of the sorting algorithm
pub fn get_output(input: SortingInput) -> Result<SortingOutput, HttpResponse> {
    let sort = SortType::as_type(&input.sort);

    match sort {
        Some(SortType::BubbleSort) => Ok(bubble_sort(input)),
        Some(SortType::InsertionSort) => Ok(insertion_sort(input)),

        None => Err(HttpResponse::BadRequest().json("")),
    }
}
