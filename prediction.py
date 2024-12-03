import numpy as np
import matplotlib.pyplot as plt

# Example data (car heaviness in thousands of pounds and miles per gallon)
X = np.array([1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0,
              1.6, 2.1, 2.6, 3.1, 3.6, 4.1, 4.6, 5.1, 5.6, 6.1])
y = np.array([35, 33, 30, 28, 25, 22, 20, 18, 15, 13,
              34, 32, 29, 27, 24, 21, 19, 17, 14, 12])

# Function to calculate MSE
def calculate_mse(y_true, y_pred):
    return np.mean((y_true - y_pred) ** 2)

# Function to plot the data and the regression line
def plot_regression_line(X, y, weight, bias):
    y_pred = weight * X + bias
    mse = calculate_mse(y, y_pred)
    
    plt.scatter(X, y, color='blue', label='Data points')
    plt.plot(X, y_pred, color='red', label=f'Regression line\nMSE: {mse:.2f}')
    plt.xlabel('Car Heaviness (thousands of pounds)')
    plt.ylabel('Miles per Gallon')
    plt.legend()
    plt.show()
    
    return mse

# Adjust these values to minimize MSE
weight = -4.5  # Example weight
bias = 40      # Example bias

# Plot the regression line and calculate MSE
mse = plot_regression_line(X, y, weight, bias)
print(f"Weight: {weight}, Bias: {bias}, MSE: {mse:.2f}")