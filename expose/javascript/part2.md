1. It would print out 3 in the terminal. This is because at the end of the for loop, i would be be 3 and since it was declared using var, it can be accessed even outside of the for loop.
2. It would print out 150 in the terminal. This is because at the end of the for loop discountedPrice would be 150 since it is 300 * (0.5). Since was declared using var, it can be accessed even outside of the for loop so there would be no error.
3. It would print out 150 in the terminal. This is because at the end of the for loop discountedPrice would be 150 so finalPrice would also be 150 at the end of the for loop.
4. It would return the array [50,100,150]. This is because the for loop would interate through [100,200,300] and multiple each element with (0.5) and then round each number. Then push each number to the discounted array which is returned.
5. There is an error because i was declared using let which means that it can not be accessed outside of the for loop and line 12 is outside of the for loop.
6. There is an error because discountedPrice was declared using let which means that it can not be accessed outside of the for loop. Line 13 is outside of the for loop and is trying to access a variable that is not defined outside of the loop.
7.  It would print out 150 in the terminal. This is because of the same reason as in number 3 above. And even though it was declared using let, line 14 is in the same block as line 4 where it was declared.
8.  It would return the array [50,100,150] for the same reason as in number 4 above. Change it from var to let does not affect the return value because discounted and finalPrice can still be accessed inside the for loop. 
9. There is an error because i was declared using let which means that it can not be accessed outside of the for loop and line 12 is outside of the for loop.
10. It would print out 3 because length is set to be the length of the prices array. Since we are passing in an array of length 3 into the function, length would also be 3.
11. It would return the array [50,100,150] for the same reason as in number 4 and 8 above. The array dscountedPrice was declared using const which means that it can not be reassigned, but it can still be manipulated.
12. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseLoad[0]
13. 
    1.  32 because the quotes around the 3 makes it a string so it appeneds a 2 at the end instead of adding them to equal 5
    2.  1 because numeric conversion converts the non-number '3' into the number 3 and then subtracts
    3.  3 because the 3 is a number and numeric conversion converts null to 0 
    4.  3null because the quotes around the 3 makes it a string so it appeneds a 'null' at the end.
    5.  4 because numeric conversion converts the non-number true into the number 1 and then adds 3
    6.  0 because numeric conversion converts false and null both to 0 and then adds them
    7.  3undefined because the quotes around the 3 makes it a string and then appends undefined
    8.  NaN because numeric conversion converts the undefine to NaN
14.  
      1.    true because '2' is concerted to the number 2 and 2 is greater than 1
      2.    false because when comparing two strings, the order is defined by the index in the "dictionary" since 2 is larger than 1, 2 has a greater index than 12.
      3.    true true because '2' is concerted to the number 2 and 2 is equal to 2
      4.    false because === checks for equality without type conversion and '2' is not the same as 2 
      5.    false because true has the value of 1 and even with type conversion 1 is not equal to 2
      6.    true because Boolean() returns true for any number that is not 0 
15. == checks for equality  after the operands with diffrent types are converted to numbers while === is a strict equality opertor that checks the equality without type conversion.
17. [2,4,6] callback(array[i]) is calling the function doSomething on each element in array. Since doSomthing returns the number * 2, for every element in array the element*2 is being pushed into newArr.
19. 1
4
2
3
because the setTimeout delays the printing of 2 and 3.



