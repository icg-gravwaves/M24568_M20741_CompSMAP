# Lecture 10: Numerical Integration

By this point you have seen in many places in your maths/physics degree how important integration and differentiation are in solving **many** problems.

However, there is an important difference between integration and differentiation. Namely, differentiation is much easier than integration in the general case. The reason for this is that you have learned by now a set of rules (chain rule, product rule etc.) which can always be applied step by step to differentiate the vast majority of functions analytically. Sometimes this can take a long time, and it's easy to make a mistake, but it can still be done (I note that there are mathematical computer "languages" like mathematica/maple that can greatly increase the speed of such *analytical* approaches, and reduce the chance of making errors).

Integration in contrast is much harder. It generally relies on trying to find a function that differentiates to what you have and saying "that is the integral". For some cases this is not so bad, but for other cases this can be very difficult.

For this reason it is often easiest to solve an integration problem not by writing hundreds of lines of algebra, but by using a computer and doing it "numerically". I note that differentials can also be evaluated numerically, but here we focus on integration as this is where the analytic solutions are harder.

In this lecture we will write our own code to numerically integrate any function. We will start with the rectangle integration method, before adding complexity and introducing the trapezium rule, and then Simpson's rule. 

## Weekly tasks

```{tableofcontents}
```

