# PowLang Compiler

PowLang is a simple programming language designed to illustrate basic compiler concepts. This project includes a JavaScript-based compiler and a Next.js web interface to write, compile, and run PowLang code.

## Features

- Declare variables of type number and string
- Display expressions and results
- Comparison and arithmetic operators
- `when` loops
- Support for comments
- Conditional statements with ternary operators and if-else

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/samymih/powlang.git
    cd powlang
    ```

2. Install dependencies for the compiler:
    ```sh
    npm install
    ```

3. Go to the `web` folder and install dependencies for the web interface:
    ```sh
    cd web
    npm install
    ```

4. Start the web application:
    ```sh
    npm run dev
    ```

### Running the Compiler

To run the compiler with a PowLang file, use the following command:
```sh
node compiler/compiler.js example.pow
```

### Web Interface

1. Open your browser and navigate to:
    ```
    http://localhost:3000
    ```

2. Enter your PowLang code in the text editor and click "Compile" to see the result and output.

### PowLang Code Example

Here is an example `example.pow` file demonstrating the language features:

```plaintext
# Define a number x
define number x as 5

# Show the result of x + 3
show(x + 3)      # Should print 8

# Show the result of x > 2
show(x > 2)      # Should print true

# Show the result of x =e 5 (x is equal to 5)
show(x =e 5)     # Should print true

# Show the result of x =e 3 (x is not equal to 3)
show(x =e 3)     # Should print false

# Show the result of x =s 5 (x is equal to 5)
show(x =s 5)     # Should print true

# Show the result of x =s 3 (x is greater than or equal to 3)
show(x =s 3)     # Should print true

# Show the result of x =i 5 (x is less than or equal to 5)
show(x =i 5)     # Should print true

# Show the result of x =i 6 (x is less than or equal to 6)
show(x =i 6)     # Should print true

# Show the result of x =i 3 (x is not less than or equal to 3)
show(x =i 3)     # Should print false

# Define a string y
define string y as "hello"

# Show the string y
show(y)          # Should print hello

# Show the result of y =e "hello"
show(y =e "hello") # Should print true

# Show the result of y =e "world"
show(y =e "world") # Should print false

# Define another number z
define number z as 10

# Use a loop to decrement x until it is less than or equal to 0
when x > 0 :: x-- => {
    show(x)
}
```

## Contribution

Contributions are welcome! To contribute, please create a branch, add your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
