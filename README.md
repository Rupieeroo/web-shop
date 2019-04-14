<h1 align="center">
  Web Store Test
</h1>

A simple and responsive web store built as a tech test. This project has been built using React with Jest and Enzyme. The bulk of the code sits in the src folder: components is where all of the React components sit; the Products component renders all the other components, basket displays the basket object that is rendered in Products and all the others are clothing item processors. App.js renders the app (the Products component). Tests are where you can find the Jest and Enzyme testing and the Cypress folder (in the root directory) is where I have the cypress tests.

### Summery
    There are a lot of things I would like to add to it if I go further: 1.) I ran out of time to go further with the user stories and felt I was very close to finishing the next one. 2.) In the future I would like to add a database to this project and put the clothing items objects into there instead of making them into props. A lot of the functionality of each component is almost identical and with more time and a deeper tech structure I could have turned the Products component into an item processor and taken all of the clothing components out of the project. and 3.) It is not a good looking site, it needs a lot (and I mean A LOT) of attention in the styling department. But overall I enjoyed the challenge of this project and am happy with the aspects i did complete.

## :running: Development Journey

1.  **Creating a responsive React Web-app**

    This project was completed over 4 days. The initial two days were spent experimenting and learning with different libraries for React, namely Gatsby and Stripe. I built a functional item displayer on the Gatsby framework and had most of the functionality for the shop implemented with Stripe. In the end I felt like the frameworks were taking me in the wrong direction, so using what I had learnt, I started the project again in vanilla React.

    I initialised the project with:
    ```sh
    create-react-app web-shop
    ```

    'Create-react-app' ships with jest and babel, so to complete my environment I added the enzyme testing library:
    ```sh
    yarn add enzyme enzyme-adapter-react-16 react-test-renderer
    ```
    I began by making the 'products' test and component. As I wanted this project to be responsive I created props for the products component to pass into the rendering, rather than rendering static jsx tags. I followed this format for each of the different clothing component sections and their testing counterparts.

    Once each of the clothing components had been completed, I refactored the project to render all of them in the products component.

    Now that all the items were being rendered my focus could be turned to completing the user stories and creating the basket component.

2.  **Completing the user stories**

    The prioritised list of user stories is as follows:


    As a User I can view the products and their category, price and availability information.

    ***1. As a User I can add a product to my shopping cart.***
      After completing the initial user story, This one proved to be time consuming. I have recently come to understand event handlers, states and props and how they interact between parent and children components so initially this worked fine. I could get states and props to pass down to Mens Footwear and Basket to do simple functions such as emptying the basket of items, but the difficulty came at state changes. As I was trying to get Mens Footwear items to be added individually to the basket I found that clicking the button would cause a recursion; adding every item of clothing to the basket continuously until the browser broke. It was only after I came to understand how anonymous functions worked once passed into children that I could solve the problem, and then add the same functionality to each of the clothing components.

    ***2. As a User I can remove a product from my shopping cart.***
      A much easier task as all that was needed was to delete the item from the basket array inside the Basket component. handleDeleteFromBasket in the Products component just removed the object by itself, I tested the edge cases by adding multiple amounts of the same object and it did indeed only delete the one selected.

    ***3. As a User I can view the total price for the products in my shopping cart.***
      I attempted this for a couple of hours. The issue I ran into was to do with how I had built the adding and deleting from basket functions. deleting from basket was completed in the Basket component, this allowed me to easily take money away from the basketTotal object. However because the adding to basket functions are called in each clothing component, it was not so easy to connect them and in the end time was against me for getting any further with this so I decided to leave the user stories here.

## :white_check_mark: Testing

    The components and app are autonomously tested with the objects that they render with, the more complicated the functionality later on the more in-depth I could have tested. These tests are run with:
    ```sh
    yarn test
    ```

    The feature testing for the buttons was conducted with Cypress. Again had I got further I would have added more tests for what should be rendered to the browser but what I have tested is all of the pages functionality. This is run with:
    ```sh
    cypress run
    ```

    Throughout the project each function or component was manually tested as it was being added. I committed the tests to github as I ran through them. Most of this was done by gaining visibility with console.log()s and adding default values to objects that would later be more interacted with.

## 💫 Deployment

This test project has been deployed using Heroku at:
https://web-shop-rupert.herokuapp.com/
