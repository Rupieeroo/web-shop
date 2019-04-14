<h1 align="center">
  Web Store Test
</h1>

A simple and responsive web store built as a tech test. This project has been built using React with Jest and Enzyme.

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

    1. ***As a User I can add a product to my shopping cart.***
      After completing the initial user story, This one proved to be time consuming. I have recently come to understand event handlers, states and props and how they interact between parent and children components so initially this worked fine. I could get states and props to pass down to Mens Footwear and Basket to do simple functions such as emptying the basket of items, but the difficulty came at state changes. As I was trying to get Mens Footwear items to be added individually to the basket I found that clicking the button would cause a recursion; adding every item of clothing to the basket continuously until the browser broke. It was only after I came to understand how anonymous functions worked once passed into children that I could solve the problem, and then add the same functionality to each of the clothing components.


    2. ***As a User I can remove a product from my shopping cart.***
      A much easier task as all that was needed was to delete the item from the basket array inside the Basket component. handleDeleteFromBasket in the Products component just removed the object by itself, I tested the edge cases by adding multiple amounts of the same object and it did indeed only delete the one selected.


    3. As a User I can view the total price for the products in my shopping
    4. cart.
    5. As a User I can apply a voucher to my shopping cart.
    6. As a User I can view the total price for the products in my shopping cart
    7. with discounts applied.
    8. As a User I am alerted when I apply an invalid voucher to my shopping
    9. cart.
    10. As a User I am unable to Out of Stock products to the shopping cart.

3.  **Testing the web store**

    -final section-

## :white_check_mark: Testing


## 💫 Deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
