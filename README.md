# bigdata-wasm
The idea of bigdata-wasm is to have a simple and super fast compiler that runs inside the browser environment and parses a language inspired by Kotlin.

When it comes to BigData query processing using code generation JavaScript offers the 'eval()'-method which is relatively slow and often considered as unsecure.
So the main goal is to execute generated code way faster using the WebAssembly VM wich is built directly into the web browser.

## Demo
[Online-Demo](https://rawgit.com/nr23730/bigdata-wasm/master/index.html)

The demo contains a few examples but also offers the option to try your own code.

Note: glue and exports will be automatically generated.

## Supported features

- function definitions (0-n params, 0-1 returns)
- function calls (also recursive)
- value definitions
- variable definitions
- variable assignments
- if/else
- calculation operators(+, -, *, /) including paranthesis
- compare operators (<, <=, >, >=, == !=)
- logic operators (&&,  ||)
- do...while loops
- while loops
- for loops
- println
- linear memory access

## Currently supported data types

- Boolean *(i32)*
- Integer *(i32)*
- Long *(i64)*
- Float *(f32)*
- Double *(f64)*

