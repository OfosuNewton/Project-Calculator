        
                    let firstNumber = "";
                    let secondNumber = "";
                    let thirdNumber = "";
                    let operator = "";

                function operate(op,a,b) {
                    a = Number(a);
                    b = Number(b);

                    switch (op) {
                        case '+':
                            return a+b;
                        case '-':
                            return a - b;
                        case 'x':
                            return a * b;
                        case '/':
                            //handle division by zero
                            if (b === 0) return "ERROR: /0"
                            return a / b;
                        default:
                            return b; // should not happen if logic is correct
                    };
                };

                // Function to handle ALL operator clicks (+, -, x, /)
                function calculateAndSetNextOperator(newOperator, screen) {
                    // ----------------------------------------------------
                    // SCENARIO B: Chaining Calculation
                    // Condition: firstOperand, operator, AND secondOperand exist.
                    //            The existence of secondNumber means a calculation is pending.
                    // ----------------------------------------------------
                    if (firstNumber && operator && secondNumber) {
                        // 1. Calculate the pending result (firstNumber [operator] secondNumber)
                        let result = operate(operator, firstNumber, secondNumber);
                        
                        // 2. Handle Division by Zero error
                        if (result === "ERROR: /0") {
                            screen.value = result;
                            // Reset all state for a fresh start
                            firstNumber = '';
                            secondNumber = '';
                            operator = '';
                            return; // Stop execution
                        }
                        
                        // 3. Round the result (important for division)
                        result = Math.round(result * 1000) / 1000;
                        
                        // 4. Save the Result as the NEW firstNumber (The Chain!)
                        firstNumber = result.toString();
                        
                        // 5. Update the display with the result
                        screen.value = firstNumber;
                    } 
                    // ----------------------------------------------------
                    // SCENARIO A: Setting the First Operator
                    // This runs if no calculation was pending, or if we just finished a chain.
                    // ----------------------------------------------------
                    
                    // Set the NEW operator for the next calculation
                    operator = newOperator;
                    
                    // Clear secondNumber so the user can start typing the new number
                    secondNumber = ''; 
                }

                // function Add() {
                //     // convertin strings to numbers
                //     let a = Number(firstNumber);
                //     let b  = Number(secondNumber);
                //     // let c = Number(thirdNumber);
                //     let result = (`Answer: ${a + b}`);
                //     console.log(result);

                //      // Reset for next calculation
                //     firstNumber = "";
                //     secondNumber = "";
                //     thirdNumber = '';
                //     operator = "";          

                   
                    

                //     // show result on the screen
                //     document.querySelector('#calc-screen').value = result;

                // };

              
                // Add();

                // function Subtract() {
                //     let a = Number(firstNumber);
                //     let b = Number(secondNumber);
                //     const result1 = (`Answer: ${a - b}`)
                //     const result2 = (`Answer: ${a - b}`)
                //         if (a > b) {
                //             document.querySelector('#calc-screen').value = result1;


                //         } else {
                //             document.querySelector('#calc-screen').value = result2;

                //     }
                // }
                // Subtract();

                // function multiply () {
                //     let a = Number(firstNumber);
                //     let b = Number(secondNumber);
                //       let result1 = (`Answer: -${a * b}`);
                //     if (a == -a) {
                //         document.querySelector('#calc-screen').value = result1;

                //     };
                  

                //     document.querySelector('#calc-screen').value = result;

                //     firstNumber = "";
                //     secondNumber = "";
                //     operator = "";
                // }

                // multiply();

                // function divide () {
                //     let a = Number(firstNumber);
                //     let b = Number(secondNumber);
                //     let result = (`Answer: ${a / b}`)
                //     console.log(result);

                //     // displaying result on the screen
                //     document.querySelector("#calc-screen").value = result;
                // }
                //  divide();

                                  
                 function populateDisplay() {
                    let display_btns = document.querySelector('.num-btn');
                    let screen = document.querySelector('#calc-screen');
                    let currentInput = "";

                   

                    display_btns.addEventListener('click', (e) => {
                        let target = e.target;
                       

                        switch(target.id) {
                            case 'btn-1':
                                if(!operator) {
                                    firstNumber += "1";
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += "1";
                                    screen.value = secondNumber;
                                };
                                break;
                            
                            case 'btn-2':
                                if(!operator) {
                                    firstNumber += '2';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '2';
                                    screen.value = secondNumber;
                                };
                                console.log(2);
                                break;
                            case 'btn-3':
                                if(!operator) {
                                    firstNumber += '3';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '3';
                                    screen.value = secondNumber;
                                }
                                console.log(3);
                                break;
                            case 'btn-4':
                               if(!operator) {
                                    firstNumber += '4';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '4';
                                    screen.value = secondNumber;
                                }
                                console.log(4);
                                break;
                            case 'btn-5':
                                if(!operator) {
                                    firstNumber += '5';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '5';
                                    screen.value = secondNumber;
                                }
                                console.log(5);
                                break;
                            case 'btn-6':
                                if(!operator) {
                                    firstNumber += '6';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '6';
                                    screen.value = secondNumber;
                                }
                                console.log(6);
                                break;
                            case 'btn-7':
                                if(!operator) {
                                    firstNumber += '7';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '7';
                                    screen.value = secondNumber;
                                }
                                console.log(7);
                                break;
                            case 'btn-8':
                                if(!operator) {
                                    firstNumber += '8';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '8';
                                    screen.value = secondNumber;
                                }
                                console.log(8);
                                break;
                            case 'btn-9':
                                if(!operator) {
                                    firstNumber += '9';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '9';
                                    screen.value = secondNumber;
                                }
                                console.log(9);
                                break;
                            case 'btn-0':
                                if(!operator) {
                                    firstNumber += '0';
                                    screen.value = firstNumber;
                                } else {
                                    secondNumber += '0';
                                    screen.value = secondNumber;
                                }
                                console.log(0);
                                break;
                            case 'btn-+':
                                   calculateAndSetNextOperator('+', screen);
                                   break;
                                // Apply this same change to '-', 'x', and '/'
                                case 'btn--':
                                    calculateAndSetNextOperator('-', screen);
                                    break;
                                // ... and so on
                                                                
                            case 'btn--':
                                operator = '-';
                                screen.value = operator;
                                console.log('-');
                                break;
                            case 'btn-x':
                                operator = 'x';
                                screen.value = operator;
                                console.log('x');
                                break;
                            case 'btn-/':
                                operator = '/';
                                screen.value = operator;
                                console.log('/');
                                break;

                            case 'btn-+/-':
                                operator = '-'
                                screen.value = operator;
                                break;
                            case 'btn-=':
                                // Only calculate if all parts of the equation are available
                                if (firstNumber && operator && secondNumber) {
                                    let finalResult = operate(operator, firstNumber, secondNumber);
                                    
                                    if (finalResult === "ERROR: /0") {
                                        screen.value = finalResult;
                                    } else {
                                        // Round the result
                                        finalResult = Math.round(finalResult * 1000) / 1000;
                                        screen.value = finalResult;
                                    }

                                    // RESET STATE for a completely new calculation
                                    firstNumber = finalResult.toString(); // Keep result for starting next calc
                                    secondNumber = ''; 
                                    operator = ''; // Remove the operator
                                }
                                break;
                                
                                
                                
                            
                                
                            
                        };
                    });
                        
                            
                 };
                 function clear() {
                    screen = document.querySelector("#calc-screen");
                    screen.value = "";
                    firstNumber = "";
                    secondNumber = "";
                    operator = '';
                    
                };
                screen.addEventListener("load", (event) => {
                      console.log("The page is fully loaded!");
                     });

        
                       
                const cls = document.querySelector("#cls-btn");
     
                cls.addEventListener('click',clear)

                    




                 populateDisplay();
    //                  
