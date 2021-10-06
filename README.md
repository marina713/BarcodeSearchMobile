# Getting Started with Barcode Search Mobile App

## Installation

In the project directory, you can run:

```
> yarn install

// use following command to start App in iOS
> yarn ios

// use following command to start App in Android
> yarn android
```

## Features
 - [x] Search a barcode using the Search Input
 - [x] Search a barcode using the device Camera
 - [x] If barcode has been searched previously, is retrieved from Recent Searches
 - [x] Product detailed information is displayed on the screen:
    - [x] Product name
    - [x] Product brand
    - [x] Product barcode (code)
    - [x] Product ingredients
    - [x] Product nutritional values  
 - [x] Previous items searched get stored in Recent Searches
 - [x] Scroll the recent searches and select an item searched before
 - [x] Normalize value before submitting search
 - [x] Normalize nutritional values 
 - [x] Adjusts to different screen sizes, available for Mobile and Tablet
 - [x] Handle error messages for different scenarios (no items found, invalid input,...)
 - [x] Animation when error is displayed
 - [x] Persists recent searches (and not UI-only changes such as error messages) after App is closed and opened
 - [x] Handling items without image
 - [x] Auto-scroll to top when item is searched or a recent item is tapped
 - [x] Loading mode when an item is being searched
 - [x] Unit tests covering state logic and a sample component

## Demo


https://user-images.githubusercontent.com/33632044/136284739-1d86c1e8-a520-48be-a21b-73d32f648b9e.mp4



## Testing

In the project directory, you can run the unit test using the following command:

```
> yarn jest
```

## Improvements

 - [ ] Translation
 - [ ] Automated tests
 - [ ] Create Storybook
 - [ ] Improve ingredients parsing method
 - [ ] Test unit areas to cover all of the Components
