import numpy as np

# Define the function for the linear model
def linear_model(x, w, b):
    return np.dot(w, x) + b  # Using np.dot for vectorized operations (if needed)

# Given values
weight = -3.6  # Example weight (w)
bias = 30      # Example bias (b)
x = 2.37       # Car weight in 1000 pounds

# Make a prediction
prediction = linear_model(x, weight, bias)

print("Prediction:", prediction)