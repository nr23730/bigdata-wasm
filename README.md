# bigdata-wasm
The idea of bigdata-wasm is to have a simple and super fast compiler that runs inside the browser environment and parses a language inspired by Kotlin.

When it comes to BigData query processing using code generation JavaScript offers the 'eval()'-method which is relatively slow and often considered as unsecure.
So the main goal is to execute generated code way faster using the WebAssembly VM wich is built directly into the web browser.

## Demo
[Online-Demo](https://rawgit.com/nr23730/bigdata-wasm/master/index.html)

The demo contains a few examples but also offers the option to try your own code.

Note: glue and exports will be automatically generated.

## TPC-H-Examples

The examples of [TPC-H](http://www.tpc.org/tpch/) queries deal with data generated by *dbgen*, shipped with the TPC-H tool archive. To compile *dbgen* the following settings were used:

```
################
## CHANGE NAME OF ANSI COMPILER HERE
################
CC      = gcc
# Current values for DATABASE are: INFORMIX, DB2, TDAT (Teradata)
#                                  SQLSERVER, SYBASE, ORACLE, VECTORWISE
# Current values for MACHINE are:  ATT, DOS, HP, IBM, ICL, MVS, 
#                                  SGI, SUN, U2200, VMS, LINUX, WIN32 
# Current values for WORKLOAD are:  TPCH
DATABASE= SQLSERVER
MACHINE = LINUX
WORKLOAD = TPCH
 ```
 
 The data files were generated using the following command:
 
 ```
./dbgen -v -s x
```

Replace ``x`` with your desired sample size in GB.

**Note:** Be careful at selecting your input data. Browsers behave different when you select a file from a new folder. Chromium based browsers change the base folder for all file dialogs, while Firefox does not.

## Supported features

- function definitions (0-n params, 0-1 returns)
- modifiers (public, private) for functions
- function calls (also recursive)
- value definitions
- global variable definitions
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

## Supported data types

- Boolean *(i32)*
- Integer *(i32)*
- Long *(i64)*
- Float *(f32)*
- Double *(f64)*

