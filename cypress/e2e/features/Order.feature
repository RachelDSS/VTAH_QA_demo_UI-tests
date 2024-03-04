@FEATURE_002
Feature: As a customer I would like to be able to pass an order

  @login @order
  Scenario: Customer pass an order - Nominal Case

    Given go to the e-commerce web site
    And access to the menu 'Signup / Login'
    And connect with the account 'VTAH'

    When access to the menu 'Products'
    And search product by key words 'Frozen'
    Then the product 'Frozen Tops For Kids' is display

    When add the product 'Frozen Tops For Kids' to cart
    Then a cart confirmation message is display

    When access to the cart by the confirmation modale
    Then the product 'Frozen Tops For Kids' is display in the cart

    When proceed to checkout
    Then the delivery address is the address of 'VTAH'
    And the product 'Frozen Tops For Kids' is display in the cart

    When confirm the checkout
    And pay with the 'VISA' credit card informations
    Then the order is successfully validate
