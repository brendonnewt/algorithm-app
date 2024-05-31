// Desc: Structs for the sorting and pathfinding endpoints
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize)]
/// Struct for the input of the sorting endpoint
/// Fields:
/// - sort: `String`
/// - arr: `Vec<i32>`
///
/// The SortingInput struct represents the input for the sorting endpoint.
/// The sort field represents the sorting algorithm to use, and the arr field represents the array to sort.
/// The arr field is a vector of i32 values.
/// * The sort field is a string that can be converted to a SortType enum variant.
pub struct SortingInput {
    pub sort: String,
    pub arr: Vec<i32>,
}

#[derive(Deserialize, Serialize)]
/// Struct for the output of the sorting endpoint
/// Fields:
/// - sort: `String`
/// - cycles: `Vec<Cycle>`
///
/// The SortingOutput struct represents the output for the sorting endpoint.
/// The sort field represents the sorting algorithm used, and the cycles field represents the cycles in the sorting algorithm.
/// The cycles field is a vector of Cycle structs.
/// * The sort field is a string that represents the sorting algorithm used.
pub struct SortingOutput {
    pub sort: String,
    pub cycles: Vec<Cycle>,
}

#[derive(Deserialize, Serialize)]
/// TODO: Add fields to the PathInput struct
pub struct PathInput {
    pub message: String,
}

#[derive(Deserialize, Serialize)]
/// TODO: Add fields to the PathOutput struct
pub struct PathOutput {
    pub message: String,
}

///
/// Enum for the type of sorting algorithm
/// Variants:
/// - BubbleSort
/// - InsertionSort
///
/// The SortType enum represents the type of sorting algorithm to use.
pub enum SortType {
    BubbleSort,
    InsertionSort,
}

/// Implementation of the SortType enum
impl SortType {
    /// Convert a string to a SortType enum variant
    /// # Arguments
    /// * `string` - The string to convert to a SortType enum variant
    /// # Returns
    /// * `Option<SortType>` - The SortType enum variant, or None if the string does not match any variant
    pub fn as_type(string: &str) -> Option<SortType> {
        match string {
            "BubbleSort" => Some(SortType::BubbleSort),
            "InsertionSort" => Some(SortType::InsertionSort),
            _ => None,
        }
    }
}

#[derive(Deserialize, Serialize)]
/// Struct for each cycle in the sorting algorithm
/// Fields:
/// - cycle: `Vec<Step>`
///
/// The Cycle struct represents a cycle in the sorting algorithm.
/// The cycle field is a vector of Step structs.
/// * The cycle field represents the steps in the cycle.
pub struct Cycle {
    pub cycle: Vec<Step>,
}

#[derive(Deserialize, Serialize)]
/// Struct for each step in the sorting algorithm
/// Fields:
/// - swapped: `bool`
/// - compared: `Vec<(usize, usize)>`
///
/// The Step struct represents a step in the sorting algorithm.
/// The swapped field indicates whether elements were swapped in the step, and the compared field represents the indices of the elements compared.
/// * The swapped field is a boolean value that indicates whether elements were swapped in the step.
pub struct Step {
    pub swapped: bool,
    pub compared: Vec<(usize, usize)>,
}
